<template>
  <div class="add">
    <Form :showClean='true'/>
  </div>
</template>
<script>
import Form from '@/components/Form.vue'
export default {
  name: 'Add',
  components:{
    Form
  }

}
</script>
