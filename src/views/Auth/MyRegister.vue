<template>
  <img src="@/assets/logo.png" class="mx-auto" alt="" />
  <div
    class="text-center lg:min-w-[35%] w-[70%] max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
  >
    <form class="space-y-3" action="#">
      <h2 class="text-3xl font-medium text-gray-900 dark:text-white">
        Create a new account
      </h2>
      <h4>It's quick and easy.</h4>
      <hr />
      <div class="grid xl:grid-rows-1 xl:grid-flow-col gap-2">
        <div class="col-1">
          <label
            for="text"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Name</label
          >
          <input
            type="text"
            name="name"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div>
          <label
            for="text"
            class="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
            >Surname</label
          >
          <input
            type="text"
            name="text"
            id="surname"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
      </div>
      <div>
        <label
          for="email"
          class="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your Email</label
        >
        <input
          type="email"
          name="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>

      <div>
        <label
          for="password"
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
        Register
      </button>
      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        Already have an
        <button
          @click="this.$router.push('/')"
          class="text-blue-700 hover:underline dark:text-blue-500"
        >
          account?
        </button>
      </div>
    </form>
  </div>
</template>


<script></script>


<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MyRegister",
});
</script>