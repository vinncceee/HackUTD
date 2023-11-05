from flask import Blueprint
from bs4 import BeautifulSoup
import requests

# Links (Stored in MongoDB)
urls = {
        'about': 'https://www.fidelity.com/about-fidelity/our-company',
        'services': {
            'checking': 'https://www.fidelity.com/spend-save/fidelity-cash-management-account/overview',
            'credit': 'https://www.fidelity.com/spend-save/visa-signature-card',
            'investing': 'https://www.fidelity.com/trading/the-fidelity-account',
            'rates': 'https://www.fidelity.com/trading/commissions-margin-rates'
        }
    }

""" Blueprint Declaration"""
scrap_bp = Blueprint('scrap', __name__)


""" About route """
@scrap_bp.route('/fidelity/about')
def fidelityAbout():

    # Get HTML
    response = requests.get(urls['about'])

    if response.status_code == 200:
        HtmlFile = BeautifulSoup(response.text, 'html.parser')
        
        """ General info """
        # Find the parent 'div' element with the class 'scl-flexible-images-with-column-1'
        parent_divs = HtmlFile.find_all("div", class_="scl-flexible-images-with-column-1")

        aboutData = {}  # Create a dictionary to store the text

        for parent_div in parent_divs:
            # Find headers
            header_element = parent_div.find("h2", class_="abfid-section-header")

            # Find headers text
            section_elements = parent_div.find_all("p", class_="abfid-section-text")

            if header_element:
                header_text1 = header_element.text
                section_texts = [section.text for section in section_elements]

                aboutData[header_text1] = section_texts
        

        """ Remaining info """
        # Find the "individual investors" section
        individual_investors_value = None
        for div in HtmlFile.find_all(class_="scl-flexible-layout-multi-column--description"):
            header = div.find("h2", class_="abfid-number-header")
            if header and "individual investors" in div.get_text():
                individual_investors_value = header.text

        # Find and update the "statistics" section
        text_dictionary = {}  # Create a dictionary to store the text

        for div in HtmlFile.find_all(class_="scl-flexible-layout-multi-column--description"):
            header = div.find("h2", class_="abfid-number-header")
            if header:
                header_text = header.text
                section_text = div.find("p", class_="abfid-p-dark-gray text-remove-padding scl-center").text
                text_dictionary[header_text] = section_text

        # Concatenate the "individual investors" value to the "statistics" value
        if "by the numbers" in text_dictionary:
            aboutData["by the numbers"] += " " + individual_investors_value

        # Combine keys and values into full sentences
        combined_text = " ".join([f"{key} {value}" for key, value in text_dictionary.items()])

        aboutData["by the numbers"] = combined_text
        

    else:
        print("Failed to retrieve the web page")
        aboutData = {'data': "no available"}


    return aboutData


