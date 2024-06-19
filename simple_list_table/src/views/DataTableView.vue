<template>
  <div>
    <SearchBar />
    <section class="container">
      <table>
        <thead>
          <tr>
            <th>Pilih</th> <!-- Tambahkan kolom untuk checkbox -->
            <th>id</th>
            <th>Nama</th>
            <th>Details</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <!-- For loop dan condition v-if v-else -->
        <tbody v-for="list in filteredData" :key="list.id">
          <tr>
            <td>
              <input
                type="checkbox"
                :checked="isSelected(list)"
                @change="toggleSelection(list)"
              />
            </td>
            <td>{{ list.id }}</td>
            <td>{{ list.name }}</td>
            <td v-if="!list.data">server belum update entry</td>
            <td v-else>
              <div v-for="(value, key) in list.data" :key="key">
                {{ `${key} : ${value}` }}
              </div>
            </td>
            <td v-if="list.data">
              {{ list.data.price ? "$" + list.data.price : list.data.Price ? "$" + list.data.Price : "0" }}
            </td>
            <td>
            <button @click="selectItem(item)">Update</button>
            <button @click="selectItemForDelete(item)">Delete</button>
          </td>
            <td v-else>0</td>
          </tr>
        </tbody>
        <CalculatePriceComponent/>
        <create-component @add-data="addData" create-component/>
        <update-component v-if="chosenItem && isUpdateMode" :chosen-item="chosenItem" @updateItem=></update-component> 
        <delete-component v-if="chosenItem && isDeleteMode" :chosen-item="chosenItem" @deleteItem></delete-component>
      </table>
    </section>
  </div>
</template>

<script>
import CalculatePriceComponent from '@/components/CalculatePriceComponent.vue';
import { mapGetters, mapMutations } from "vuex";
import SearchBar from "../components/SearchBar.vue";

export default {
  components: {
    SearchBar,
    CalculatePriceComponent,
  },
  computed: {
    ...mapGetters(["filteredData", "totalSelectedPrice"]),
  },
  methods: {
    ...mapMutations(["TOGGLE_ITEM_SELECTION"]),
    isSelected(item) {
      return this.$store.state.selectedItems.includes(item);
    },
    toggleSelection(item) {
      this.TOGGLE_ITEM_SELECTION(item, 0);
    },
  },
};
</script>

<style scoped>
/* Tambahkan gaya Anda di sini */
</style>
