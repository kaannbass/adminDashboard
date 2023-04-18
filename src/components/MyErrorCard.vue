<template>
  <div
    class="w-full cursor-default rounded-md flex p-2 text-center shadow-lg bg-red-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
  >
    <div
      class="text-white m-auto my-auto"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-10 h-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
        />
      </svg>
    </div>
    <div class="text-white m-auto">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis nostrum
      rerum enim sequi amet dolore asperiores, assumenda cumque consequatur
      dignissimos eaque placeat magni, vero, quibusdam quo. Tempora iste
      consectetur alias.
    </div>
  </div>
</template>
    
    <script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MyCard",
});
</script>
    