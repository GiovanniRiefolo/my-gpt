import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-jmnXAlX4lh8BpXCBH44Jynb7",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();