<template lang="">
  <div class="border border-white w-96 h-96 rounded-3xl flex items-center justify-center">
    <div
      class="flex items-center justify-center bg-white rounded-3xl w-[340px] h-[340px] shadow-2xl"
    >
      <qrcode-vue :value="qrStore.QRValue" :size="size" level="H" render-as="svg" />
    </div>
  </div>
</template>
<script setup>
import { useQRStore } from '@/utils/DefineStore'
import QrcodeVue from 'qrcode.vue'
const size = 300
const qrStore = useQRStore()
</script>
<style lang=""></style>
