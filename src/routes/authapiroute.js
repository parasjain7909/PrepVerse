import express from 'express'
import { registercontroller } from '../controller/authcontroller.js'
import { logincontroller } from '../controller/authcontroller.js'
import { logoutcontroller } from '../controller/authcontroller.js'
const router= express.Router()
router.post("/register",registercontroller)
router.post("/login",logincontroller)
router.get("/logout",logoutcontroller)
export default router;