token = "browser"


def get_current_browser_ui(response: str) -> str:
    if f"```{token}" not in response:
        return None
    url: str = response.split(f"```{token}")[1].split("```")[0].strip()
    return url.strip()
