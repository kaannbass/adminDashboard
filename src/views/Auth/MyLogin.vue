<template>
  <img src="@/assets/logo.png" class="mx-auto" alt="" />
  <div
    class="text-center lg:min-w-[35%] w-[70%] max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
  >
    <form class="space-y-6" action="#">
      <h5 class="text-3xl font-medium text-gray-900 dark:text-white">Login</h5>
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
      <div>
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your password</label
        >
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>
      <div class="flex items-start">
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="remember"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Remember me</label
          >
        </div>
        <button
          @click="this.$router.push('/lostpassword')"
          href="#"
          class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
        >
          Lost Password?
        </button>
      </div>
      <button
        type="submit"
        @click="this.$router.push('/home')"
        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Login to your account
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
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <span
          class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900"
          >or</span
        >
      </div>
      <div class="flex flex-col items-center">
        <div class="flex space-x-1">
          <a
            href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          >
            <img src="@/assets/loginIcon/google.svg" alt="" />
          </a>
          <a
            href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          >
            <img src="@/assets/loginIcon/facebook.svg" alt="" />
          </a>
        </div>
      </div>
    </form>
  </div>
</template>


<script></script>