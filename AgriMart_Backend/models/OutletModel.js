const mongoose=require('mongoose')

const outletSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { 
      type: { type: String, enum: ['Point'], default: 'Point' },
      coordinates: { type: [Number], required: true } // [longitude, latitude]
    },
    contactInfo: {
      phone: String,
      address: String
    },
    products: [{
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Fertilizer', required: true },
      quantity: { type: Number, required: true }
    }]
  });
  
  outletSchema.index({ location: "2dsphere" });
  
  module.exports = mongoose.model('Outlet', outletSchema);
  