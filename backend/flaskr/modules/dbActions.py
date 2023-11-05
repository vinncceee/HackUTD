from dotenv import load_dotenv, find_dotenv
import os
import pprint
import requests
from pymongo import MongoClient

# load .env file and get password
load_dotenv(find_dotenv())
password = os.environ.get("MONGODB_PWD")

# Db string
connection_string=f"""mongodb+srv://javs:{password}@hackutd.0r8mcl1.mongodb.net/?retryWrites=true&w=majority"""

# connect to MongoDB client
mongoDB = MongoClient(connection_string)

# connect to HackUTD database
hackUtdDb = mongoDB.HackUTD

def insert_company_data(companyName):

    # connect to database collection
    collection = hackUtdDb.CompanyData

    # data endpoint
    api_endpoint = 'http://127.0.0.1:5000/data/fidelity/about'

    try:
        response = requests.get(api_endpoint)
        
        # Check if the request was successful (status code 200)
        if response.status_code == 200:
            # Parse the response content, which may be in JSON or other formats
            data = response.json()  # Use .json() for JSON responses
            
            collection_data = {
                companyName: data
            }

            inserted_id = collection.insert_one(collection_data).inserted_id

            print(inserted_id)
        else:
            print(f"Request failed with status code: {response.status_code}")

    except requests.exceptions.RequestException as e:
        print(f"Request error: {e}")


"""def get_company_data(companyName):
    return None"""