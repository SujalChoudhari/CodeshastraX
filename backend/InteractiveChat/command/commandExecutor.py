class CommandExecutor:
    token = "exec"

    def __init__(self, chat_instance):
        self.chat_instance = chat_instance

    def run(self, response):
        cmd_command = (
            response.split(f"```{CommandExecutor.token}")[1].split("```")[0].strip()
        )
        out = self.execute_command(cmd_command)

        self.chat_instance.chat_with_ai(out)
        return

    def execute_command(self, command):
        """
        Execute the provided command using subprocess.
        """
        import subprocess

        try:
            result = subprocess.run(
                command, shell=True, capture_output=True, text=True, check=True
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
        
    def get_command_explanation(self, command):
        return self.chat.send_message(
            f"Explain the command keyword by keyword? Break the command down for a layman. COMMAND: {command}"
        )
