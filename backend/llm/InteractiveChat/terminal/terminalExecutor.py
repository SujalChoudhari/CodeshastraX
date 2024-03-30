import os

class TerminalExecutor:
    def __init__(self) -> None:
        pass

    

    def get_cwd(self):
        dir_conents = os.listdir("./sandbox")
        print(dir_conents)
        return

    def get_file_conetents(self, prompt) -> list[str]:
        file_conents = []
        try:
            for name in os.listdir():
                if os.path.basename(name) in prompt:
                    with open(name, "r") as f:
                        file_conents.append(f"{name}:\n{f.read()}")
        except Exception:
            pass

        return file_conents

