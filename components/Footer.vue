<template>
  <footer class="section rab-footer">
    <div class="pt-5 divider"></div>
    <div class="container">
      <div class="is-flex-tablet is-justify-content-between is-align-items-center">
        <p>Playground</p>
        <div class="py-2 is-hidden-tablet"></div>
        <div class="ml-auto">
          <a class="mr-4 is-inline-block" href="">
            <i class="lni lni-instagram icon-custom icon-size-1 social"></i>
          </a>
          <a class="mr-4 is-inline-block" href="">
            <i class="lni lni-facebook-filled icon-custom icon-size-1 social"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.divider {
  border-top: 1px solid #dee2e6;
}

.social {
  color: black;
}

.social:hover {
  color: #ed4341;
}
</style>
