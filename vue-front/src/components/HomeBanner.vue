<template lang="pug">
  b-row#home-banner-container
    div
        canvas#blank-canvas
    div#header-info
        b-row
            h2 This is your new family!
        b-row
            b-button#adopt-button(v-b-tooltip.hover.right to="/events" title="Expand your family at an upcoming adoption event!") 
                h1 ADOPT NOW
</template>

<script>
export default {

}
</script>

<style lang="sass">
#home-banner-container
    background: black
    background-image: url("../assets/img/dogs.jpg")
    background-position: center
    background-size: cover
    width: 120%
#header-info
    width: 100%
    margin-top: 20%
    background: rgba(0, 0, 0, 0.3)
    .row
        margin-left: 5%
        opacity: none
    h2
        color: white
        margin-top: 1%
        font-size: 2.7rem
#blank-canvas
    height: auto
    background: transparent
#adopt-button
    border: 1px solid white
    background: transparent
    border-radius: 0px
    margin-bottom: 5%
    min-width: 15%
    h1 
        font-size: .7rem
        font-weight: bold
        text-align: left
        margin-top: auto
        margin-bottom: auto
#adopt-button:hover
    background: black
</style>