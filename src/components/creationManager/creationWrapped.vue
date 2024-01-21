<template>
    <div class="creation-wrapped">
        <!-- Input Title -->
        <creationBlock class="creation-wrapped__block">
            <input class="creation-wrapped__input" type="text" placeholder="Enter title">
        </creationBlock>
        <!-- Input Subject -->
        <creationBlock class="creation-wrapped__block"></creationBlock>
        <!-- Input Color -->
        <creationBlock class="creation-wrapped__block"></creationBlock>
    </div>
</template>

<script setup>
import creationBlock from './creationBlock.vue';

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
.creation-wrapped__input {
    width: 90%;
    height: 30px;
    padding: 15px;
}
</style>