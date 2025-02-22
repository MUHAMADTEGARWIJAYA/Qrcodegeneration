<template lang="">
  <button
    @click="downloadQR('png')"
    class="border w-full py-2 px-4 mt-10 rounded-xl shadow-[inset_0_0_10px_rgba(255,255,255,0.5)] cursor-pointer border-white bg-transparent"
  >
    Download
  </button>
</template>
<script setup>
import { downloadQR } from '../utils/DefineStore'
</script>
<style lang=""></style>
