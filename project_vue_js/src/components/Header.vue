<template>
  <nav>
    <div class="logo">
      <a href="#"><img src="@/assets/img/Group 522.png" alt="Logo B2Camp"></a>
    </div>
    <ul class="links">
      <li :class="{ selected: activeMenu === 'home' }">
        <a href="#home" @click="setActiveMenu('home')">Home</a>
      </li>
      <li :class="{ selected: activeMenu === 'about' }">
        <a href="#about_us" @click="setActiveMenu('about')">About</a>
      </li>
      <li :class="{ selected: activeMenu === 'services' }">
        <a href="#services" @click="setActiveMenu('services')">Services</a>
      </li>
      <li :class="{ selected: activeMenu === 'contact' }">
        <a href="#contact_us" @click="setActiveMenu('contact')">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeMenu: 'home' // Default active menu
    };
  },
  methods: {
    setActiveMenu(menu) {
      this.activeMenu = menu;
    }
  }
};
</script>

<style scoped>
/* Add your styles here */

</style>
