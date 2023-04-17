<template>
  <img src="@/assets/logo.png" class="mx-auto" alt="" />

  <div
    v-if="activePhase == 1"
    class="text-center lg:min-w-[35%] sm:w-[70%] max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
  >
    <form class="space-y-6" action="#">
      <h1 class="text-3xl font-medium text-gray-900 dark:text-white">
        Lost Password
      </h1>
      <h2 class="text-sm font-medium text-gray-700 dark:text-white">
        Enter your email address
      </h2>
      <div>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your email</label
        >
        <input
          type="email"
          name="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="name@company.com"
          required
        />
      </div>

      <button
        type="submit"
        @click="step()"
        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Continue
      </button>
      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered?
        <button
          @click="this.$router.push('/register')"
          class="text-blue-700 hover:underline dark:text-blue-500"
        >
          Create account
        </button>
      </div>
    </form>
  </div>

  <div
  v-else
    class="text-center lg:min-w-[35%] sm:w-[70%] max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
  >
    <form class="space-y-6" action="#">
      <h1 class="text-3xl font-medium text-gray-900 dark:text-white">
        New Password
      </h1>
      <h2
        class="rounded-lg p-4 text-white bg-green-400 text-sm font-medium dark:bg-green-950 dark:text-white"
      >
        Please create a new password that your don't use on any other site.
      </h2>
      <div>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Password</label
        >
        <input
          type="password"
          name="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>
      <div>
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Confirm Password</label
        >
        <input
          type="password"
          name="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>

      <button
        type="submit"
       @click="this.$router.push('/home')"
        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Change
      </button>
    </form>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    activePhase: 1,
  }),
  methods:{
    step(){
      this.activePhase+=this.activePhase
    }
  }
});
</script>