<template>
  <div class="table-container">
    <div class="search-filter-container">
      <input type="text" v-model="searchQuery" placeholder="Search..." />
      <select v-model="selectedName" @change="filterByName" name="" id="">
        <option value="">All Names</option>
        <option v-for="name in uniqueName" :key="name" :value="name">{{ name }}</option>
      </select>
    </div>
    <table v-if="filteredData.length">
      <thead>
        <tr>
          <th v-for="key in tableKeys" :key="key">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredData" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name}}</td>
          <td>{{ itemdetails(item)}}</td>
          <td>{{ getPriceList(item) }}</td>
          <td><img :src="getImagePath(item.id)" :alt="`Img of ${item.name}`" class="product-image" /></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td :colspan="tableKeys.length - 2" class="total-price-label">Total Price</td>
          <td class="total-price-value">{{ calculateTotalPrice.toFixed(2) }}</td>
        </tr>
      </tfoot>
    </table>
    <p v-else>No Data Available</p>
  </div>
</template>

<script>
export default {
  name: "TableComponent",
  data() {
    return {
      searchQuery: '',
      selectedName: '',
      getData: [
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
      ]
    };
  },
  computed: {
    tableKeys() {
      return ['id', 'name', 'details', 'priceList', 'image']
    },
    filteredData() {
      let data = this.getData.filter(item => {
        const nameMatch = this.selectedName ? item.name === this.selectedName : true;
        const queryMatch = item.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        return nameMatch && queryMatch;
      });
      return data;
    },
    calculateTotalPrice() {
      return this.filteredData.reduce((total, item) => {
        if (item.data && (item.data.price > 0 || item.data.Price > 0)) {
          total += parseFloat(item.data.price || item.data.Price);
        }
        return total;
      }, 0);
    },
    uniqueName() {
      const names = this.getData.map(item => item.name);
      return [...new Set(names)];
    }
  },
  methods: {
    itemdetails(item) {
      let details = '';
      if (item.data) {
        for (const key in item.data) {
          details += `${key}: ${item.data[key]}, `;
        }
      }
      return details.slice(0, -2);
    },
    getPriceList(item) {
      if (item.data && (item.data.price > 0 || item.data.Price > 0)) {
        return item.data.price || item.data.Price;
      }
      return '-';
    },
    getImagePath(id) {
      return require(`@/assets/img/${id}.jpg`);
    },
    filterByName() {
      // Function to handle filter by name (left intentionally blank, as v-model takes care of reactivity)
    }
  }
};
</script>