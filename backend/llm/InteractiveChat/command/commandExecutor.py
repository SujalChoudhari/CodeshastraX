class CommandExecutor:
    token = "exec"

    def __init__(self, chat_instance):
        self.chat_instance = chat_instance

    def execute_from_prompt(self, response):
        cmd_command = (
            response.split(f"```{CommandExecutor.token}")[1].split("```")[0].strip()
        )
        out = CommandExecutor.execute(cmd_command)

        self.chat_instance.chat_with_ai(out)
        return

    def execute(command):
        """
        Execute the provided command using subprocess.
        """
        import subprocess

        try:
            result = subprocess.run(
                command,
                shell=True,
                capture_output=True,
                text=True,
                check=True,
                cwd="../sandbox",
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
