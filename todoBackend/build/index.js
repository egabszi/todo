"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
fastify.get('/todos', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.todoItem.findMany({
        orderBy: {
            id: 'asc'
        }
    });
}));
//POST METHOD HANDLES THE CHECKBOXES
fastify.post('/todos/:id', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const itemId = parseInt(request.params.id);
    return prisma.todoItem.update({
        where: {
            id: itemId
        },
        data: JSON.parse(request.body)
    });
}));
//PUT METHOD ADDS A NEW TASK
fastify.put('/todos', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const newtodoItem = JSON.parse(request.body);
    return prisma.todoItem.create({
        data: newtodoItem
    });
}));
//DELETE METHOD DELETES A TASK
fastify.delete('/todos/:id', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const itemId = parseInt(request.params.id);
    return prisma.todoItem.delete({
        where: {
            id: itemId
        }
    });
}));
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fastify.listen({ port: 3000 });
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});
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