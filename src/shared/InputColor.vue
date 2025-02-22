<template lang="">
  <div class="flex items-center gap-3">
    <!-- Button untuk membuka color picker -->
    <label
      for="colorPicker"
      class="flex items-center gap-2 px-4 py-2 border border-white rounded-lg shadow-lg cursor-pointer bg-transparent hover:bg-white/10 transition"
    >
      🎨 Pilih Warna
      <span
        class="w-6 h-6 rounded-full border border-white"
        :style="{ backgroundColor: modelValue }"
      ></span>
    </label>

    <!-- Input color picker (disembunyikan) -->
    <input
      type="color"
      id="colorPicker"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script setup>
defineProps({
  modelValue: String,
})
</script>
<style lang=""></style>
