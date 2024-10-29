const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type:{type:String,enum: ["fertilizer","seeds","tools"]},
  category: String,
  composition: [{ nutrient: String, percentage: Number }],
  description: String,
  recommendedUsage: String,
  price: { type: Number, required: true },
  img: String,
  availableStock: { type: Number, required: true,select:false },
  outlets: {
    outletId: { type: mongoose.Schema.Types.ObjectId, ref: 'Outlet', required: true }, // Linked Outlet
    stock: { type: Number, required: true } // Available stock at this outlet
  }
});

module.exports = mongoose.model("Product", ProductSchema);
