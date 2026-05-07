import express from "express";
import userController from "../controller/userController.js";
import auth from "../middleware/auth.js";
import checkRole from "../middleware/checkRole.js"

const router = express.Router();

router.post("/register", userController.register);

router.post("/login", userController.loginUser);

router.post("/authLogin", auth, userController.authLogin);

router.post("/logOut", auth, userController.logOut);

router.post("/logOutAll", auth, userController.logOutAll);

router.get("/getAll", auth, checkRole("admin"), userController.getAllUser);

router.patch("/update", auth, userController.update);

router.delete("/delete", auth, userController.deleteUser);

export default router;