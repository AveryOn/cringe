<template>
    <div class="app__container">
        <navbarComp></navbarComp>
        <router-view></router-view>
    </div>
</template>
  
<script setup>
import navbarComp from './components/navbarComp.vue';
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --blur: blur(12px);
    --shadow: 5px 10px 20px rgba(0, 0, 0, 0.3);
    --bg-color-op: rgba(0, 0, 0, 0.333);
    --border: 1px solid rgba(0, 0, 0, 0.3);
    --border-radius: 0.5em;
    --bg-color-default: white;
    --color-default: white;
    --bg-color-chapter: rgba(0, 0, 0, 0.85);
    --color-active: #fa9c30;
    --bg-color-reverse: black;
    --color-reverse: white;
}

::-webkit-scrollbar {
    width: 3px;
    /* Ширина скроллбара */
}

::-webkit-scrollbar-track {
    background-color: #f1f1f100;
    /* Цвет фона трека */
}

::-webkit-scrollbar-thumb {
    background-color: #000000;
    /* Цвет ползунка скроллбара */
}

::-webkit-scrollbar-thumb:hover {
    background-color: #555;
    /* Цвет ползунка при наведении */
}

.app__container {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    z-index: 1;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    font-family: monospace;
}

::selection {
    background-color: rgb(199, 199, 199);
    color: black;
}</style>