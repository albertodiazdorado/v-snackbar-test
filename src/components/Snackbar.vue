<template>
  <v-snackbar
    :value="snackbar"
    :timeout="0"
    color="red"
    content-class="v-snack-content"
  >
    <div>{{ text }}</div>
    <v-icon @click="snackbar = false" class="close">
      mdi-close
    </v-icon>
  </v-snackbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Snackbar extends Vue {
  @Prop() private text!: string;
  private snackbar = true;
}
</script>

<style>
.v-snack {
  height: auto !important;
  position: static !important;
  padding: 5px;
}

.v-snack__wrapper {
  min-width: 25em !important;
  max-width: 25em !important;
}

.v-snack__wrapper.theme--dark {
  background-color: red !important;
}

.v-snack-content {
  display: flex;
  align-items: flex-start !important;
  padding: 8px 8px !important;
  background-color: grey;
}
</style>
