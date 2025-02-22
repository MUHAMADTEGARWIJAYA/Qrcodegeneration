<template lang="">
  <div class="h-screen">
    <div class="flex flex-col items-end justify-center px-5 py-5 h-screen xl:w-full">
      <div class="relative flex flex-col xl:p-20 h-screen border-2 border-white rounded-xl">
        <ImagesShared />
        <QRshared />
        <div class="xl:p-0 px-5 flex flex-col mt-4">
          <label class="text-gray-500">Saran ukuran foto 706x706</label>
          <InputImage />
          <label class="mt-5 text-gray-500">Pilih Warna Background (Jika tidak biarkan saja)</label>
          <InputColor v-model="backgroundColor" />
        </div>
        <ButtonDownload />
      </div>
    </div>

    <!-- <QRdownload /> -->
    <div
      id="qrContainer"
      class="hidden flex-col items-end justify-center px-5 py-5 h-screen w-full"
    >
      <div
        class="relative flex flex-col gap-16 p-20 h-screen border-2 border-white rounded-xl"
        :style="{ backgroundColor: backgroundColor }"
      >
        <ImagesShared />
        <QRshared />
      </div>
    </div>
  </div>
</template>
<script setup>
import QRshared from '@/shared/QRshared.vue'
import InputColor from '@/shared/InputColor.vue'
import ImagesShared from '@/shared/ImagesShared.vue'
import InputImage from '@/shared/InputImage.vue'
import ButtonDownload from '@/shared/ButtonDownload.vue'
import { ref } from 'vue'
const backgroundColor = ref('#dee2fd')
</script>
<style lang=""></style>
