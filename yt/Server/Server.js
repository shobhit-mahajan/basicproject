const express = require('express');
const cors = require('cors');
const { chromium } = require('playwright'); // Import Playwright browser

const app = express();
app.use(cors({
               origin:'*'
}));
app.use(express.json());

// Endpoint to check monetization status of a YouTube video
app.post('/check', async (req, res) => {
  const { videoId } = req.body;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  let isMonetized = false;

  try {
    // Launch Playwright Chromium browser
    const browser = await chromium.launch({
      headless: true, // Run browser in headless mode
    });
    const page = await browser.newPage();
    await page.goto(videoUrl);

    // Wait for the video page to load
    const pageContent = await page.content();

    // Check if ads are present in the source code (or any other monetization indicators)
    if (pageContent.includes('yt_ad')) {
      isMonetized = true;
    }

    await browser.close();
    res.json({ isMonetized });
  } catch (error) {
    console.error('Error checking video:', error);
    res.status(500).json({ error: 'Error checking video monetization status' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
