<template>
    <div>
        <Form :toy="toy" :edit='true'/>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import Form from '@/components/Form.vue'
export default {
    name: 'edit',
    components:{
        Form
    },
    computed:{
        ...mapState(['toys']),
        toy(){
            const toy = this.toys.find((t) => t.id == this.$route.params.id);
            return toy
        }
    }
    
}
</script>