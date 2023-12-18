import OpenAI from "openai";
import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";


dotenv.config()


const app=express();
app.use(cors());
app.use(express.json());

app.get("/"  ,async(req , res)=>{
    res.status(200).send({message:"This is Chatgpt AI App"});
});
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
app.post("/" ,async (req , res)=>{
    try {
        
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
              {
                "role": "user",
                "content": "Make a single page website that shows off different neat javascript features for drop-downs and things to display information. The website should be an HTML file with embedded javascript and CSS."
              }
            ],
            temperature: 0,
            max_tokens: 4000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
          });
  console.log("PASSED:" , req.body.input)

  res.status(200).send({
    bot: response.data.choices[0].text
  })

    } catch (err) {
        console.log("FAILED:" , req.body.input)
        console.log(err);
        res.status(500).send(err);
    }
} )

app.listen(4000 , ()=>console.log("Server is running on port 4000 "));