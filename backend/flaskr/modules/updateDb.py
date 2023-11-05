from dotenv import load_dotenv, find_dotenv
import os
import pprint
from pymongo import MongoClient

# load .env file
load_dotenv(find_dotenv())
password = os.environ.get("MONGODB_PWD")

connection_string=f"""mongodb+srv://javs:{password}@hackutd.0r8mcl1.mongodb.net/?retryWrites=true&w=majority"""