<template>
  <div class="home">
    <div class="logo-home-vue">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>

    <div class="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our application! Our mission is to provide the best user
        experience. We are constantly improving and updating our services to
        meet the needs of our users.
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
  </div>
</template>

<script>
import About from "@/views/ProfileView.vue";
import Logout from "@/views/LogoutPage.vue";

export default {
  name: "HomeView",
  components: {
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
    goToProduct() {
      this.$router.push("/product");
    }
  },
};
</script>

<style scoped lang="scss">

.home {
  background: url("@/assets/img/pict_background2.png") no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  height: 85vh;
}
/* Navbar Styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 15px 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-button {
  font-size: 1.2em;
  background: linear-gradient(135deg, #3498db, #9b59b6);
  border: none;
  border-radius: 30px;
  color: #fff;
  padding: 10px 30px;
  margin-right: 20px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.nav-button:hover {
  background: linear-gradient(135deg, #9b59b6, #3498db);
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.logo-home-vue {
  text-align: center;
  margin: 20px 0;
}

.about-container {
  max-width: 800px;
  margin: 10px auto;
  padding: 10px;
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

.logout-button {
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  background-color: #e74c3c;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.logout-button:hover {
  background-color: #c0392b;
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}
</style>
