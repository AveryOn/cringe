<template>
    <div class="chapters-container">

        <!-- Блок для уведомления о пустом списке разделов -->
        <div v-if="!store.chapters.length" class="chapters-container__is-empty">
            <!-- Сообщение о пустом списке разделов -->
            <h1 class="chapters-container__is-empty--message">
                No chapters yet
            </h1>
            <!-- Контейнер для кнопки создания раздела -->
            <span class="chapters-container__btn-create">
                <button-comp @click="store.showCreationManager(true)">Create chapter</button-comp>
            </span>
        </div>

        <!-- Список разделов -->
        <ul class="chapters__list">
            <chapter 
            v-for="item in store.chapters" 
            :id="item.id" 
            :title="item.title"
            @click="() => store.toOpenChapter(item.id, item.title)"
            :key="item.id"
            >
                {{ item.title }}
            </chapter>
        </ul>

        <!-- Меню опций -->
        <optionsMenu></optionsMenu>
    </div>
</template>

<script setup>
import useMainStore from "../../store";
import optionsMenu from "./optionsMenu.vue";
const store = useMainStore();
</script>

<style scoped>
.chapters-container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-color-op);
    backdrop-filter: var(--blur);
    width: 35%;
    top: 10px;
    bottom: 10px;
    left: 15px;
    z-index: 10;
    box-shadow: var(--shadow);
    border-radius: var(--border-radius);
    color: var(--color-default);
    overflow: hidden;
}
.chapters-container__is-empty {
    position: absolute;
    width: 90%;
    top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.chapters-container__is-empty--message {
    width: 100%;
    background-color: var(--bg-color-reverse);
    color: var(--color-reverse);
    text-align: center;
    margin-bottom: 1px;
    user-select: none;
}
.chapters-container__btn-create {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    background-color: var(--bg-color-reverse);
}
.chapters__list {
    width: 98%;
    height: 95%;
    overflow: auto;
    list-style-type: none;
}
</style>
