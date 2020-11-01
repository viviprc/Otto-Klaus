<template>
  <div>
    <v-spacer></v-spacer>
    <v-btn color="red" elevation="0" @click="goHome">
      <span>Inventario</span>

      <v-icon>mdi-format-list-bulleted</v-icon>
    </v-btn>

    <v-btn color="red" elevation="0" @click="goAdd">
      <span>Agregar productos</span>

      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-btn color="red" elevation="0" @click="logOut" v-if="user">
      <span>Cerrar sesión</span>

      <v-icon>mdi-export</v-icon>
    </v-btn>
  </div>
</template>
<script>
import firebase from "firebase";
import {mapState, mapActions} from "vuex";
export default {
  name: "ButtonNavigation",
  computed:{
    ...mapState(['user'])
    },
  methods: {
    ...mapActions(['setUser']),
    goHome() {
      this.$router.push("/home");
    },
    goAdd() {
      this.$router.push("/add");
    },
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("login");
          this.setUser(false)
        });
    },
  },
};
</script>