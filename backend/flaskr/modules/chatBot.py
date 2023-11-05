import openai

openai.api_key = "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"

def chat_with_bot(promp):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": promp}]
    )

    return response.choices[0].message.content.strip()

if __name__ == "__main__":
    while True:
        user_input = input("You: ")
        if user_input.lower() in ['quit', 'exit', 'bye']:
            break
            
        response = chat_with_bot(user_input)
        print("Chatbot: ", response)