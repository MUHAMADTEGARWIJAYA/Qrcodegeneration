<template lang="">
  <div class="relative">
    <!-- Input file disembunyikan -->
    <input type="file" id="fileInput" @change="handleImage" accept="image/*" class="hidden" />

    <!-- Tombol custom untuk memilih file -->
    <label
      for="fileInput"
      class="border py-2 px-4 rounded-xl shadow-[inset_0_0_10px_rgba(255,255,255,0.5)] cursor-pointer border-white bg-transparent inline-block"
    >
      {{ fileName || 'Pilih File' }}
    </label>
  </div>
</template>
<script setup>
import { useQRStore } from '../utils/DefineStore'
const qrStore = useQRStore()

const handleImage = (event) => {
  const file = event.target.files[0]
  qrStore.imageUrl = URL.createObjectURL(file)
}
</script>
<style lang=""></style>
