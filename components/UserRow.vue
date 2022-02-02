<template>
  <div class="text-gray-700 border border-gray-200 rounded shadow p-3 mb-2">
    <h3 class="text-gray-900 font-bold text-2l">{{user.name}}</h3>
    <div class="text-sm">#{{user.id}}</div>
    <div class="text-sm">{{user.email}}</div>
  </div>
</template>

<script lang="ts">
import { User } from '@prisma/client';
import { PropType } from 'vue'
export default {
  name: 'UserLine',
  props: {
    user: Object as PropType<User>
  }
}
</script>
