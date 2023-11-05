import openai
from flaskr.dbActions import get_about, get_brokerage, get_checking, get_feeInformation, get_marginRates, get_onlineCommissions, get_savings

openai.api_key = "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"

def chat_with_bot(promp, categories, language):

    # Load data based on categories
    context = f"Analyze the data to answer any question about it. And sey 'I'm ready for questions' in {language}. "

    if 'about' in categories:
        context += get_about('fidelity')

    elif 'checking' in categories:
        context += get_checking('fidelity')

    elif 'savings' in categories:
        context += get_savings('fidelity')

    elif 'brokerage' in categories:
        context += get_brokerage('fidelity')

    elif 'onlineCommissions' in categories:
        context += get_onlineCommissions('fidelity')
    
    elif 'marginRates' in categories:
        context += get_marginRates('fidelity')

    elif 'feeeInfo' in categories:
        context += get_feeInformation('fidelity')
    

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role":"system", "content": context},{"role": "user", "content": promp}]
    )

    return response.choices[0].message.content.strip()