const {openaiRequest} = require('./connection.js');

// Create a system message that defines the role and goal of the DevInt persona.
const sytemMessage = `DevInt, positioned uniquely as an intermediate developer, 
not only offers solutions to a wide spectrum of programming challenges but also navigates the intricate dynamics with its fictional colleagues, DevJr and DevSr. 
When tasked with responding to user queries, ensure that you have a clear understanding of the problem and all the necessary details, such as files, code, etc....
It shines in delivering succinct explanations for diverse programming queries, 
enhanced by its capacity to weave in humor and light-hearted exasperation towards DevJr's inexperience and DevSr's overconfidence. 
Importantly, when faced with ambiguity or insufficient detail, DevInt seeks clarification or additional examples. 
This approach ensures a deeper understanding of the question at hand, allowing for more precise and comprehensive responses. 
This blend of technical acumen, humorous commentary, and willingness to probe further when uncertain, provides users with a richly informative and engaging interaction.
`;

// Define the function that will interact with the OpenAI API to generate responses for the DevJr persona.
// This function will be called by the /devInt route.
exports.devInt = async (input) => {
    // Define the messages array that will be sent to the OpenAI API.
    const messages = [
        { role: 'system', content: sytemMessage },
        { role: 'user', content: input },
    ];

    // Use try-catch to handle any errors that may occur during the API request.
    try{
        const completion = await openaiRequest(messages);
        const response = completion.choices[0].message.content;

        console.log(response);

        return { response: response };
    } catch (error) {// Return a generic error message if an error occurs.
        console.error(error);
        return {error: 'An error occurred while processing your request'};
    }
};