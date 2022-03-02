import express from "express";
import { getUsers, createUser, deleteUser } from "../controllers/user";
import user from "../models/user";

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.delete('/:id', deleteUser);

export default router;