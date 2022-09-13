<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink to="/" class="navbar-item">
      </NuxtLink>
      <a v-on:click="onBurgerClick"
         v-bind:class="{'is-active': isBurgerActive}"
         role="button" class="navbar-burger" aria-label="menu"
         aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" v-bind:class="{'is-active': isBurgerActive}">
      <div class="navbar-start">
        <NuxtLink class="navbar-item" to="/" v-on:click="onBurgerClick">Home</NuxtLink>
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end is-align-items-center mr-5">
      </div>
      <div class="ml-custom navbar-end is-align-items-center mr-5">
        <NuxtLink class="navbar-item" to="/">
          <button class="button navbar-item button-contact">Lässiger Button</button>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isBurgerActive: false
    }
  },
  computed: {
  },
  methods: {
    onBurgerClick: function () {
      this.isBurgerActive = !this.isBurgerActive;
    }
  },
  watch: {
    $route() {
    }
  }
};
</script>

<style scoped>
.ml-custom {
  margin-left: 1rem;
}
</style>
