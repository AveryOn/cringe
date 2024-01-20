<template>
    <div class="chapters-container">
        <ul class="chapters__list">
            <chapter v-for="item in store.chapters" :uuid="item.id" :title="item.title">
                {{ item.title }}
            </chapter>
        </ul>
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

.chapters__list {
    width: 98%;
    height: 95%;
    overflow: auto;
    list-style-type: none;
}
</style>
