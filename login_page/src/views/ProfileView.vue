<template>
  <div class="profile">
    <div>
      <div v-for="(item, index) in userdata">
        <h1>Bonjour.. My name is {{ item.name }}</h1>
        <p>
          <img :src="item.image" alt="" />
        </p>
        <p>As a {{ item.role }}</p>
      </div>
    </div>
    <div class="table-container">
      <table class="table-product">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in dataProduct" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.price }}</td>
            <td>
              <img :src="item.pict" class="product-image" alt="#" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import About from "@/views/ProfileView.vue";

export default {
  name: "Profile",
  components: {
    About,
  },
  data() {
    return {
      userdata: [],
      dataProduct: [],
    };
  },
  mounted() {
    this.getDetailUser();
    this.getListDataProduct();
  },
  computed: {},
  methods: {
    goToHome() {
      this.$router.push("/home");
    },
    goToAbout() {
      this.$router.push("/about");
    },
    getDetailUser() {
      this.$axios.get("users?limit=1").then((res) => {
        let detailUser = res.data;
        console.log("data_user", detailUser);
        detailUser.forEach((item) => {
          this.userdata.push({
            image: item.avatar,
            name: item.name,
            role: item.role,
          });
        });
      });
    },
    getListDataProduct() {
      this.$axios.get("products").then((res) => {
        let dataProduct = res.data;
        console.log("Origin-Data", dataProduct);
      });
      this.$axios.get("products?limit=10&offset=5").then((res) => {
        let productData = res.data;
        console.log("DataTop10", productData);
        productData.forEach((item) => {
          this.dataProduct.push({
            pict: item.category?.image,
            desc: item.description,
            category: item.category?.name,
            name: item.title,
            price: item.price,
          });
        });
        console.log("Data_Olahan", this.dataProduct);
      });
    },
  },
};
</script>

<style scoped lang="scss">
.product-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.table-container {
  width: 100%;
  overflow-x: auto;
  margin-top: 20px;
}

.table-product {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.table-product th,
.table-product td {
  padding: 15px;
  text-align: left;
}

.table-product th {
  background-color: #3498db;
  color: #fff;
}

.table-product tr:nth-child(even) {
  background-color: #f2f2f2;
}

.table-product tr:hover {
  background-color: #ddd;
}

.product-image {
  width: 100px;
  height: 70px;
  object-fit: cover;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .table-product th,
  .table-product td {
    padding: 10px;
  }

  .product-image {
    width: 50px;
    height: 35px;
  }
}

@media (max-width: 480px) {
  .table-product th,
  .table-product td {
    padding: 8px;
  }

  .product-image {
    width: 40px;
    height: 30px;
  }
}
</style>
