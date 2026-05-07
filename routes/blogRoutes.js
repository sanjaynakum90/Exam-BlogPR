import express from "express";
import blogController from "../controller/blogController.js";
import auth from "../middleware/auth.js";
import checkRole from "../middleware/checkRole.js";
import uploads from "../middleware/uploads.js";

const router = express.Router();

router.get("/getAll", blogController.getAll);
router.get("/getOne/:id", blogController.getOne);   


router.get("/myBlogs", auth, blogController.getMyBlogs);

router.post("/add", auth, uploads.single("blogImage"), blogController.add);

router.patch("/update/:id", auth, uploads.single("blogImage"), blogController.update);

router.delete("/deleteBlog/:id", auth, blogController.deleteBlog);

export default router;