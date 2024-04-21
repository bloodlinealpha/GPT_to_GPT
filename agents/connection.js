const OpenAI = require('openai');
require('dotenv').config();
const api_key = process.env.OPENAI_API_KEY;
// Create an instance of the OpenAI API client using the OpenAI API key from the .env file
const openai = new OpenAI({
    apiKey: api_key,
});

// This function will be called by the agents to send a request to OpenAI
exports.openaiRequest = async (messages) => {
    if(api_key === null) return null;
    
    const options = {
        model: "gpt-3.5-turbo-0125",
        messages: messages,
        frequency_penalty: 0.5,
        presence_penalty: 0.5,
    }

    const completion = await openai.chat.completions.create(options);
    return completion;
};