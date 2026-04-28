import productService from "../services/productService.js"


export const getProducts = async (req, res) => {
    try {
        const listProduct = await productService.getAll()

        res.status(200).json(listProduct)

    }catch(error) {
        res.status(500).json({ error: "Erro ao buscar produtos." })
    }
}

export const getProductId = async (req, res) => {
    try {
        const { id } = req.params

        const product = await productService.getById(id)

        if (!product) {
            return res.status(404).json({ error: "Produto não encontrado." })
        }

        res.status(200).json(product)

    }catch(error) {
        res.status(500).json({ error: "Erro ao buscar produto." })
    }
}

export const createProduct = async (req, res) => {
    try {
        const { name, description, price, image, category } = req.body

        if (!name || !price) {
            return res.status(400).json({ error: "Nome e preço são obrigatórios" })
        }

        const newProduct = await productService.create({
            name, description, price, image, category
        })

        res.status(201).json(newProduct)

    }catch(error) {   
        res.status(500).json({ error: "Erro ao criar produto." })
    }
}

export const updateProduct = async (req, res) => {

    try {
        const { id } = req.params
        const data = req.body

        const updateProduct = await productService.update(id, data)

        res.status(200).json(updateProduct)

    }catch(error) {
        res.status(500).json({error: "Erro ao atualizar produto."})
    }
}

export const deleteProduct = async (req, res) => {

    try {
        const {id} = req.params

        await productService.delete(id)

        res.status(200).json({menssage: "Produto deletado com sucesso"})

    }catch(error) {
        res.status(500).json({error: "Erro ao deletar produto"})
    }
}