<template>
  <div class="">
    <profileCard  />
  </div>
</template>


<script>
import axios from "axios";
import profileCard from "@/components/ProfileCard.vue";
export default {
  name: "myAPI",
  
  components: {
    profileCard,
  },
  data: () => ({
    firtsData: [],
  }),
  methods: {
    getData() {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        this.firtsData = res.data;
        
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
