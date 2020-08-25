<template>
  <v-snackbar :value="true" :timeout="-1">
    <div>{{ text }}</div>
  </v-snackbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Snackbar extends Vue {
  @Prop() private text!: string;
}
</script>
