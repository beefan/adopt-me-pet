<template lang="pug">
  b-container#testimonial(fluid)
    div(v-if="video")
        div(:innerHTML="video.html")
    div(v-if="!video")
        img(src="@/assets/img/testimonial.jpg")
</template>

<script>
export default {
  data() {
    return {
      videoApi: process.env.VUE_APP_VIDEO_API_URL,
      video: {}
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
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  created() {
    this.video = this.getVideoJSON();
  }
};
</script>

<style>
</style>