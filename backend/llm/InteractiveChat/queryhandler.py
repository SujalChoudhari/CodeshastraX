import os

from llm.InteractiveChat.terminal.terminalExecutor import TerminalExecutor


def query_handler(query: str) -> str:
    executor = TerminalExecutor()
    if "files" in query or "dir" in query:
        query += f"This is my working directory:  {executor.get_cwd()}"

    if os.path.exists("../sandbox/user.txt"):
        with open("../sandbox/user.txt", "r") as f:
            data = f.read()

    query += (
        "This is SaveFile permanantly stored in Database, CHeck if anything is releent: \n"
        + data
    )

    files = executor.get_file_contents(query)

    query += "FileContents:" + "\n".join(files)

    return query
