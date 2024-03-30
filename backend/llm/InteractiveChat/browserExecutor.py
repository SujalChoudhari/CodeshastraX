token = "browser"


def get_current_browser_ui(response: str) -> str:
    url: str = response.split(f"```{token}")[1].split("```")[0].strip()
    return url.strip()
