<template>
  <v-container>
    <v-form ref="form">
      <v-text-field
        v-model="juguete.codigo"
        :counter="10"
        label="Código"
      ></v-text-field>
      <v-text-field
        v-model="juguete.nombre"
        :counter="20"
        label="Nombre"
      ></v-text-field>
      <v-text-field
        v-model="juguete.stock"
        :counter="10"
        label="Stock"
      ></v-text-field>
      <v-text-field
        v-model="juguete.precio"
        :counter="10"
        label="Precio"
      ></v-text-field>

      <v-btn color="success" class="mr-4" @click="dialog = true">
        GUARDAR
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset" v-if="showClean">
        Limpiar Formulario
      </v-btn>
      <v-btn
        color="error"
        class="mr-4"
        @click="
          reset();
          cancel();
        "
        v-if="showCancel"
      >
        CANCELAR
      </v-btn>
    </v-form>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title> Guardar producto </v-card-title>
        <v-card-text>
          ¿Deseas guardar este producto en tu inventario?
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            @click="
              addproduct();
              reset();
            "
            >Guardar</v-btn
          >
          <v-btn @click="dialog = false">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Form",
  data() {
    return {
      dialog: false,
      juguete: {
        codigo: "",
        nombre: this.toy ? this.toy.nombre : "",
        stock: this.toy ? this.toy.stock : "",
        precio: this.toy ? this.toy.precio : "",
      },
    };
  },
  props: {
    showCancel: Boolean,
    showClean: Boolean,
    cancel: Function,
    toy: Object,
  },
  watch: {
    toy: function (newToy) {
      this.codigo = newToy ? newToy.codigo : "";
      this.nombre = newToy ? newToy.nombre : "";
      this.stock = newToy ? newToy.stock : "";
      this.precio = newToy ? newToy.precio : "";
    },
  },

  methods: {
    ...mapActions(["addData"]),
    addproduct() {
      this.dialog = false;
      this.addData(this.juguete);
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>