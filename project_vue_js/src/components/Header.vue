<template>
  <nav>
    <div class="logo">
      <router-link to="/" @click="setActiveMenu('home')"><img src="@/assets/img/Group 522.png" alt="Logo B2Camp"></router-link>
    </div>
    <ul class="links">
      <li :class="{ selected: activeMenu === 'home' }">
        <router-link to="/" @click="setActiveMenu('home')">Home</router-link>
      </li>
      <li :class="{ selected: activeMenu === 'about' }">
        <router-link to="/about" @click="setActiveMenu('about')">About</router-link>
      </li>
      <li :class="{ selected: activeMenu === 'services' }">
        <router-link to="/services" @click="setActiveMenu('services')">Services</router-link>
      </li>
      <li :class="{ selected: activeMenu === 'contact' }">
        <router-link to="/contacts" @click="setActiveMenu('contacts')">Contact</router-link>
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