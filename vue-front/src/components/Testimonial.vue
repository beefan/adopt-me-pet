<template lang="pug">
  b-container#testimonial(fluid)
    div(v-if="video")
        h1 {{JSON.stringify(video)}}
    div(v-if="!video")
        h1 {{this.videoApi}}
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