<template>
    <label :for="province.codename">
       {{province.name}}
    </label>
</template>

<script setup lang="ts">
    const props = defineProps(['province'])
</script>

