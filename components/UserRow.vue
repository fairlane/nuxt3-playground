<template>
<div class="some">
  <div>#{{user.id}} {{user.name}} {{user.email}} </div>
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
