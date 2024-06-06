const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const voucherRoutes = require('./routes/voucherRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mern-test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/vouchers', voucherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
