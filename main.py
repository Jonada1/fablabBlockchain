from flask import Flask
from web3 import Web3
import re 
app = Flask(__name__)

@app.route("/")
def home():
	return 'Flask!'

# web3.py instance
w3 = Web3(Web3.HTTPProvider("http://127.0.0.1:8545"))

web3.eth.blockNumber



