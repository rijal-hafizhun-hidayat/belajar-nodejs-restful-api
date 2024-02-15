import { PrismaClient } from "@prisma/client"
const prismaClient = new PrismaClient({
    log: [
        {
          emit: 'stdout',
          level: 'query',
        },
        {
          emit: 'stdout',
          level: 'error',
        },
        {
          emit: 'stdout',
          level: 'info',
        },
        {
          emit: 'stdout',
          level: 'warn',
        },
      ],
});

prismaClient.$on('query', (e) => {
    console.info(e)
})

prismaClient.$on('error', (e) => {
    console.info(e)
})

prismaClient.$on('info', (e) => {
    console.info(e)
})

prismaClient.$on('warn', (e) => {
    logger.info(e)
})

export {
    prismaClient
}