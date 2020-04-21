<template lang="pug">
  b-container(fluid)
    div#header-img
        img(src="../assets/img/dogs.jpg")
    div#header-info
        b-row
            h2 This is your new family!
            button 
                router-link(to="/events") Adopt Now
        b-row#filler
</template>

<script>
export default {

}
</script>

<style lang="sass">
#header-img
    margin-top: -14%
    overflow: hidden
    height: auto
    img
        width: 100%
#header-info
    margin-top: -14%
    height: 30%
    background-color: white
#filler
    background-color: white
    height: 40%
</style>