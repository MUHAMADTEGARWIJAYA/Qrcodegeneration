<template lang="">
  <img
    v-if="qrStore.imageUrl"
    :src="qrStore.imageUrl"
    class="w-16 h-16 xl:h-20 xl:w-20 object-cover absolute top-[180px] xl:top-[250px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
  />
</template>
<script setup>
import { useQRStore } from '@/utils/DefineStore'

const qrStore = useQRStore()
</script>
<style lang=""></style>
