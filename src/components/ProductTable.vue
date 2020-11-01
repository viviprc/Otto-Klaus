<template>
  <v-container>
    <v-row justify="center">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Código</th>
              <th class="text-left">Nombre</th>
              <th class="text-left">Stock</th>
              <th class="text-left">Precio</th>
              <th class="text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in toys" :key="item.nombre">
              <td>{{ item.data.codigo }}</td>
              <td>{{ item.data.nombre }}</td>
              <td>{{ item.data.stock }}</td>
              <td>{{ item.data.precio }}</td>
              <td>
                <v-row justify="center"> </v-row>
                <v-btn icon color="blue" @click="editToy(item.id)">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon color="red">
                  <v-icon @click="eliminateToy(item.id)">mdi-delete</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-row>
    <v-dialog v-model="eliminate" max-width="400">
      <v-card>
        <v-card-title>Eliminar</v-card-title>
        <v-card-text>
          ¿Quieres eliminar este producto de tu inventario?
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn @click="removeToy">Eliminar</v-btn>
          <v-btn @click="eliminate = false">Cancelar</v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>
    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card>
        <v-card-title class="headline"> Editar Producto </v-card-title>
        <Form :showCancel="true" :cancel="closeModal" :toy='currentToy' />
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import Form from "./Form.vue";
import firebase from "firebase";
import { mapActions, mapState } from "vuex";
export default {
  name: "ProductTable",
  components: {
    Form,
  },
  data() {
    return {
      dialog: false,
      eliminate: false,
      currentToy: undefined
    };
  },
  computed: {
    ...mapState(["toys"]),
  },
  methods: {
    ...mapActions(["remove_toy"]),
    removeToy() {
      this.remove_toy(this.currentToy);
      this.eliminate = false
    },
    eliminateToy(id){
      this.eliminate = true;
      this.currentToy = id
    },
    saveChanges(id) {
      this.dialog = false;
      console.log(id);
    },
    closeModal() {
      this.dialog = false;
    //   this.currentToy = undefined
    },
    editToy(id){
      this.$router.push(`edit/${id}`);
    }
  },
};
</script>