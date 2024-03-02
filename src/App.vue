<template>
    <main class="app__container">
        <navbarComp></navbarComp>
        <router-view></router-view>
    </main>
</template>

<script setup>
import navbarComp from "./components/navbarComp.vue";
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* UI-THINGS */
    --blur: blur(12px);
    --blur-modal: blur(4px);
    --shadow: 5px 10px 20px rgba(0, 0, 0, 0.3);
    --border: 1px solid rgba(0, 0, 0, 0.3);
    --border-radius: 0.5em;
    --opacity-default: 0.7;
    /* COLOR */
    --color-default: white;
    --color-input: black;
    --color-text: black;
    --color-active: #fa9c30;
    --color-subject-name: #fa9c30;
    --color-reverse: white;
    --color-alias: rgb(254, 92, 254);
    --color-error: rgb(230, 60, 60);
    /* BACKGROUND-COLOR */
    --bg-color-op: rgba(0, 0, 0, 0.333);
    --bg-color-default: white;
    --bg-color-creation-manager: rgba(255, 255, 255, var(--opacity-default));
    --bg-color-chapter: rgba(0, 0, 0, 0.85);
    --bg-color-reverse: black;
    --bg-color-subject: rgb(0, 89, 109);
    --bg-color-error: rgba(222, 71, 71, 0.7);
    --bg-color-success: rgb(97, 201, 97);
    --bg-color-except: rgb(225, 68, 68);
    /* SIZE */
    --font-size-default: 16px;
    --font-size-title: 11px;
    --font-size-exit-btn: 12px;
    --font-size-creation-title: 19px;
    --icon-width: 24px;
    --icon-height: 24px;
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
}
</style>
