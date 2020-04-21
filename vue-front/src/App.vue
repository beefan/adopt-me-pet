<template lang="pug">
  b-container#app(fluid)
    header-nav
    router-view
    footer-info
</template>
<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  components: {
    "header-nav": Header,
    "footer-info": Footer
  }
}
</script>
<style lang="scss">
</style>
