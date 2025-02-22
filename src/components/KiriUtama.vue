<template lang="">
  <div class="flex flex-col items-center justify-center w-full xl:p-20 xl:h-screen">
    <div class="flex flex-col items-center p-10 bg-[#dee2fd]">
      <h1 class="text-3xl font-bold text-[#8465F9] mb-7">QR Code Generator</h1>
      <div class="relative">
        <form @submit.prevent="qrStore.generateQR" class="flex gap-4 justify-center items-center">
          <input
            class="rounded-3xl xl:w-[500px] py-3 focus:outline-none px-10 bg-transparent shadow-[inset_0_0_10px_rgba(255,255,255,0.5)] border border-white"
            placeholder="Paste Link Here"
            type="text"
            v-model="qrStore.inputValue"
          />

          <button
            class="shadow absolute right-3 flex w-8 h-8 items-center justify-center rounded-full py-3 px-3 bg-[#8465F9] text-white hover:bg-white hover:text-[#8465F9] focus:outline-none"
            type="submit"
          >
            <span class="material-symbols-outlined"> left_click </span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useQRStore } from '../utils/DefineStore'

const qrStore = useQRStore()
</script>
<style lang=""></style>
