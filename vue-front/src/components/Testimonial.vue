<template lang="pug">
div
    header#testimonial-header TESTIMONIAL OF THE MONTH
    div#testimonial.embed-responsive.embed-responsive-16by9
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
      let testimonial = document.getElementById("testimonial");
      testimonial.innerHTML = html;
      testimonial.querySelector("iframe").classList.add("embed-responsive-item");
    }
  },
  created() {
    this.video = this.getVideoJSON();
  }
};
</script>

<style>
</style>
