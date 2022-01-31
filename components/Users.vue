<template>
<div class="card">
  <div class="card-header bg-info">
    User list
  </div>
  <div v-if="users.length">
      <user-row :user="user" v-for="user in users" :key="user.id" />
  </div>
</div>
</template>

<script lang="ts">
import { User } from '@prisma/client';
import { listUsers } from '../service/userService'
export default {
  name: 'Users',
  data() {
    return {
      users: [] as User[]
    }
  },
  async mounted() {
    this.users = await listUsers();
  }
}
</script>
