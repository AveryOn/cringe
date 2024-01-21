<!-- SUBJECT -->
<template>
    <creationBlock>
        <!-- header -->
        <template v-slot:header>
            Choose a subject
        </template>
        <!-- body -->
        <template v-slot:body>
        </template>
    </creationBlock>
</template>

<script setup>
import creationBlock from './creationBlock.vue';
</script>

<style scoped>
.creation-wrapped__input {
    width: 90%;
    height: 30px;
    padding: 15px;
}
</style>