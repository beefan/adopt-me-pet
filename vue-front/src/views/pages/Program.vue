<template lang="pug">
    b-container#program-view
        h1 {{ program.name }}
        b-row
            b-col(md="4")
                b-img(:src="program.logoUrl")
            b-col(md="8")
                p {{ program.desc }}
        div#more-info
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Et magnis dis parturient montes nascetur. In mollis nunc sed id semper risus in. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Massa enim nec dui nunc mattis enim ut tellus. Morbi tristique senectus et netus et malesuada. 
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Et magnis dis parturient montes nascetur. In mollis nunc sed id semper risus in. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Massa enim nec dui nunc mattis enim ut tellus. Morbi tristique senectus et netus et malesuada. 
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Et magnis dis parturient montes nascetur. In mollis nunc sed id semper risus in. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Massa enim nec dui nunc mattis enim ut tellus. Morbi tristique senectus et netus et malesuada. 
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Et magnis dis parturient montes nascetur. In mollis nunc sed id semper risus in. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Massa enim nec dui nunc mattis enim ut tellus. Morbi tristique senectus et netus et malesuada. 
</template>
<script>
export default {
  props: {
    program: Object
  },
  created() {
    if (!this.program) {
      this.$router.push({ path: "/" });
    }
  }
};
</script>
<style lang="sass">
#more-info
    border-top: 2px solid black
    margin-left: 8%
    margin-right: 8%
    p
        margin-top: 3%
#program-view
  margin: 0
  padding: 0
  margin-top: 10vw
  margin-bottom: 5%
  margin-left: auto
  margin-right: auto
  box-shadow: 2px 2px 5px grey, -2px -2px 10px #A9A9A9
  h1
    font-size: 1.5rem
    text-align: center
    font-weight: bolder
    color: white
    width: 100%
    padding: 10%
  img
    width: 100%
    border-radius: 5px
    padding: 3%
  p
    padding: 3%
</style>
