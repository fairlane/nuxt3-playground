<template>
<div class="place-items-start">
  <div>
    Search: <input class="border rounded-t border-slate-400" type="text" v-model=searchTerm @keyup="search"> <b>{{searchTerm}}</b>
  </div>
  <div v-if="searchResults.length">
      <user-row :user="user" v-for="user in searchResults" :key="user.id" /> 
  </div>
  <p v-else>no results / search again</p>
</div>
</template>

<script lang="ts">
import { User } from '@prisma/client';
export default {
  name: 'SearchUsers',
  data() {
    return {
      searchResults: [] as User[],
      searchTerm: "" as string
    }
  },
  methods: {
    async search() {
      const result = await this.$userService.searchUsers(this.searchTerm); 
      this.searchResults = result;
    }
  }
}
</script>
