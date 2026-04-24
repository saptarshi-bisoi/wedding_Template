const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Dummy Model for RSVP
const guestSchema = new mongoose.Schema({
  name: String,
  email: String,
  attending: Boolean,
  guestsCount: Number,
});
const Guest = mongoose.model('Guest', guestSchema);

// Dummy Model for Messages
const messageSchema = new mongoose.Schema({
  name: String,
  message: String,
  date: { type: Date, default: Date.now },
});
const Message = mongoose.model('Message', messageSchema);

// Routes
app.post('/api/rsvp', async (req, res) => {
  try {
    const guest = new Guest(req.body);
    await guest.save();
    res.status(201).json(guest);
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit RSVP' });
  }
});

app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ date: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

app.post('/api/messages', async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: 'Failed to post message' });
  }
});

mongoose.connect('mongodb://127.0.0.1:27017/wedding-db').then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((error) => {
  console.log('MongoDB connection error:', error);
});
