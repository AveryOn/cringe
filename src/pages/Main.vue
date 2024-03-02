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
import chaptersContainer from "../components/chaptersContainerDir/chaptersContainer.vue";
import creationContainer from "../components/creationContainerDir/creationContainer.vue";
import creationManager from "../components/creationManagerDir/creationManager.vue";
import { onMounted } from "vue";
import useMainStore from "../store";
import { getAllChaptersDB } from '../api/chapterAPI';
import { getAllSubjectsDB } from '../api/subjectAPI';
const store = useMainStore();

onMounted(async () => {
    try {
        store.chapters = await getAllChaptersDB();
        store.subjects = await getAllSubjectsDB();
        
    } catch (err) {
        throw new Error(`pages/Main.vue: onMounted[fetch chapters]  => ${err}`);        
    }
})
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
    right: 10px;
    bottom: 10px;
    width: max-content;
    max-width: 20%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    z-index: 99999;
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
