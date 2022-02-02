<template>
<div class="card">
  <div class="card-header bg-info">
    <h2>User list</h2>
  </div>
  <div v-if="users.length">
      <user-row :user="user" v-for="user in users" :key="user.id" />
  </div>
</div>
</template>

<script lang="ts">
import { User } from '@prisma/client';
export default {
  name: 'Users',
  data() {
    return {
      users: [] as User[]
    }
  },
  async mounted() {
    this.users = await this.$userService.listUsers();
  }
}
</script>
