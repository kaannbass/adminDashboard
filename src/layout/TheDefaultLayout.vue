<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheDefaultLayout",
});
</script>

<template>
  <div class="bg-gradient-to-tr from-cyan-300 via-sky-400 to-sky-500 min-h-screen">
    <div class="container grid justify-items-center mx-auto py-10">
      <slot></slot>
    </div>
  </div>
</template>
