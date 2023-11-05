from flask import Flask
from flask_cors import CORS

def create_app():

    # New Flask app
    app = Flask(__name__)
    CORS(app)

    # Add blueprints
    from flaskr.modules.scraping import scrap_bp
    app.register_blueprint(scrap_bp, url_prefix="/scrap")

    from .chatEndPoint import endpoint
    app.register_blueprint(endpoint, url_prefix="/")
    

    return app
