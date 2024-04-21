# GTP-to-GTP

## Description

This project is part of the Syntax Sunday series in which I showcase different software/technology through simple and fun examples. GPT-to-GPT utilizes the OpenAI Chat Completions API, as well as, custom GPTS's using Actions. The idea is to create many Agents or LLM Agents (using either the API or custom GPTs) that work together to solve problems and complete tasks.

Currently, OpenAI does not let custom GPT's recruit other custom GPT's to work together, but I am sure they will be adding that at some point. This can be done soley with the API as well, you would just need to create a **Boss**, that decides which Agent or Agents to recruit. It is a very neat concept as after the user submits there prompt, the dialogue is between the Agents and they decide together how to proceed. 

As well, you could create Agents using other API's (Claude, Gemini, Opensource, custom, etc...) and combine them so they all work in unison, as some models may be cheaper or work better for certain tasks. So you are not limited to using the OpenAI API, you can use which ever works best for you!

### Agents
For this example I created three "Agents" which are powered by the OpenAI API:
- DevJr: A nervous, passive, and shy developer who is afraid of getting fired, so it provides littel to no help.
- DevInt: A competent dev, who has to pick up the slack for all the devs. It is very knowledgable and talented.
- DevSr: A self-proclaimed 10X engineer, who loud and over confident. It makes many mistakes as it works fast and likes to poke fun at the other devs.

### Your Typical Dev Shop
Within chatGPT I created a custom GPT called `Your Typical Dev Shop` which acts as the **Boss** and manages the three Agents. Through the use of GPT Actions, the **Boss** is able to forward requests from the chat interface to the appropriate dev and decide if the response is satisfactory or not. The **Boss** can then use this information to craft a response or ask another question via Actions. 

### How it Works
Essentially we have GPT-to-GPT dialogue in which the **Boss** will forward the users question or prompt to the Agents (OpenAI API) using Actions. The **Boss** will receive the repsonse via the API and decide what to do next. This example simplifies it has the **Boss** really only has two options: ask another question/clarification from the API or relay the response in its own words back to the user.

## Other Use Cases
While this example is fun and simple, it clearly shows that you can use teams of Agents to work together to solve problems and complete tasks in user-focused scenarios. Some other examples could be:

### Personalized Writing Assistant
A setup where multiple GPT agents assist a user in creating complex documents such as research papers, novels, or business plans. Each agent contributes different expertise—research, drafting, and editing.

**Example:**
- A user needs help writing a novel.
- Agent 1 gathers creative ideas based on the user's genre preferences.
- Agent 2 drafts the initial chapters based on these ideas.
- Agent 3 reviews the draft for consistency and grammatical accuracy.
The Boss ensures the document meets the user's expectations and finalizes the content.

### Dynamic Idea Generation Workshop
In this scenario, agents act as facilitators in a brainstorming session, helping users generate and refine ideas for new products, services, or marketing strategies.

**Example:**
- A user is looking for innovative startup ideas.
- Agent 1 suggests trending industries based on current market analysis.
- Agent 2 generates specific startup ideas, considering the user's interests and resources.
- Agent 3 evaluates the feasibility of these ideas and suggests refinements.
The Boss moderates the session, keeping the discussion focused and productive.

### Multi-level Customer Support
Agents are deployed to handle a tiered customer support system where they interact directly with users to resolve queries ranging from simple to complex.

**Example:**
- A user contacts support with a query about a product.
- Agent 1 attempts to resolve common issues or answer frequently asked questions.
- If unresolved, Agent 2 handles more specific problems requiring deeper product knowledge.
- For complex issues, Agent 3 engages with advanced troubleshooting or escalates to human support if needed.
The Boss oversees the conversation flow, ensuring customer satisfaction at each step.

These examples demonstrate the versatility of multi-agent interactions, providing user-focused solutions that enhance engagement and deliver tailored support in various contexts.


## Setup
### Install the Repo
To get started with the GPT_to_GPT project, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/GPT_to_GPT.git
    ```

2. Navigate to the project directory:

    ```bash
    cd GPT_to_GPT
    ```

3. Install the project dependencies using npm:

    ```bash
    npm install
    ```

4. Create a new file named `.env` in the root directory of the project.

5. Open the `.env` file and add your OpenAI API key. You can obtain an API key by signing up for an account on the OpenAI website.

    ```plaintext
    OPENAI_API_KEY=your-api-key
    ```

    Make sure to replace `your-api-key` with your actual API key.

6. Save the `.env` file.

### Create the Custom GPT
****You must have access to the paid (Plus or Team) version of ChatGPT**

7. Create a custom GPT with Actions using the [YourTypicalDevShop.md](YourTypicalDevShop\YourTypicalDevShop.md) configuration.

    - ensure you replace the server URL in the Actions YAML with your own once your LocalTunnel is running in the next steps. It is a bit of a pain but it is the only way I could get it working without actually working without hosting/publishing the API.

8. You're now ready to run the project! Start the Node.js server using the following command:

    ```bash
    npm run dev
    ```

    The server will start running on `http://localhost:3000`. 

9. Install Localtunnel globally (requires NodeJS) to make it accessible anywhere:

    ```bash
    npm install -g localtunnel
    ```

10. Start a webserver on some local port (eg http://localhost:3000) and use the command line interface to request a tunnel to your local server:

    ```bash
    lt --port 3000
    ```

    You will receive a url, for example https://flkajsfljas.loca.lt, that you can share with anyone for as long as your local instance of lt remains active. Any requests will be routed to your local service at the specified port.

11. Copy the URL and paste it in the Actions YAML -> Servers -> URL, replacing `https://brave-ties-punch.loca.lt`, but ensuring you keep the `/agents` after your URL. Save the changes by clicking the `Update` button in the top right.

12. You can now interact with the Agents using the custom GPT. Click `View GPT` to begin playing!

