import express from "express";
const orderRouter = express.Router();
import {
  addOrderItems,
  getOrders,
  updateOrderToDelivered,
  updateOrderToPaid,
  getOrderById,
  getMyOrders,
} from "../controller/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// setting the rout for the products
orderRouter
  .route("/")
  .post(protect, addOrderItems)
  .get(protect, admin, getOrders);
orderRouter.route("/mine").get(protect, getMyOrders);
orderRouter.route("/:id").get(protect, getOrderById);
orderRouter.route("/:id/pay").put(protect, updateOrderToPaid);
orderRouter.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

export default orderRouter;
