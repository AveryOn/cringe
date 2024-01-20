<!-- Heading for CreationContainer -->
<template>
  <div class="header" v-show="store.openChapter.isOpen">
    <h1>{{ store.openChapter.title }}</h1>
    <button-exit-comp
      class="header__exit-btn"
      @click="store.toCloseChapter"
    ></button-exit-comp>
  </div>
</template>

<script setup>
import useMainStore from "../../store";
const store = useMainStore();
</script>

<style scoped>
.header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-title);
  background-color: var(--bg-color-reverse);
  color: var(--color-reverse);
}
.header__exit-btn {
  position: absolute;
  right: 15px;
}
</style>
