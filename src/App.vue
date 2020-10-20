<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <v-icon @click="show = !show" class="close"> mdi-bell </v-icon>
    <Snackbar text="Welcome to Your Vue.js + TypeScript App" :snackbar="show" />
    <h3>Some headline</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Snackbar from "./components/Snackbar.vue";

@Component({
  components: {
    Snackbar,
  },
})
export default class App extends Vue {
  private show = false;
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
