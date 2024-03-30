from .python.pythonExecutor import PythonExecutor
from .command.commandExecutor import CommandExecutor
from browserExecutor import get_current_browser_ui


def response_handler(chat_instance, res: str) -> object:
    executed_code = False
    executed_command = False
    pythonExecutor = PythonExecutor(chat_instance=chat_instance)
    commandExecutor = CommandExecutor(chat_instance=chat_instance)
    modi_res = pythonExecutor.run_from_prompt(res)
    if modi_res != res:
        executed_code = True
    modi2_res = commandExecutor.run_from_propmt(modi_res)
    if modi2_res != modi_res:
        executed_command = True

    browser_url = get_current_browser_ui(res)

    response = {
        "response": modi2_res,
        "executed_code": executed_code,
        "executed_command": executed_command,
        "browser_url": browser_url,
    }

    return response
