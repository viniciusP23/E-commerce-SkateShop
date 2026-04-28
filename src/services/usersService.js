import prisma from "../../prisma/client.js"

const usersService = {

    getAll: async () => {
        return prisma.user.findMany()
    },

    getById: async (id) => {
        return prisma.user.findUnique({
            where: {id}
        })
    },

    create: async (data) => {
        return prisma.user.create({
            data
        })
    },

    update: async (data, id) => {
        return prisma.user.update({
            where: {id},
            data
        })
    },

    delete: async (data, id) => {
        return prisma.user.delete({
            where: {id}
        })
    }
}

export default usersService