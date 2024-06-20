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
          <button  @click="reset">Reset</button>  
          <button type="submit">Submit</button>
        </form>
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
    };
  },
  methods: {
    reset() {
      this.email = "";
      this.password = "";
    },
    submit() {
      this.$axios
        .post("auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          // console.log(response)
          this.getDataUser(response.data);
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
          cookie.set("userdata", forcookie, { expires: 1 });
          // 1 = 1 jam
          this.$store.commit("SET_LOGIN", forcookie);
          this.$router.push({ path: "/home" });
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
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
  
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 50px 50px;
  margin: 0 auto;
}

.login-form {
    background-image: url('@/assets/img/pict_background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.login-wrapper {
  background: rgba(255, 255, 255, 0.97);
  padding: 70px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  margin: 50px auto;
  transition: transform 0.3s ease;
  margin-top: 80px; 
  margin-left: 540px; 
}

.login-wrapper:hover {
  transform: translateY(-10px);
}

h1 {
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #666;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus {
  border-color: #3498db;
  outline: none;
  box-shadow: 0 0 10px rgba(52, 152, 219, 0.5);
}

button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 5px;
  background: linear-gradient(45deg, #3498db, #2980b9);
//   color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  margin-top: 10px;
}

button:hover {
  background: linear-gradient(45deg, #2980b9, #3498db);
  transform: scale(1.05);
}

.register-link {
  text-align: center;
  margin-top: 20px;
  color: #666;
}

.register-link a {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
}

.register-link a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .login-wrapper {
    padding: 30px 20px;
    margin: 20px auto;
  }
}

@media (max-width: 480px) {
  .login-wrapper {
    padding: 20px 15px;
  }

  body {
    min-height: 500vh;
  }
}
</style>
