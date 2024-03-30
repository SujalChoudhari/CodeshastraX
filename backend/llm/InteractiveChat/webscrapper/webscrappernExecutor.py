import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin


class WebScrapperExecutor:
    token = "scrape"

    def __init__(self, chat_instance):
        self.chat_instance = chat_instance

    def run_from_prompt(self, response):
        if f"```{WebScrapperExecutor.token}" not in response:
            return response
        url: str = (
            response.split(f"```{WebScrapperExecutor.token}")[1].split("```")[0].strip()
        )
        if url != None and url != "":
            out = self.get_content(url)
            return self.chat_instance.send_message(message=out)
        else:
            return response

    def get_content(self, url: str | None):
        if url is None:
            return "", []
        web_url = url.strip()
        try:
            # Fetch the HTML content of the webpage
            response = requests.get(web_url)
            response.raise_for_status()  # Raise an exception for HTTP errors (4xx or 5xx)

            # Parse HTML content using BeautifulSoup
            soup = BeautifulSoup(response.content, "html.parser")

            # Extract all text from the HTML document
            text = soup.get_text(separator="\n", strip=True)
            # Strip down text to first 250 characters
            text = text[:250]

            # Extract all links from the HTML document
            links = [
                urljoin(web_url, link.get("href"))
                for link in soup.find_all("a")
                if link.get("href")
            ]

            # Take only the top 10 URLs
            top_10_links = links[:10]

            return text + "".join(top_10_links)

        except requests.RequestException as e:
            print("Error fetching content:", e)
            return ""
