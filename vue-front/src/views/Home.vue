<template lang="pug">
  b-container#home(fluid)
    b-row
      banner
    b-row#post-banner
      b-col.flex-grow-1(sm="4" style="display: flex; flex-flow: column")
        volunteer
      b-col.flex-grow-1(sm="8")
        testimonial
    b-row#last-row
      b-col(sm="8")
        list-widget
      b-col(sm="4")
        img(src="@/assets/img/adopt-me-dog.png")
</template>

<script>
// @ is an alias to /src
import HomeBanner from "@/components/HomeBanner.vue";
import Volunteer from "@/components/Volunteers.vue";
import Testimonial from "@/components/Testimonial.vue";
import ListWidget from "@/components/ListWidget.vue";

export default {
  name: "Home",
  components: {
    banner: HomeBanner,
    volunteer: Volunteer,
    testimonial: Testimonial,
    "list-widget": ListWidget
  }
};
</script>
<style lang="sass">
#post-banner, #last-row
  margin-top: 3%
  margin-left: 5%
  margin-right: 5%
  display: flex
#last-row
  margin-bottom: 3%
  img
    width: 100%
</style>
