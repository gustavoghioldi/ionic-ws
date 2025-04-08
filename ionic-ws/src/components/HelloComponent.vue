<template>
    <div>
        <p>Hola, {{ name }}!</p>
    </div>
</template>

<script setup lang="ts">

import { defineProps } from 'vue';
const props = defineProps({
  name: {
    type: String,
    required: false,
    default: 'Mundo'
  }
})

</script>

<style scoped>
p {
    font-size: 1.2em;
    color: #631313;
}
</style>