<template>
  <div class="home">
    <ProductTable />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductTable from '@/components/ProductTable.vue'

export default {
  name: 'Home',
  components: {
    ProductTable
  }
}
</script>
