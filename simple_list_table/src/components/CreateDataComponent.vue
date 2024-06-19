<template>
  <div class="create-form">
    <h2>Create New Item</h2>
    <form @submit.prevent="submitForm">
      <label for="id">ID:</label>
      <input type="text" v-model="id" required />
      
      <label for="name">Name:</label>
      <input type="text" v-model="name" required />
      
      <label for="details">Details:</label>
      <input type="text" v-model="details" required />
      
      <label for="price">Price:</label>
      <input type="number" v-model="price" required />
      
      <label for="image">Image:</label>
      <input type="text" v-model="image" required />
      
      <button type="submit">Submit</button>
      <button type="button" @click="cancelForm">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      name: '',
      details: '',
      price: '',
      image: '',
    };
  },
  methods: {
    submitForm() {
      const newItem = {
        id: this.id,
        name: this.name,
        details: this.details,
        price: this.price,
        image: this.image,
      };
      this.$emit('submit', newItem);
      this.resetForm();
    },
    cancelForm() {
      this.$emit('cancel');
      this.resetForm();
    },
    resetForm() {
      this.id = '';
      this.name = '';
      this.details = '';
      this.price = '';
      this.image = '';
    },
  },
};
</script>
