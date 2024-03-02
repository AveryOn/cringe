import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import randomID from "../uitls/randomID";

const useMainStore = defineStore("mainStore", () => {
    // ==========================================    STATE    ===============================================================================>>>>
    // Массив созданных разделов тематики 
    const chapters = reactive([]);
    // Массив доступных предметов (жанров) для создания раздела тематики 
    const subjects = reactive([]);

    // Стек ошибок и исключений (Для отрисовки соответствующих уведомлений)
    const errorStack = ref([]);

    const openChapter = reactive({
        isOpen: false,
        id: null,
        title: null,
        subject: null,
    });
    const isShowCreationManager = ref(false);

    // ==========================================    ACTIONS    ===============================================================================>>>>
    function toOpenChapter(id, title, subject) {
        openChapter.isOpen = true;
        openChapter.id = id;
        openChapter.title = title;
        openChapter.subject = subject;
    }
    function toCloseChapter() {
        openChapter.isOpen = false;
        openChapter.id = null;
        openChapter.title = null;
        openChapter.subject = null;
    }

    // Show a Creation Manager
    function showCreationManager(isShow) {
        if (isShow === true) {
            isShowCreationManager.value = isShow;
        } else {
            isShowCreationManager.value = isShow;
        }
    }

    // Функция добавления и удаления ошибки (Стек Ошибок)
    function addError(error, secondExpires) {
        try {
            error.id = randomID();
            errorStack.value.push(error);
            setTimeout(() => {
                errorStack.value = errorStack.value.filter((err) => {
                    return error.id !== err.id;
                });
            }, secondExpires * 1000);
        } catch (err) {
            throw Error('store/index:addError', err)
        }
    }
    return {
        // state
        openChapter,
        chapters,
        subjects,
        isShowCreationManager,
        errorStack,

        // actions
        toOpenChapter,
        toCloseChapter,
        showCreationManager,
        addError,
    };
});

export default useMainStore;
