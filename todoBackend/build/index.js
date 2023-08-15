"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const fastify = (0, fastify_1.default)({
    logger: true
});
fastify.register(cors_1.default, {});
<<<<<<< HEAD
fastify.get('/todos', async (request, reply) => {
    return await prisma.todoItem.findMany({
        orderBy: {
            id: 'asc'
        }
    });
});
//POST METHOD HANDLES THE CHECKBOXES
fastify.post('/todos/:id', async (request, reply) => {
    const itemId = parseInt(request.params.id);
    return prisma.todoItem.update({
        where: {
            id: itemId
        },
        data: JSON.parse(request.body)
    });
});
//PUT METHOD ADDS A NEW TASK
fastify.put('/todos', async (request, reply) => {
    const newtodoItem = JSON.parse(request.body);
    return prisma.todoItem.create({
        data: newtodoItem
    });
});
//DELETE METHOD DELETES A TASK
fastify.delete('/todos/:id', async (request, reply) => {
    const itemId = parseInt(request.params.id);
    return prisma.todoItem.delete({
        where: {
            id: itemId
        }
    });
});
const start = async () => {
=======
fastify.get('/todos', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    return todoList;
}));
fastify.post('/todos/:id', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const todoIndex = todoList.findIndex((todo) => {
        const { id } = request.params;
        return todo.id == id;
    });
    todoList[todoIndex] = JSON.parse(request.body);
    return todoList[todoIndex];
}));
fastify.put('/todos', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    // itt generalj uj IDt
    const largestId = todoList.reduce((max, todoItem) => {
        if (todoItem.id > max) {
            return todoItem.id;
        }
        return max;
    }, 0);
    const todoItemNewIndex = largestId + 1;
    const newtodoItem = JSON.parse(request.body);
    // bovitsd a listat
    todoList.push(Object.assign(Object.assign({}, newtodoItem), { id: todoItemNewIndex }));
    // csak az uj elemet add vissza
    return todoList;
}));
fastify.delete('/todos/:id', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const todoIndex = todoList.findIndex((todo) => {
        const { id } = request.params;
        return todo.id == id;
    });
    todoList.splice(todoIndex, 1);
    return todoList;
}));
const start = () => __awaiter(void 0, void 0, void 0, function* () {
>>>>>>> 6b6bc96 (changed style)
    try {
        await fastify.listen({ port: 3000 });
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
const todoList = [
    {
        id: 1,
        title: 'Drink enough water',
        isCompleted: false
    },
    {
        id: 2,
        title: 'Go to the gym',
        isCompleted: false
    }
];
//# sourceMappingURL=index.js.map