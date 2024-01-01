import express from "express";
const productRouter = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from "../controller/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// setting the rout for the products
productRouter.route("/").get(getProducts).post(protect, admin, createProduct);
productRouter.get("/top", getTopProducts);
productRouter
  .route("/:id")
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);
productRouter.route("/:id/reviews").post(protect, createProductReview);

export default productRouter;
