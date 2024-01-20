import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import generateUUID from "../uitls/randomUUID";

const useMainStore = defineStore("mainStore", () => {
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

  async function getChapters() {
    console.log(getChapters.name);
  }
  return {
    // state
    openChapter,
    chapters,

    // actions
    toOpenChapter,
    toCloseChapter,
    getChapters,
  };
});

export default useMainStore;
