<template>
  <div class="login-form">
    <div class="container">
      <div class="login-wrapper">
        <h1>B2C-LOGIN.VUE</h1>
        <form @submit.prevent="submit">
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
          <button type="button" @click="reset">Reset</button>
          <button type="submit">Submit</button>
        </form>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import cookie from "js-cookie";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "", // Add error message state
    };
  },
  methods: {
    reset() {
      this.email = "";
      this.password = "";
    },
    submit() {
      this.errorMessage = ""; // Reset error message before each submission
      this.$axios
        .post("auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          // console.log(response)
          this.getDataUser(response.data);
        })
        .catch((error) => {
          console.error("Login failed:", error.response.data);
          this.errorMessage = "Login failed: " + (error.response.data.message || "Invalid credentials");
        });
    },
    getDataUser(data) {
      this.$axios
        .get("auth/profile", {
          headers: {
            Authorization: "Bearer " + data.access_token,
          },
        })
        .then((response) => {
          console.log("resProfile", response);
          let userdata = Object.assign(response.data, data);
          let forcookie = JSON.stringify(userdata);
          cookie.set("userdata", forcookie, { expires: 1 }); // 1 day
          this.$store.commit("SET_LOGIN", userdata);
          this.$router.push({ path: "/home" });
        })
        .catch((error) => {
          console.error("Profile fetch failed:", error.response.data);
          this.errorMessage = "Profile fetch failed: " + (error.response.data.message || "Error fetching profile");
        });
    },
  },
};
</script>

<style scoped lang="scss">
.error {
  color: red;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #e2ebf0, #cfd9df);
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 50px;
  margin: 0 auto;
}

.login-form {
  background: url("@/assets/img/pexels-pixabay-531880.jpg") no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
}

.login-wrapper {
  background: rgba(255, 255, 255, 0.9);
  padding: 40px 30px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  margin: 50px auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.login-wrapper:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

h1 {
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-top: 10px;
  margin-bottom: 5px;
  color: #2c3e50;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  font-size: 14px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  margin-top: 10px;
}

input:focus {
  border-color: #3498db;
  outline: none;
  box-shadow: 0 0 10px rgba(52, 152, 219, 0.5);
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: linear-gradient(45deg, #3498db, #2980b9);
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  margin-top: 20px;
}

button:hover {
  background: linear-gradient(45deg, #2980b9, #3498db);
  transform: translateY(-2px);
}
</style>
