import randomUUID from '@/uitls/randomUUID'

// Unit - это сущность сообщения в разделе аналог классическим сообщениям в чатах

// Получени юнитов из БД
function fetchUnits() {
    return [
        { 
            id: randomUUID(), 
            title: null,
            content: {
                message: null,
                image: [],
                video: [],
                audio: [],
            },
            subject: null,
            chapterID: null,
            createdAt: null,
            updatedAt: null,
        }
    ]
}

export {
    fetchUnits,
}