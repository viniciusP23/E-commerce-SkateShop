import express from "express"

import {
    getUsers,
    getUserId,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/usersController.js"

const router = express.Router()

router.get("/", getUsers)
router.get("/:id", getUserId)
router.post("/", createUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

export default router