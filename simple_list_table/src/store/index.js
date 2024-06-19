import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      searchQuery: '',
      listData: [
        {
          id: "1",
          name: "Google Pixel 6 Pro",
          data: {
            color: "Cloudy White",
            capacity: "128 GB",
          },
        },
        {
          id: "2",
          name: "Apple iPhone 12 Mini, 256GB, Blue",
          data: null,
        },
        {
          id: "3",
          name: "Apple iPhone 12 Pro Max",
          data: {
            color: "Cloudy White",
            "capacity GB": 512,
          },
        },
        {
          id: "4",
          name: "Apple iPhone 11, 64GB",
          data: {
            price: 389.99,
            color: "Purple",
          },
        },
        {
          id: "5",
          name: "Samsung Galaxy Z Fold2",
          data: {
            price: 689.99,
            color: "Brown",
          },
        },
        {
          id: "6",
          name: "Apple AirPods",
          data: {
            generation: "3rd",
            price: 120,
          },
        },
        {
          id: "7",
          name: "Apple MacBook Pro 16",
          data: {
            year: 2019,
            price: 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB",
          },
        },
        {
          id: "8",
          name: "Apple Watch Series 8",
          data: {
            "Strap Colour": "Elderberry",
            "Case Size": "41mm",
          },
        },
        {
          id: "9",
          name: "Beats Studio3 Wireless",
          data: {
            Color: "Red",
            Description:
              "High-performance wireless noise cancelling headphones",
          },
        },
        {
          id: "10",
          name: "Apple iPad Mini 5th Gen",
          data: {
            Capacity: "64 GB",
            "Screen size": 7.9,
          },
        },
        {
          id: "11",
          name: "Apple iPad Mini 5th Gen",
          data: {
            Capacity: "254 GB",
            "Screen size": 7.9,
          },
        },
        {
          id: "12",
          name: "Apple iPad Air",
          data: {
            Generation: "4th",
            Price: "419.99",
            Capacity: "64 GB",
          },
        },
        {
          id: "13",
          name: "Apple iPad Air",
          data: {
            Generation: "4th",
            Price: "519.99",
            Capacity: "256 GB",
          },
        },
      ],
      selectedItems: [],
      chosenItem: null,
      nextId: 1                // create new ID bertambah 1
    };
  },
  getters: {
    items: state => state.listData,
    chosenItem: state => state.chosenItem,

    filteredData(state) {
      if (!state.filterSearch) {
        return state.listData; // Jika tidak ada kueri pencarian, kembalikan semua data
      }
      return state.listData.filter((item) =>
        item.name.toLowerCase().includes(state.filterSearch.toLowerCase())
      );
    },
    totalSelectedPrice(state) {
      const total = state.selectedItems.reduce((total, item) => {
        const price = parseFloat(item.data?.price || item.data?.Price || 0);
        return total + price;
      }, 0);
      return total.toFixed(2);
    },
    
  },
  mutations: {
    SET_FILTER_SEARCH(state, searchQuery) {
      state.filterSearch = searchQuery;
    },
    TOGGLE_ITEM_SELECTION(state, item) {
      const index = state.selectedItems.findIndex(i => i.id === item.id);
      if (index >= 0) {
        state.selectedItems.splice(index, 1); // Hapus item dari daftar jika sudah ada
      } else {
        state.selectedItems.push(item); // Tambahkan item ke daftar jika belum ada
      }
    },
    ADD_ITEM(state, item) {
      item.id = state.nextId;                 // Declare penambahan ID baru
      state.listData.push(item);
      state.nextId += 1 ;                     // Menambahkan penomoran ID baru
    },
    UPDATE_ITEM(state, updateItem) {
      const index = state.listData.findIndex(item => item.id === updateItem);
      if (index != -1) {
        state.listData.splice(index, 1, updateItem);
      } 
    },
    DELETE_ITEM(state, itemId) {
      state.listData = state.listData.filter(item => item.id != itemId);
    },
    SET_CHOSEN_ITEM(state, item) {
      state.chosenItem = item;
    }
  },
  actions: {
    addItem( { commit }, item ) {
      commit('ADD_ITEM', item);
    },
    updateItem( { commit }, updatedItem ) {
      commit('UPDATE_ITEM', updatedItem);
    },
    deleteItem( { commit }, itemId ) {
      commit('DELETE_ITEM', itemId);
    },
    chosenItem( { commit }, item ) {
      commit('SET_CHOSEN_ITEM', item);
    }
  }
});

export default store;