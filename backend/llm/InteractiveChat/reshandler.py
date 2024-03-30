from .python.pythonExecutor import PythonExecutor
from .command.commandExecutor import CommandExecutor
from .webscrapper.webscrappernExecutor import WebScrapperExecutor
from .browserExecutor import get_current_browser_ui
import re


def remove_code_blocks(text):
    # Define the regular expression pattern to match code blocks
    pattern = r"```(.*?)```"

    # Find all code blocks in the text
    code_blocks = re.findall(pattern, text, re.DOTALL)

    # Filter code blocks containing "exec" or "scrape"
    filtered_code_blocks = [
        code_block
        for code_block in code_blocks
        if "exec" in code_block or "scrape" in code_block
    ]

    # Replace filtered code blocks with empty string
    for code_block in filtered_code_blocks:
        text = text.replace(f"```{code_block}```", "")

    return text


def response_handler(chat_instance, res: str) -> object:
    executed_code = False
    executed_command = False
    pythonExecutor = PythonExecutor(chat_instance=chat_instance)
    commandExecutor = CommandExecutor(chat_instance=chat_instance)
    webscrapperExecutor = WebScrapperExecutor(chat_instance=chat_instance)
    final_res = ResourceWarning

    browser_url = get_current_browser_ui(res)

    final_res = commandExecutor.run_from_prompt(res)
    final_res = webscrapperExecutor.run_from_prompt(final_res)
    final_res = pythonExecutor.run_from_prompt(res)

    response = {
        "response": (remove_code_blocks(final_res)),
        "executed_code": executed_code,
        "executed_command": executed_command,
        "browser_url": browser_url,
    }

    return response
