<template>
<div  class="grid grid-cols-2 gap-2 flex items-start m-20 border border-gray-200 rounded shadow p-3">
  <div class="top-20 left-20">
      <signup />
  </div>
  <div class="top-20 right-20">
    <search-users />
  </div>
  <div class="top-20 right-20">
      <users />
  </div>
</div>
</template>

<script lang="ts">
import '~/assets/css/tailwind.css'
export default {
  name: 'Layout'
}
</script>
