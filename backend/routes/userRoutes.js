import express from "express";
const userRouter = express.Router();
import {
  authUser,
  getUserById,
  getUserProfile,
  getUsers,
  updateUser,
  updateUserProfile,
  deleteUser,
  registerUser,
  logoutUser,
} from "../controller/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// setting the rout for the products
userRouter.route("/").post(registerUser).get(protect, admin, getUsers);
userRouter.post("/logout", logoutUser);
userRouter.post("/auth", authUser);
userRouter
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
userRouter
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default userRouter;
