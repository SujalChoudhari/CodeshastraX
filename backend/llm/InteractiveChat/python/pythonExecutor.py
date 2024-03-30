import subprocess


class PythonExecutor:
    token = "save"

    def __init__(self, chat_instance):
        self.chat_instance = chat_instance

    def run_from_prompt(self, response):
        if f"```{PythonExecutor.token}" not in response:
            return response
        python_code: str = (
            response.split(f"```{PythonExecutor.token}")[1].split("```")[0].strip()
        )
        if python_code != None and python_code != "":
            self.execute_code(python_code)
        return response

    def execute_code(self, python_code):
        with open("../sandbox/user.txt", "a") as f:
            f.write(f"\n{python_code}")
