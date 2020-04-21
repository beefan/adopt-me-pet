<template lang="pug">
b-container(fluid)
    b-navbar#head-nav(toggleable="sm")
        b-navbar-toggle(target="nav-text-collapse")
        b-navbar-brand 
            img(src="../assets/img/logo.png")
            router-link(to="/") Adoptme.Org
        b-collapse(id="nav-text-collapse" is-nav)
            b-navbar-nav
            b-navbar-item
                router-link(to="/what-we-do") WHAT we do
            b-navbar-item
                router-link(to="/who-we-are") WHO we are
            b-navbar-item
                router-link(to="/events") EVENTS adoption
</template>
<script>
export default {

}
</script>

<style lang="sass">
</style>