<template>
<div>
  <div class="color: orange">
    <input type="text" v-model=searchTerm @keyup="search"> 
  </div>
  <div v-if="searchResults.length">
      <user-row :user="user" v-for="user in searchResults" :key="user.id" />
  </div>
  <p v-else>no results / search again</p>
  <p>Active search term: <b>{{searchTerm}}</b></p>
</div>
</template>

<script lang="ts">
import { searchUsers } from '../service/userService'
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
      const result = await searchUsers(this.searchTerm); 
      this.searchResults = result;
    }
  }
}
</script>
