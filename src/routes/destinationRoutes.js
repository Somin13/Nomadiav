import express from 'express';
const router = express.Router();

router.get('/destination', (req, res) => {
  res.render('destination'); // ↪️ attention : il te faut src/views/destination.twig
});

export default router;
