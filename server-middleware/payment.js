const express = require('express');
const cors = require("cors");
const Stripe = require('stripe');
const stripe = Stripe('sk_test_Dx79fkeRBlp4VvHv7FTpyEkj');

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*'
}))

app.post('/api/payment', async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 101,
    currency: 'chf',
  });
  console.log('payment intent')
  console.log(paymentIntent)
  res.json({ paymentIntent });
});

app.post('/api/print-motherfucker', async (req, res) => {
  console.log('print motherfucker print');
  console.log(req.body);
});

module.exports = app;
