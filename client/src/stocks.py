import requests
import bs4
from bs4 import BeautifulSoup as soup
import json

def get_ld_json(url):
    parser = "html.parser"
    req = requests.get(url)
    page = soup(req.text, parser)
    return json.loads("".join(page.find("script", {"type":"application/ld+json"}).contents))

def loadPage(url):
    jsonld = get_ld_json(url)
    useful = jsonld[1]
    print(useful)
    # ingredients = useful["recipeIngredient"]
    # title = useful["name"]

get_ld_json("https://stockanalysis.com/stocks/")

