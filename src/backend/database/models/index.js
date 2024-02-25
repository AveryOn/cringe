// Модуль объединяет все сущности BD
import { Chapter } from './Chapter.js';
import { Unit } from './Unit.js';
import { Subject } from './Subject.js'; 

// ===================  Отношение таблиц  =====================

// Один Chapter имеет много Unit
Chapter.hasMany(Unit, { foreignKey: 'chapterId' });
Unit.belongsTo(Chapter, { foreignKey: 'chapterId' });

// Один Subject имеет много Chapter
Subject.hasMany(Chapter, { foreignKey: 'subjectId' });
Chapter.belongsTo(Subject, { foreignKey: 'subjectId' });

export default {
    Chapter,
    Unit,
    Subject,
}