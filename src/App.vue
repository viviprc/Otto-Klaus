<template>
  <v-app>
    <v-app-bar app color="red" dark>
      <div class="navbar">
        <div>
          <h1><b>OTTO KLAUS</b></h1>
        </div>
      </div>
      <div><ButtonNavigation /></div>

    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import firebase from "firebase";
import Login from "./views/Login";
import ProductTable from "./components/ProductTable";
import Add from "./views/Add";
import Edit from './views/Edit';
import ButtonNavigation from "./components/ButtonNavigation";
import { mapActions } from "vuex";

export default {
  name: "App",

  components: {
    Login,
    ProductTable,
    Add,
    ButtonNavigation,
    Edit
  },

  data: () => ({
    //
  }),
  methods: {
    ...mapActions(["getData"]),
  },
  created() {
    this.getData();
  },
};
</script>
<style lang="scss">
  v-app-bar{
    display: flex;
    justify-content: space-between;
  }
  div .v-toolbar__content{
    justify-content: space-between;
  }
</style>
