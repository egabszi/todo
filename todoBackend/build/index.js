"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const fastify = (0, fastify_1.default)({
    logger: true
});
fastify.register(cors_1.default, {});
fastify.get('/todos', async (request, reply) => {
    return await prisma.todoItem.findMany();
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