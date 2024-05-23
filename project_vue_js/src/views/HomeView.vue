<template>
  <div class="home">
    <img alt="Vue logo" src="..//assets/img/logo.png" />
    <HelloWorld msg="Welcome B2Camp Members into Your Vue.js App" />
    <BCarousel controls>
      <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=1" />
      <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=2" />
      <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=3" />
    </BCarousel>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
