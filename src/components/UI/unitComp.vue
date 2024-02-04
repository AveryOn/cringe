<template>
    <div class="unit">

        <p style="color:aliceblue">
            <slot></slot>
        </p>
    </div>
</template>

<script setup>

</script>

<style scoped>
.unit {
    position: relative;
    width: 45%;
    height: 100px;
    background-color: var(--bg-color-reverse);
}
</style>