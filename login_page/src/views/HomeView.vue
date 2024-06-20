<template>
  <div class="home">
    <div>
      <Nav/>
    </div>
    
    <div class="logo-home-vue">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import About from "@/views/AboutView.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Logout from "@/views/LogoutPage.vue";
import Nav from "@/components/Nav.vue"

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Logout,
    About,
    Nav
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

<style scoped lang="scss">
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

.logout-button {
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  background-color: #e74c3c;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.logout-button:hover {
  background-color: #c0392b;
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}
</style>
