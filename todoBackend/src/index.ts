import Fastify from 'fastify'
import cors from '@fastify/cors'

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