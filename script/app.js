import axios from "axios";

const params = {
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0,
}

const postText = () => {
    axios
        .post('https://api.openai.com/v1/completions', params, {
            headers: {
                'Authorization': 'Bearer ' + import.meta.env.VITE_OPENAI_API_KEY
                }
        })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

postText()