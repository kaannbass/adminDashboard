<template>
  <div
    class="w-full cursor-default flex p-2 text-center shadow-lg bg-green-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
  >
    <div class="text-white" v-for="(item, index) in icon" :key="index">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-10 h-10"
      >
        <path stroke-linecap="round" stroke-linejoin="round" :d="item.path" />
      </svg>
    </div>
    <div class="text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </div>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MyCard",
  props: {
    icon: {
      type: Array,
      required: true,
    },
  },
});
</script>
  