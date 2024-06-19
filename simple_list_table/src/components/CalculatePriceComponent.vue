<template>
  <tfoot>
    <tr>
      <td colspan="4">Jumlah Harga:</td>
      <td>{{ "$" + totalSelectedPrice }}</td>
    </tr>
  </tfoot>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    computed: {
        ...mapGetters(["totalSelectedPrice"]),
    },
};

</script>