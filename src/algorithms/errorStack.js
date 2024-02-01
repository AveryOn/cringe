import randomID from "../uitls/randomID";

// Алгоритмы взаимодействия со стеком ошибок

// Удаление ошибки из стека - вспомогательная функция
function popError(stack, id) {
    return stack.filter((error) => error.id !== id);
}

// Функция добавления и удаления ошибки из стека ошибок
function appendError(stack, error, lifetime) { // lifetime - время ожидания добавления и удаления ошибки в секундах
    return new Promise((resolve, reject) => {
        try {
            error.id = randomID();
            stack.push(error);
            setTimeout(() => {
                const newStack = popError(stack, error.id);
                return resolve(newStack);
            }, lifetime * 1000);
        } catch (err) {
            reject(err)
        }
    })
}

export {
    appendError,
}