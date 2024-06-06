const mongoose = require('mongoose');

const voucherSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  currency: { type: String, required: true },
  exchangeRate: { type: Number, required: true },
  items: [
    {
      description: { type: String, required: true },
      price: { type: Number, required: true },
      type: { type: String, enum: ['debit', 'credit'], required: true },
    },
  ],
});

const Voucher = mongoose.model('Voucher', voucherSchema);

module.exports = Voucher;
