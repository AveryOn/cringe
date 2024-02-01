<template>
    <div class="main__container">
        <div class="error-stack">
            <error-comp 
            v-for="error in store.errorStack" 
            :error="error"
            :key="error.id"
            ></error-comp>
        </div>
        <creationManager></creationManager>
        <chaptersContainer></chaptersContainer>
        <creationContainer></creationContainer>
        <p class="main__bg-style">Cringe</p>
    </div>
</template>

<script setup>
import chaptersContainer from "../components/chaptersContainer/chaptersContainer.vue";
import creationContainer from "../components/creationContainer/creationContainer.vue";
import creationManager from "../components/creationManager/creationManager.vue";
import useMainStore from "../store";
const store = useMainStore();
</script>

<style scoped>

.main__container {
    position: relative;
    height: 90%;
    width: 100%;
    font-size: var(--font-size-default);
}
.error-stack {
    position: absolute;
    right: 0;
    bottom: 0;
    width: max-content;
    max-width: 20%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 99999;
    border: 1px solid black;
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
