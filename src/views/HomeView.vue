<template>
  <div class="grid grid-cols-2 gap-4">
    <div class="col-span-5 sm:col-span-1"><MyCard :icon="icons" /></div>
    <div class="col-span-5 sm:col-span-1"><MyErrorCard /></div>
    <div class="col-span-5 sm:col-span-1"><myChart /></div>
    <div class="col-span-5 sm:col-span-1"><myChart /></div>
  </div>
  <div class="col-span-2 sm:col-span-1 mt-4"><MyTable/></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyCard from "@/components/MyCard.vue";
import MyErrorCard from "@/components/MyErrorCard.vue";
import myChart from "@/components/MyChart.vue";
import MyTable from "@/components/MyTable.vue"

export default defineComponent({
  name: "HomeView",
  components: {
    MyCard,
    MyErrorCard,
    myChart,
    MyTable
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

