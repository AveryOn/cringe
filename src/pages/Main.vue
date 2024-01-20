<template>
    <div class="main__container">
        <creationManager></creationManager>
        <chaptersContainer></chaptersContainer>
        <creationContainer></creationContainer>
        <p class="main__bg-style">Cringe</p>
    </div>
</template>

<script setup>
import chaptersContainer from "../components/chaptersContainer/chaptersContainer.vue";
import creationContainer from "../components/creationContainer/creationContainer.vue";
import creationManager from "../components/creationManager.vue";
</script>

<style scoped>
.main__container {
    position: relative;
    height: 90%;
    width: 100%;
    font-size: var(--font-size-default);
}

.main__bg-style {
    position: absolute;
    top: 25%;
    left: 15%;
    font-size: 22em;
    display: block;
    width: 100%;
    letter-spacing: 5px;
    transform: rotate(10deg);
    z-index: 2;
}
</style>
