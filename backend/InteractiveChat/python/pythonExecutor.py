import subprocess


class PythonExecutor:
    token = "run"

    def __init__(self, chat_instance):
        self.chat_instance = chat_instance

    def run(self, response):
        python_code = (
            response.split(f"```{PythonExecutor.token}")[1].split("```")[0].strip()
        )
        out = self.execute_code(python_code)
        self.chat_instance.chat_with_ai(user_input=out)
        return

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

    def get_python_code_explanation(self, code):
        return self.chat.send_message(
            f"Explain the CODE line by line. Break the code down for a layman. COMMAND: {code}"
        )
