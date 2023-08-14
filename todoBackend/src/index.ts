import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fastify = Fastify({
    logger: true
})

fastify.register(cors, {

})

fastify.get('/todos', async (request, reply) => {
    return await prisma.todoItem.findMany(
        {
            orderBy: {
                id: 'asc'
            }
        });
})

//POST METHOD HANDLES THE CHECKBOXES
fastify.post('/todos/:id', async (request, reply) => {
   const itemId = parseInt((request.params as { id: string }).id);
   return prisma.todoItem.update({
       where: {
           id: itemId
       },
       data: JSON.parse(request.body as string)
   })
})

//PUT METHOD ADDS A NEW TASK
fastify.put('/todos', async (request, reply) => {
    const newtodoItem = JSON.parse(request.body as string) as TodoItem
    return prisma.todoItem.create({
        data: newtodoItem
    })
})

//DELETE METHOD DELETES A TASK
fastify.delete('/todos/:id', async (request, reply) => {
    const itemId = parseInt((request.params as { id: string }).id);
    return prisma.todoItem.delete({
        where: {
            id: itemId
        }
    })
})

const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()

interface TodoItem {
    id: number
    title: string
    isCompleted: boolean
}

const todoList: TodoItem[] = [
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
]