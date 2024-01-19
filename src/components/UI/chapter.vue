<template>
    <li class="chapter__containter" @click="store.openChapter">
        <slot></slot>
    </li>
</template>

<script setup>
import useMainStore from '../../store';
const store = useMainStore();


</script>

<style scoped>
.chapter__containter {
    position: relative;
    height: 130px;
    width: 95%;
    margin: 10px auto;
    background-color: var(--bg-color-chapter);
    color: var(--color-default);
    border-radius: var(--border-radius);
    transition: box-shadow 1s ease;
}

.chapter__containter:hover {
    transition: box-shadow 1s ease;
    box-shadow: var(--shadow);
}
</style>