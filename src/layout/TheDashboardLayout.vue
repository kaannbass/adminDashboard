// Path: src\layouts\TheDashboardLayout.vue

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TheDashboardLayout",
  setup() {
    const showSidebar = ref(false);

    return {
      showSidebar,
    };
  },
});
</script>

<template>
  <div class="relative flex min-h-screen">
    <!--Sidebar-->
    <div
      class="bg-cyan-600 md:relative md:-translate-x-0 text-cyan-50 w-64 space-y-2 px-2 py-2 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative -translate-x-2': showSidebar }"
    >
      <div class="flex item-center space-x-2 py-1 px-2">
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
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          />
        </svg>
        <span class="text-2xl text-white cursor-default">MyDashboard</span>
      </div>
      <hr />
      <nav class="p-1">
        <router-link
          to="/home"
          class="group flex items-center space-x-2 py-2 px-2 rounded-md hover:bg-cyan-700 hover:text-cyan-300 transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <span class="group-hover:text-cyan-200">Home</span>
        </router-link>

        <router-link
          to="/profile"
          class="group flex items-center space-x-2 py-2 px-2 rounded-md hover:bg-cyan-700 hover:text-cyan-300 transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>

          <span class="group-hover:text-cyan-200">Profile</span>
        </router-link>
        <router-link
          to="/"
          class="group flex items-center space-x-2 py-2 px-2 rounded-md hover:bg-cyan-700 hover:text-cyan-300 transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>

          <span class="group-hover:text-cyan-200">Login</span>
        </router-link>
      </nav>
    </div>

    <!--Main Content-->
    <div class="flex-1">
      <!--Header-->
      <div class="bg-white shadow px-2 py-4 flex xl:h-[65px] justify-between">
        <div class="">
          <button
            @click="showSidebar = !showSidebar"
            class="text-cyan-600 font-extrabold md:hidden"
            :class="{
              ' transition-transform duration-200 rotate-180': showSidebar,
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div class="cursor-pointer" @click="this.$router.push('/')">
          <div class="flex items-center space-x-4">
            <div class="font-medium dark:text-white">
              <div>Kaan Baş</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Joined in April 2023
              </div>
            </div>
            <img
              class="w-10 h-10 rounded-full"
              src="https://media.licdn.com/dms/image/C4D03AQFQhEXmca8rSA/profile-displayphoto-shrink_800_800/0/1605862956409?e=2147483647&v=beta&t=v-Z-TfeM_U8dIELYiwhXOzRcXIU1ZmU-MlINpbi1zcU"
              alt=""
            />
          </div>
        </div>
      </div>

      <!--Content-->
      <div class="p-8">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  background-color: rgb(14 116 144);
}
</style>