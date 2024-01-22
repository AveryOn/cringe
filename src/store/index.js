import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import generateUUID from "../uitls/randomUUID";
import randomID from "../uitls/randomID";

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
    const subjects = reactive([
        { id: randomID(), title: 'Math' },
        { id: randomID(), title: 'Frontend' },
        { id: randomID(), title: 'Backend' },
    ])
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

    // Show a Creation Manager
    function showCreationManager(value) {
        if (value === true) {
            isShowCreationManager.value = value;
        } else {
            isShowCreationManager.value = value;
        }
    }

    // Create new subject
    function createSubject(title) {
        subjects.push({ id: randomID(), title: title });
    }

    async function getChapters() {
        console.log(getChapters.name);
    }
    return {
        // state
        openChapter,
        chapters,
        subjects,
        isShowCreationManager,

        // actions
        toOpenChapter,
        toCloseChapter,
        showCreationManager,
        createSubject,
        getChapters,
    };
});

export default useMainStore;
