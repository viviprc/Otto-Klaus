<template>
  <v-container>
    <div class="alerta">
      <v-alert v-model="alert" dismissible dense max-width="380" type="success"
        >¡Producto guardado correctamente!</v-alert
      >
    </div>

    <v-form ref="form">
      <v-text-field
        v-model="juguete.codigo"
        :counter="10"
        label="Código"
        :disabled="edit"
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
    </v-form>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title> Guardar producto </v-card-title>
        <v-card-text>
          ¿Deseas guardar este producto en tu inventario?
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn @click="save">Guardar</v-btn>
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
      alert: false,
      dialog: false,
      juguete: {
        codigo: this.toy ? this.toy.data.codigo : "",
        nombre: this.toy ? this.toy.data.nombre : "",
        stock: this.toy ? this.toy.data.stock : "",
        precio: this.toy ? this.toy.data.precio : "",
      },
    };
  },
  props: {
    showCancel: Boolean,
    showClean: Boolean,
    cancel: Function,
    toy: Object,
    edit: Boolean,
  },
  watch: {
    toy: function (newToy) {
      this.codigo = newToy ? newToy.data.codigo : "";
      this.nombre = newToy ? newToy.data.nombre : "";
      this.stock = newToy ? newToy.data.stock : "";
      this.precio = newToy ? newToy.data.precio : "";
    },
  },

  methods: {
    ...mapActions(["addData", "updateData"]),
    addProduct() {
      this.dialog = false;
      this.addData(this.juguete);
    },
    reset() {
      this.$refs.form.reset();
    },
    save() {
      if (this.edit) {
        this.updateData({ id: this.toy.id, ...this.juguete });
        this.dialog = false;
      } else {
        this.addProduct();
        this.reset();
      }
      this.alert = true;
    },
  },
};
</script>
<style lang="scss">
.alerta {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
}
</style>