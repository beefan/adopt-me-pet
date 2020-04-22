<template lang="pug">
  b-container#footer
    div
        b-row
            b-col#footer-logo(sm="4")
                    img(src="../assets/img/logo.png")
                    router-link(to="/" tag="h2") Adoptme.Org
            b-col(sm="8")
        b-row 
            b-col(sm="4")
                p Main St #1245
                p Amazing City, 45677
            b-col(sm="8")
                b-navbar-nav 
                    b-nav-item(to="/what-we-do") 
                        h1 WHAT we do
                    b-nav-item(to="/who-we-are") 
                        h1 WHO we are
                    b-nav-item(to="/events") 
                        h1 EVENTS adoption
        b-row 
            p#license Some images were taken from unsplash.com
    
</template>
<script>
export default {};
</script>
<style lang="sass">
#footer.container
    position: absolute
    z-index: 8
    margin-bottom: 0
    left: 0
    padding: 3%
    max-width: 120%
    img
        width: 17%
        margin: 2%
    p
        color: white
        font-size: .8rem
        line-height: .4rem
    h2
        color: white
        font-size: 2rem
    h1
        color: white
        font-size: .9rem
        font-weight: bolder
    p#license
        margin-top: 5%
        margin-bottom: 0
        font-size: .7rem
    .row
        margin-left: 10%
        .col
            flex-wrap: wrap
    .navbar-nav
        flex-flow: row
        flex-wrap: wrap
        justify-content: space-evenly
        margin-left: 5%
#footer-logo
    display: flex
    flex-flex: row
    margin-bottom: 3%
</style>
