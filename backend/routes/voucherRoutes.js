const express = require('express');
const Voucher = require('../models/Voucher');

const router = express.Router();

// Create a new voucher
router.post('/', async (req, res) => {
  const { date, currency, exchangeRate, items } = req.body;
  try {
    const newVoucher = new Voucher({ date, currency, exchangeRate, items });
    await newVoucher.save();
    res.status(201).json(newVoucher);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all vouchers
router.get('/', async (req, res) => {
  try {
    const vouchers = await Voucher.find();
    res.status(200).json(vouchers);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a voucher by ID
router.get('/:id', async (req, res) => {
  try {
    const voucher = await Voucher.findById(req.params.id);
    if (!voucher) return res.status(404).json({ message: 'Voucher not found' });
    res.status(200).json(voucher);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
