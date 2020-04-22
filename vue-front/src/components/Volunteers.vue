<template lang="pug">
div#volunteer-box-shadow.flex-grow-1
    header#volunteer-header VOLUNTEERS
    div#volunteer-container
        img(src="../assets/img/girl.png" alt="black and white image of woman holding dog")
        p Amazing people, doing the difference every single day. Join us now and be a part of a community that is changing the world.
        b-button#volunteer-card-btn JOIN US
</template>

<script>
export default {};
</script>

<style lang="sass">
#volunteer-container
    width: 100%
    padding: 0px
    img
        width: 100%
    p, button
        margin: 5%
        margin-right: 15%
        line-height: 1.5rem
    button
        min-width: 15%
#volunteer-box-shadow
    box-shadow: 2px 2px 5px grey, -2px -2px 10px #A9A9A9
</style>
