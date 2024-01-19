<template>
    <div class="chapters-container">
        <ul class="chapters__list">
            <chapter  v-for="item in 3"></chapter>
        </ul>
    </div>
</template>

<script setup>

</script>

<style scoped>
.chapters-container {
    position: absolute;
    background-color: var(--bg-color-op);
    backdrop-filter: var(--blur);
    width: 35%;
    top: 10px;
    bottom: 10px;
    left: 15px;
    z-index: 10;
    box-shadow: var(--shadow);
    border-radius: var(--border-radius);
}
.chapters__list {
    list-style-type: none;
}
</style>