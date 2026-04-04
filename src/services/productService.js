import prisma from "../../prisma/client.js"

const productService = {
    getAll: async () => {
        return prisma.product.findMany()
    },

    getById: async (id) => {
        return prisma.product.findUnique({
            where: {id}
        })
    },

    create: async (data) => {
        return prisma.product.create({
            data
        })
    },

    update: async (id, data) => {
        return prisma.product.update({
            where: {id},
            data
        })
    },

    delete: async (id) => {
        return prisma.product.delete({
            where: {id}
        })
    }
}

export default productService