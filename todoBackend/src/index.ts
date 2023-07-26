import Fastify from 'fastify'
import cors from '@fastify/cors'
import { todo } from 'node:test'

const fastify = Fastify({
    logger: true
})

fastify.register(cors, {

})

fastify.get('/todos', async (request, reply) => {
    return todoList
})

fastify.post('/todos/:id', async (request, reply) => {
    const todoIndex = todoList.findIndex((todo) => {
        const { id } = request.params as { id: number }
        return todo.id == id
    })
    todoList[todoIndex] = JSON.parse(request.body as string) as TodoItem
    return todoList[todoIndex]
})

fastify.put('/todos', async (request, reply) => {
    // itt generalj uj IDt
    const largestId = todoList.reduce((max, todoItem) => {
        if (todoItem.id > max){
            return todoItem.id;
        }
        return max;
    }, 0)
    const todoItemNewIndex = largestId + 1;
    const newtodoItem = JSON.parse(request.body as string) as TodoItem
    // bovitsd a listat
    todoList.push({
        ...newtodoItem,
        id: todoItemNewIndex
    })
    // csak az uj elemet add vissza
    return todoList
})

fastify.delete('/todos/:id', async (request, reply) => {
    const todoIndex = todoList.findIndex((todo) => {
        const { id } = request.params as { id: number }
        return todo.id == id
    })
    todoList.splice(todoIndex, 1)
    return todoList
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