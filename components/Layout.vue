<template>
<div  class="grid grid-cols-2 gap-2 flex items-center m-20 border border-gray-200 rounded shadow p-3">
  <div>
      <signup />
  </div>
  <div>
      <users />
  </div>
  <div>
    <search-users />
  </div>
</div>
</template>

<script lang="ts">
import '~/assets/css/tailwind.css'
export default {
  name: 'Layout'
}
</script>
