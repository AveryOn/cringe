<template>
    <nav class="chapter-menu">
        <ul class="chapter-menu__list">
            <!-- Create new chapter -->
            <li class="list-option">
                <option-comp class="list-option--item" @click="store.showCreationManager(true)">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                    </svg>
                </option-comp>
            </li>
            <!-- Edit chapter -->
            <li class="list-option">
                <option-comp class="list-option--item">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path
                            d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                    </svg>
                </option-comp>
            </li>
            <!-- Delete chapter -->
            <li class="list-option">
                <option-comp class="list-option--item">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path
                            d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                </option-comp>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import useMainStore from '../../store';
const store = useMainStore();
</script>

<style scoped>
.chapter-menu {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    width: 100%;
    height: 60px;
}

.chapter-menu__list {
    display: flex;
    align-items: center;
    width: max-content;
    height: 80%;
    list-style-type: none;
    background-color: var(--bg-color-default);
    padding: 5px 10px;
    border-radius: var(--border-radius);
}

.list-option+.list-option {
    margin-left: 10px;
}

.list-option--item:hover > .icon {
    fill: var(--color-active);
    transition: fill .6s ease;
} 

.icon {
    fill: var(--color-text);
    height: var(--icon-height);
    width: var(--icon-width);
    transition: fill .6s ease;
}


</style>
