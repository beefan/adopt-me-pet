<template lang="pug">
  b-container(fluid)
    b-row
      banner
    b-row
      b-col(sm="4")
        volunteer
      b-col(sm="8")
        testimonial
    b-row
      b-col(sm="8")
        list-widget
      b-col(sm="4")
        img(src="@/assets/img/friend-in-trouble.png")
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
    'banner': HomeBanner,
    'volunteer': Volunteer,
    'testimonial': Testimonial,
    'list-widget': ListWidget
  }
};
</script>
<style lang="sass">
div.home
  background: white
</style>
