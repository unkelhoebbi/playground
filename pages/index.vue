<template>
  <main>
    <div class="container mt-8">
      <h1>Payment request</h1>
      <h2 :value="available">{{ available }}</h2>
      <div id="payment-request-button">
        <h1>Stripe element</h1>
        <p>{{ result }}</p>
      </div>
    </div>
  </main>
</template>
<script>
import {loadStripe} from '@stripe/stripe-js';

export default {
  data() {
    return {
      available: 'Initial',
      result: null
    }
  },
  async mounted() {
    let stripe = await loadStripe('pk_test_1d1XKO6boRcHTYsdarLaP8fH', {
      apiVersion: "2020-08-27",
    });

    const paymentRequest = stripe.paymentRequest({
      country: 'CH',
      currency: 'chf',
      total: {
        label: 'Demo total',
        amount: 101,
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    this.stripe = paymentRequest

    const elements = stripe.elements();
    const prButton = elements.create('paymentRequestButton', {
      paymentRequest: paymentRequest,
    });

    // Check the availability of the Payment Request API first.
    let result = await paymentRequest.canMakePayment()
    console.log(result)
    if (result) {
      prButton.mount('#payment-request-button');
      this.available = 'Apple pay'

      paymentRequest.on('paymentmethod', function (ev) {

        fetch(`${process.env.API_BASE_URL}/payment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((response) => {
          response.json().then((body) => {
            stripe.confirmCardPayment(
              body.paymentIntent.client_secret,
              {payment_method: ev.paymentMethod.id},
              {handleActions: false}
            ).then(function (confirmResult) {
              fetch(`${process.env.API_BASE_URL}/print-motherfucker`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  products: confirmResult
                }),
              });
              if (confirmResult.error) {
                ev.complete('fail');
                console.log(confirmResult.error)
              } else {
                ev.complete('success');
                if (confirmResult.paymentIntent.status === "requires_action") {
                  // Let Stripe.js handle the rest of the payment flow.
                  stripe.confirmCardPayment(body.paymentIntent.client_secret).then(function (result) {
                    if (result.error) {
                      // The payment failed -- ask your customer for a new payment method.
                      console.log(result.error)
                    } else {
                      // The payment has succeeded.
                    }
                  });
                } else {
                  // The payment has succeeded.
                }
              }
            });
          })
        });
      });

    } else {
      document.getElementById('payment-request-button').style.display = 'none';
      this.available = 'No Apple pay'
    }
  },
  computed: {
    getPaymentRequestAvailability() {

    }
  }
};
</script>
<style scoped>
</style>
