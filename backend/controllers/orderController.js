import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

// create new rental order
//POST api/order
//Fetching all products
const addOrderItems = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword;
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

//GET order by ID
//GET /api/orders/:id
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Your order isn't found");
  }
});

export { addOrderItems, getOrderById };

// const getOrderById = asyncHandler(async (req, res) => {
//   const order = await Order.findById(req.params.id).populate(
//     'user',
//     'name email'
//   )

//   if (order) {
//     res.json(order)
//   } else {
//     res.status(404)
//     throw new Error('Order not found')
//   }
// })