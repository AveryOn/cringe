import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import generateUUID from "../uitls/randomUUID";

const useMainStore = defineStore("mainStore", () => {
    // STATE    ===============================================================================>>>>
    const chapters = reactive([
        { id: generateUUID(), title: "$ chapter_1" },
        { id: generateUUID(), title: "$ chapter_2" },
        { id: generateUUID(), title: "$ chapter_3" },
        { id: generateUUID(), title: "$ chapter_4" },
        { id: generateUUID(), title: "$ chapter_5" },
        { id: generateUUID(), title: "$ chapter_6" },
    ]);
    const openChapter = reactive({
        isOpen: false,
        uuid: null,
        title: null,
    });
    const isShowCreationManager = ref(false);

    // ACTIONS    ===============================================================================>>>>
    function toOpenChapter(uuid, title) {
        openChapter.isOpen = true;
        openChapter.uuid = uuid;
        openChapter.title = title;
    }
    function toCloseChapter() {
        openChapter.isOpen = false;
        openChapter.uuid = null;
        openChapter.title = null;
    }

    function showCreationManager(value) {
        if(value === true) {
            isShowCreationManager.value = value;
        } else {
            isShowCreationManager.value = value;
        }
    }

    async function getChapters() {
        console.log(getChapters.name);
    }
    return {
        // state
        openChapter,
        chapters,
        isShowCreationManager,

        // actions
        toOpenChapter,
        toCloseChapter,
        showCreationManager,
        getChapters,
    };
});

export default useMainStore;
