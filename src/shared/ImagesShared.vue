<template lang="">
  <img
    v-if="qrStore.imageUrl"
    :src="qrStore.imageUrl"
    class="w-24 h-24 object-cover absolute top-[200px] xl:top-[270px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
  />
</template>
<script setup>
import { useQRStore } from '@/utils/DefineStore'

const qrStore = useQRStore()
</script>
<style lang=""></style>
