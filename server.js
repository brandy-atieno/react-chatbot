/* eslint-disable no-undef */
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {OpenAI} from "openai";
dotenv.config()

//Initialise app
const app =  express();
//define port
const port = process.env.PORT || 4005;
const apiKey = process.env.VITE_OPEN_AI_KEY;
const openai = new OpenAI({ apiKey: apiKey});

//connection with frontend
app.use(cors());
//Parse json
app.use(express.json())
app.listen(port,()=>{
    console.log(`Server runnning onport: ${port}`)
})
app.post("/chatbot",async(req,res)=>{
    //user's input
    const {question} = req.body;
    //chatbot's response
    const response = await openai.chat.completions.create({
        messages: [
            {//define chatbot role
                role:"system",
                content: "You are a helpful assistant",
            },

            {//chat bot generation of answer based on user question
                role:"user",
                content:question,
            },
        ],
        //select model for chatbot use
        model:"gpt-3.5-turbo",
        //select response length
        max_tokens: 300,
    });
    //display  response on the server
    res.send(response.choices[0].message.content)

})