<template lang="pug">
div#volunteer-container
    b-card(
    header="Volunteers"
    header-tag="header"
    :img-src="require('../assets/img/girl.png')"
    img-alt="black and white image of woman holding dog"
    img-bottom
    no-body
    tag="article"
    style="max-width: 20rem;"
    class="mb-2")
    
    b-card-text Amazing people, doing the difference every single day. Join us now and be a part of a community that is changing the world.
    b-button(href="#" variant="primary") JOIN US
</template>

<script>
export default {

}
</script>

<style lang="sass">
    #volunteer-container
        width: 100%
        border: 2px solid black
</style>