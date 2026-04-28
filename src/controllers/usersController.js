import usersService from "../services/usersService.js";

export const getUsers = async (req, res) => {

    try {
        const listUsers = await usersService.getAll()

        res.status(200).json(listUsers)

    }catch(error) {
        res.status(500).json({error: "Erro ao buscar Usuário."})
    }
}

export const getUserId = async (req, res) => {
    
    try {
        const {id} = req.params

        const listUserId = await usersService.getById(id)

        if(!listUserId) {
            return res.status(404).json({error: "Usuário não encontrado."})
        }

        res.status(200).json(listUserId)

    }catch(error) {
        res.status(500).json({error: "Erro ao buscar Usuário."})
    }
}

export const createUser = async (req, res) => {

    try {
        const {name, email, password, balance} = req.body

        if(!name || !email || !password) {
            return res.status(400).json({error: "Preencha os campos."})
        }

        const userCreate = await usersService.create({
            name, email, password, balance  
        })

        res.status(201).json(userCreate)

    }catch(error) {
        console.error(error)
        res.status(500).json({error: "Erro ao criar usuário."})
    }
}

export const updateUser = async (req, res) => {

    try {
        const {id} = req.params
        const {data} = req.body

        const userUpdate = await usersService.update({
            where: {id},
            data
        })

        res.status(200).json(userUpdate)

    }catch(error) {
        res.status(404).json({error: "Erro ao atualizar."})
    }
}

export const deleteUser = async (req, res) => {

    try {
        const {id} = req.params

        await usersService.delete(id)

        res.status(200).json({menssage: "Usuário deletado com sucesso."})

    }catch(error) {
        res.status(500).json({error: "Erro ao deletar usuário."})
    }
}