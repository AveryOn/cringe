<template>
    <div class="creation-wrapped">
        <!-- Input Title -->
        <creationTitle 
        class="creation-wrapped__block"
        @confirm-title="confirmTitle"
        :is-confirm="isConfirmTitle"
        :is-except="isExceptTitle"
        v-model:title="title"
        ></creationTitle>

        <!-- Input Subject -->
        <creationSubject 
        class="creation-wrapped__block"
        @confirm-subject="confirmSubject"
        :is-confirm="isConfirmSubject"
        :is-except="isExceptSubject"
        ></creationSubject>

        <!-- Input Color -->
        <creationColor 
        class="creation-wrapped__block"
        @confirm-color="confirmColor"
        :is-confirm="isConfirmColor"
        :is-except="isExceptColor"
        ></creationColor>
        <button-comp 
        class="creation-wrapped__confirm"
        @click="confirmData"
        >Confirm</button-comp>
    </div>
</template>

<script setup>
import creationTitle from './creationTitle.vue';
import creationColor from './creationColor.vue';
import creationSubject from './creationSubject.vue';
import useMainStore from '../../store/index.js';
import { ref, defineEmits } from 'vue';

const store = useMainStore();
const emit = defineEmits(['confirm-data']);

// Пропсы для отображения сообщения об успехе сохранения
const isConfirmTitle = ref(false);
const isConfirmSubject = ref(false);
const isConfirmColor = ref(false);

// Пропсы для отображения сообщения об исключении/сбое сохранения
const isExceptTitle = ref(false);
const isExceptSubject = ref(false);
const isExceptColor = ref(false);

const title = ref('');
const subject = ref('');
const color = ref('');

// Время которое отображается сообщение об ошибке
const exceptExpires = 1500;

// Обработка подтверждения Title
function confirmTitle(value) {
    if(!!value.length) {
        title.value = value;
        isExceptTitle.value = false;
        isConfirmTitle.value = true;
    } else { 
        isExceptTitle.value = true;
    }
}
// Обработка подтверждения Subject
function confirmSubject(value) {
    if(!!value.length && value !== 'null') { 
        subject.value = value;
        isExceptSubject.value = false;
        isConfirmSubject.value = true;
    } else { 
        isExceptSubject.value = true;
    }
}
// Обработка подтверждения Color
function confirmColor(value) {
    if(!!value.length) {
        color.value = value;
        isExceptColor.value = false;
        isConfirmColor.value = true;
    }  else { 
        isExceptColor.value = true;
    }
}

// Подтверждение всех данных
function confirmData() {
    // Проверяем существуют ли все обязательные данные
    console.log(title.value);
    if(!!title.value && !!subject.value && !!color.value) {
        // Отправляем данные на сервер
        emit('confirm-data', {
            title: title.value,
            subject: subject.value,
            color: color.value,
        });
    } else {
        // Отправляем сообщение в стек ошибок
        return store.addError({
            message: 'Please fill in all fields'
        }, 5);
    }
}

</script>

<style scoped>
.creation-wrapped {
    position: relative;
    width: 95%;
    padding: 60px 0 30px 0;
    overflow: auto;
}
.creation-wrapped__block {
    margin-bottom: 20px;
}
.creation-wrapped__block + .creation-wrapped__block {
    margin-top: 20px;
}
.creation-wrapped__confirm {
    width: 90%;
    margin: auto;
    background-color: var(--bg-color-reverse);
    color: var(--color-reverse);
    box-shadow: var(--shadow);
}
</style>