import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },
            quantity: {
                type: Number,
                default: 1,
            },
            totalPrice: {
                type: Number,
                default: 0,
            },
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,  // Set the default value to the current date and time    
    },
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart 