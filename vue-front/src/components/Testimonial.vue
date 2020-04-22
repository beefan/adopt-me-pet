<template lang="pug">
div
    header#testimonial-header TESTIMONIAL OF THE MONTH
    div#testimonial
        img(v-if="!video" src="@/assets/img/testimonial.jpg")
</template>

<script>
export default {
  data() {
    return {
      videoApi: process.env.VUE_APP_VIDEO_API_URL,
      video: null
    };
  },
  methods: {
    getVideoJSON() {
      fetch(this.videoApi)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          this.video = data;
          this.insertIFrame(this.video.html);
        })
        .catch(err => {
          console.error(err);
        });
    },
    insertIFrame(html) {
      document.getElementById("testimonial").innerHTML = html;
    }
  },
  created() {
    this.video = this.getVideoJSON();
  }
};
</script>

<style lang="sass">
#testimonial
  img
    width: 100%
    iframe
      width: 100%
      height: 400px
      margin-bottom: 0
</style>
