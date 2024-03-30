import subprocess


class PythonExecutor:
    token = "run"

    def __init__(self, chat_instance):
        self.chat_instance = chat_instance

    def run_from_prompt(self, response):
        if f"```{PythonExecutor.token}" not in response:
            return response
        python_code: str = (
            response.split(f"```{PythonExecutor.token}")[1].split("```")[0].strip()
        )
        if python_code != None and python_code != "":
            out = self.execute_code(python_code)
            return self.chat_instance.send_message(message=out)
        else:
            return response

    def execute_code(self, python_code):
        with open("temp.py", "w") as f:
            f.write(python_code)
        try:
            result = subprocess.run(
                "python temp.py", shell=True, capture_output=True, text=True, check=True
            )
            if result.stdout != "":
                return result.stdout
            else:
                if result.stderr != "":
                    return "\nError: " + result.stderr
                else:
                    return "Code return code: " + str(result.returncode)

        except subprocess.CalledProcessError as e:
            return f"Error: {e}"
