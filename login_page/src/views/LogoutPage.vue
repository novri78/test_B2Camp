<template>
  <button @click="logout" class="btn-logout">Logout</button>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        
        this.$router.push("/"); // Redirect to login page after logout 
            
      })
    },
  },
};
</script>

<style>
.btn-logout {
  position: fixed;
  top: 20px;
  right: 20px;
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