<template>
  <v-snackbar :value="snackbar" :timeout="10000">
    <div>{{ text }}</div>
  </v-snackbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Snackbar extends Vue {
  @Prop() private text!: string;
  @Prop() private snackbar!: boolean;
}
</script>

<style lang="scss">
@import "src/styles/styles";
.v-snack {
  position: static !important;
  padding: 5px;
}

.v-snack__wrapper {
  min-width: 25em !important;
  max-width: 25em !important;
}

.snackbar-text-content {
  display: flex;
  word-break: break-word;
  white-space: pre-wrap;

  .v-icon {
    align-self: center;
  }
}

.v-snack__content {
  display: flex;
  padding: 8px 8px !important;
  background-color: $custom-gray;
}
</style>
