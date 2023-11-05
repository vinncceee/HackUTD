from dotenv import load_dotenv, find_dotenv
import os
from pymongo import MongoClient

def get_company_collections():
    # load .env file and get password
    load_dotenv(find_dotenv())
    password = os.environ.get("MONGODB_PWD")

    # Db string
    connection_string=f"""mongodb+srv://javs:{password}@hackutd.0r8mcl1.mongodb.net/?retryWrites=true&w=majority"""

    # connect to MongoDB client
    mongoDB = MongoClient(connection_string)

    # connect to HackUTD database
    hackUtdDb = mongoDB['HackUTD']

    # get CompanyData collections
    companyData = hackUtdDb['CompanyData']

    return companyData