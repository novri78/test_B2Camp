<template>
  <div id="app">
    <nav>
      <button @click="goToHome" class="nav-button">Home</button>
      <button @click="goToProfile" class="nav-button">Profile</button>
      <button @click="logout" class="btn-logout">Logout</button>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "App",
  computed: {
    ...mapState(['isLoggedIn']),
  },
  methods: {
    goToHome() {
      this.$router.push("/home");
    },
    goToProfile() {
      this.$router.push("/profile");
    },
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  .nav-button {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: linear-gradient(135deg, #3498db, #9b59b6);
    color: #ffffff;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;
  }

  .nav-button:hover {
    background: linear-gradient(135deg, #9b59b6, #3498db);
    transform: scale(1.05);
  }
}

.btn-logout {
  padding: 10px 20px;
  background-color: #e74c3c;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.btn-logout:hover {
  background-color: #c0392b;
  transform: scale(1.05);
}

.btn-logout:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(231, 76, 60, 0.5);
}
</style>
