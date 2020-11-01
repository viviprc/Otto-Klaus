import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toys:[],
    user: false
  },
  mutations: {
    GET_DATA(state, toys){
      state.toys = toys
    },
    ADD_DATA(state, payload){
      state.toys.push(payload);
      console.log(payload)
    },
    SET_USER(state, user){
      state.user = user
    }
  },
  actions: {
    setUser({commit}, user){
      commit('SET_USER', user)

    },
     getData({commit}){
      firebase.firestore().collection('toys').onSnapshot((snapshot) => {
        let toys = []
        snapshot.forEach( (t) => {
          toys.push({
            id: t.id,
            data: t.data()
          });
        })
        commit('GET_DATA', toys)
      })
    },
    async addData({commit}, payload){
    const codigo = payload.codigo
     const nombre = payload.nombre
     const stock = payload.stock
     const precio = payload.precio;

     const juguete = {
       codigo,
       nombre,
       stock,
       precio
     }
     try{
      await firebase.firestore().collection('toys').add(juguete)

     }catch(error){
       console.log('Hay un error en la carga de juguete:', error)
     }
     

    },
    remove_toy({commit}, id){
      firebase.firestore().collection('toys').doc(id).delete();
    },
    updateData({commit}, payload){
      firebase.firestore().collection('toys').doc(payload.id).update(payload)
    }
    

  },
  modules: {
  }
})
