<template lang="pug">
b-container#head-nav(fluid)
    b-navbar(toggleable="sm")
        b-navbar-toggle(target="nav-text-collapse")
        b-navbar-brand
            img(src="../assets/img/logo.png")
            router-link(to="/" tag="h2") Adoptme.Org
        b-collapse(id="nav-text-collapse" is-nav)
            b-navbar-nav
                b-nav-item(to="/what-we-do") 
                    h1 WHAT we do
                b-nav-item(to="/who-we-are") 
                    h1 WHO we are
                b-nav-item(to="/events") 
                    h1 EVENTS adoption
</template>
<script>
export default {

}
</script>

<style lang="sass">
#head-nav
    position: fixed
    left: 0px
    top: 0px
    z-index: 9
    img 
        width: 17%
        margin: 2%
    h2
        color: white
        font-size: 1.5rem
    h1
        color: white
        font-size: .9rem
        font-weight: bolder
    .navbar-brand
        display: flex
        flex-flow: row
#nav-text-collapse
    position: absolute
    right: 2%
</style>