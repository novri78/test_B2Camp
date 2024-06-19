<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <About />
    <Services />
    <Contacts />
    <Footer />
    <BallAnimation />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Services from "./views/Services.vue";
import Contacts from "./views/Contacts.vue";
import Footer from "./components/Footer.vue";
import BallAnimation from "./components/BallAnimation.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
    About,
    Services,
    Contacts,
    Footer,
    BallAnimation,
  },
};
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
