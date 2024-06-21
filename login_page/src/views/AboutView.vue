<template>
  <div>
    <Nav />
  </div>
  <div class="about-container">
    <h1>About Us</h1>
    <p>
      Welcome to our application! Our mission is to provide the best user
      experience. We are constantly improving and updating our services to meet
      the needs of our users.
    </p>
    <p>
      This app is built using the latest web technologies including
      <b>Vue.js, Vue Router, Vuex, and Axios</b>.
    </p>
    <p>
      We hope you enjoy using our application. If you have any feedback, feel
      free to reach out to us.
    </p>
  </div>
  <div>
    <section v-if="userdata">
      <h1>Bonjour.. I am {{ userdata.name }}</h1>
      <img :src="userdata.avatar" alt="User Avatar" />
      <p>As a {{ userdata.role }}</p>
    </section>
    <section v-else>
      <h1>Loading user data...</h1>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import About from "@/views/AboutView.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Logout from "@/views/LogoutPage.vue";
import Nav from "@/components/Nav.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Logout,
    About,
    Nav
  },
  computed: {
    ...mapState(["userdata"]),
  },
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

<style scoped lang="scss">
.about-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.about-container h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.about-container p {
  font-size: 1.2em;
  line-height: 1.6;
  color: #666;
  margin-bottom: 20px;
}
</style>
