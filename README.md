# Summarize Article and Youtube Video
A simple application to summarize articles or youtube video using React.js, Vite, Tailwind.css, Redux Toolkit and RapidAPI.
### Example

![Imgur](https://i.imgur.com/EbrmdGt.png)
![Imgur](https://i.imgur.com/quxZz1A.png)

* User can add new articles and youtube video url
* Copy to clipboard

# Setup

* Clone the repository


* Install dependencies by running `npm install`
---
## RapidAPI Configuration

### Article Summarize
1. Go to [Article Summarize RapidAPI ](https://rapidapi.com/restyler/api/article-extractor-and-summarizer/)
2. Register and subscribe, choose the Basic one (Free)
3. Test endpoint and copy the key
4. Create a `.env` file in the root directory of the project and add your RapidAPI key config as environment variables:
  <pre>
  VITE_RAPID_API_ARTICLE_KEY=your-rapid-api-key</pre>

### Youtube Summarize
1. Go to [Youtube Summarize RapidAPI ](https://rapidapi.com/420vijay47/api/youtube-summarizer-by-chatgpt)
2. Go to [ChatGPT API KEY](https://platform.openai.com/account/api-keys) to get the key for ChatGPT
3. Register and subscribe, choose the Basic one (Free)
4. Test endpoint and copy the key
5. Add ChatGPT Key in your .env
  <pre>
  VITE_CHAT_GPT_KEY=your-chat-gpt-api-key</pre>
---

## Start the Development Server

1. Run `npm run dev`
---

