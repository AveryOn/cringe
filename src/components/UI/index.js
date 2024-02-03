import chapter from "./chapter.vue";
import buttonComp from "./buttonComp.vue";
import buttonExitComp from "./buttonExitComp.vue";
import optionComp from '../UI/optionComp.vue';
import inputComp from '../UI/inputComp.vue';
import subjectComp from '../UI/subjectComp.vue';
import errorComp from '../UI/errorComp.vue';
import successNoteComp from '../UI/successNoteComp.vue';
import exceptNoteComp from '../UI/exceptNoteComp.vue';

chapter.compName = "chapter";
buttonComp.compName = "buttonComp";
buttonExitComp.compName = "buttonExitComp";
optionComp.compName = 'optionComp';
inputComp.compName = 'inputComp';
subjectComp.compName = 'subjectComp';
errorComp.compName = 'errorComp';
successNoteComp.compName = 'successNoteComp';
exceptNoteComp.compName = 'exceptNoteComp';
export default [
    chapter,
    buttonComp,
    buttonExitComp,
    optionComp,
    inputComp,
    subjectComp,
    errorComp,
    successNoteComp,
    exceptNoteComp,
];
