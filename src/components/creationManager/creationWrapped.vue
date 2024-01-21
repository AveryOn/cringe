<template>
    <div class="creation-wrapped">
        <!-- Input Title -->
        <creationTitle 
        class="creation-wrapped__block"
        v-model:title="title"
        ></creationTitle>

        <!-- Input Subject -->
        <creationSubject class="creation-wrapped__block"></creationSubject>

        <!-- Input Color -->
        <creationColor class="creation-wrapped__block"></creationColor>

    </div>
</template>

<script setup>
import creationTitle from './creationTitle.vue';
import creationColor from './creationColor.vue';
import creationSubject from './creationSubject.vue';
import { ref } from 'vue';

const title = ref('');

</script>

<style scoped>
.creation-wrapped {
    position: relative;
    width: 95%;
    padding: 60px 0 30px 0;
    overflow: auto;
}
.creation-wrapped__block+.creation-wrapped__block {
    margin-top: 20px;
}
</style>