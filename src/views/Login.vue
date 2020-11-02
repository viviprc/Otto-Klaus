<template>
  <div>
    <v-container class="mt-16">
      <v-row justify="center">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                Inicia sesión con tu <br />
                cuenta de Google.
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar tile size="80">
              <v-img
                src="https://lh3.googleusercontent.com/proxy/Lt1wPZbEPSYMpK6ImvM4clsGfXY7ngZ_yz9FJcbnIsM3P2ENQGvFRvzarSeJ5hMEbP7YMsm31t30iTEiWgXTdJ0719MathH0HOkCV8qVe0-e"
              ></v-img
            ></v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
              depressed
              color="red"
              @click="logInGoogle"
            >
              Iniciar sesión
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import firebase from "firebase";
import { mapActions } from "vuex";
export default {
  name: "Login",
  methods: {
    ...mapActions(["setUser"]),
    logInGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((accept) => {
          this.$router.push("home");
          this.setUser(true);
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>