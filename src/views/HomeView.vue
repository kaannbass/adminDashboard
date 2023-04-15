<template>
  <div class="home">
    <div class="grid lg:grid-cols-4 gap-4 grid-cols-1">
      <div class="" v-for="a in 4" :key="a">
        <MyCard :icon="icons" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyCard from "@/components/MyCard.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    MyCard,
  },
  data: () => ({
    icons: [
      {
        path: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
      },
    ],
  }),
});
</script>
