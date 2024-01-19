<template>
    <div class="navbar__container">
        <h1 class="navbar__title">
            Cringe
        </h1>
    </div>
</template>

<script setup>

</script>

<style scoped>
.navbar__container {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    background-color: var(--bg-color-default);
    border-bottom: 2px solid black;
    padding: 5px 15px;
}
.navbar__title {
    font-size: 2em;
    background-color: black;
    color: var(--bg-color-default);
    padding: 2px 25px;
    border-radius: 0.1em;
    margin: 0 10px;
    cursor: pointer;
}
</style>