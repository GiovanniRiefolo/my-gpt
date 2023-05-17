const postText = () => {
    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        mode: 'cors',
        headers: new Headers({
            'Authorization': 'Bearer ' + import.meta.env.VITE_OPENAI_API_KEY,
            'OpenAI-Organization': import.meta.env.VITE_OPEN_AI_ORG,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{role: 'user', content: 'Hello there!'}],
        })
    })
    .then(response => {
        if(response.status === '200') {

        }
    })
}

const Message = {
    set newMessage(value){
        this.message = value
    }
}