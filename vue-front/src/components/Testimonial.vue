<template lang="pug">
div
    header#testimonial-header TESTIMONIAL OF THE MONTH
    div#testimonial(style="--aspect-ratio: 16/9;")
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

<style>
[style*="--aspect-ratio"] > :first-child {
  width: 100%;
}
[style*="--aspect-ratio"] > img {  
  height: auto;
} 
@supports (--custom:property) {
  [style*="--aspect-ratio"] {
    position: relative;
  }
  [style*="--aspect-ratio"]::before {
    content: "";
    display: block;
    padding-bottom: calc(100% / (var(--aspect-ratio)));
  }  
  [style*="--aspect-ratio"] > :first-child {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }  
}
</style>
