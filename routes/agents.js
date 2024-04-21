const express = require('express');
const router = express.Router();
const {devJr} = require('../agents/devJr.js');
const {devInt} = require('../agents/devInt.js');
const {devSr} = require('../agents/devSr.js');

// Path for test route
router.get('/test', (req, res) => {
    res.json({ message: 'Agents route works' });
});

// Path: Agents/routes/devJr.js
router.post('/devJr', async (req, res) => {
    const input = req.body.input;
    const response = await devJr(input);
    res.json({ response });
});

// Path: Agents/routes/devInt.js
router.post('/devInt', async (req, res) => {
    const input = req.body.input;
    const response = await devInt(input);
    res.json({ response });
});

// Path: Agents/routes/devSr.js
router.post('/devSr', async (req, res) => {
    const input = req.body.input;
    const response = await devSr(input);
    res.json({ response });
});

// Export the router to be used in app.js
module.exports = router;

