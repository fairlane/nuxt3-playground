<template>
  <div class="text-gray border border-gray-200 rounded shadow p-3 mb-2">
  <div v-if="successText" class="text-green-600 text-xl px-8">
    <p>{{ successText }}</p>
  </div>
  <div v-if="errorText" class="text-red-600 text-xl px-8">
    Error occured:
    <p>{{ errorText }}</p>
  </div>
  <form v-if="created==false" id="signup" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">    
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="full_name">
        Full name
      </label>
      <input v-model="user.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="full_name" type="text" placeholder="Your name">
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email address
      </label>
      <input v-model="user.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="yourname@example.com">
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input v-model="user.username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input v-model="user.password" class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="sendSignup" >
        Sign Up
      </button>
    </div>    
  </form>
  <form v-if="created==true && confirmed==false" id="code" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">    
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="full_name">
        Confirmation code sent to your email ({{user.email}})
      </label>
      <input v-model="confirmationCode" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirmation_code" type="text" placeholder="Confirmation code">
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="sendConfirmation" >
          Confirm
        </button>
      </div>    
    </div>
  </form>
  </div>
</template>

<script lang="ts">
import { User } from '.prisma/client';
import { handleError } from 'vue';
 export default {
  name: 'Signup',
  data() {
    return {
      user: {} as User,
      errorText: "" as string,
      successText: "" as string,
      created: false,
      confirmationCode: null as number,
      confirmed: false
    }
  },
  methods: {
    async sendSignup() {
      this.clearMessages();
      try {
        await this.$userService.addUser(this.user);
        this.created = true;
        this.successText = `Registration almost done - please check your inbox ${this.user.email}`;
      } catch(e) {
        this.handleErrors(e);
      }
    },
    async sendConfirmation() {
      this.clearMessages();
      try {
        await this.$userService.confirmUser(this.user, this.confirmationCode);
        this.confirmed = true;
        this.successText = `Registration complete - enjoy!`;
      } catch(e) {
        this.handleErrors(e);
      }
    },
    handleErrors(e) {
        console.error('AXIOS ERROR', e.request);
        this.errorText = e.request.responseText;
    },
    clearMessages() {
        this.errorText = null;
        this.successText = null;
    }
  }
}
</script>
