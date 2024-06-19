<template>
  <div class="search">
    <label for="filterProduk"></label>
    <input
      v-model="searchQuery"
      placeholder="Hello, please type here"
      type="text"
      id="filterProduk"
    />
    <button @click="emitSearch">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    emitSearch() {
      this.$store.commit("SET_FILTER_SEARCH", this.searchQuery);
    },
  },
};
</script>

<style scoped>
/* Tambahkan gaya Anda di sini */
</style>