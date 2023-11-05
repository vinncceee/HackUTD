from flask import Blueprint, request, jsonify
from bs4 import BeautifulSoup
from flaskr.chatBot import chat_with_bot

endpoint = Blueprint('endpoint', __name__)

@endpoint.route('/chat', methods=['POST'])
def chatBot():
    # Extract user input from the POST request
    user_input = request.json.get('user_input')
    category = request.json.get('category')
    language = request.json.get('language')

    if user_input and category and language:
        # Call your chat_with_bot function to generate a response
        response = chat_with_bot(promp=user_input, categories=category, language=language)

        # Return the response as JSON
        return jsonify({"response": response})
    else:
        # Handle the case where user_input is not provided
        return jsonify({"error": "Missing user_input parameter"}), 400

 