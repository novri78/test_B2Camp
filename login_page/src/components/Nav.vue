<template>
  <nav class="nav-menu">
    <button @click="goToHome" class="nav-home">
      <h2>Home</h2>
    </button>
    <button @click="goToAbout" class="nav-about">
      <h2>About</h2>
    </button>
    <router-view />
    <Logout />
  </nav>
</template>

<script>
import About from "@/views/AboutView.vue";
import Logout from "@/views/LogoutPage.vue";
import HomeView from "@/views/HomeView.vue"

export default {
  name: "HomeView",
  components: {
    HomeView,
    Logout,
    About,
  },
  computed: {},
  methods: {
    goToHome() {
      this.$router.push("/home");
    },
    goToAbout() {
      this.$router.push("/about");
    },
  },
};
</script>

<style>
.nav-menu {
    margin-top: -25px;
}
.nav-home {
    margin-left: -85%;
    border: none;
    border-radius: 5px;
    font-size: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-about {
    border: none;
    border-radius: 5px;
    font-size: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>