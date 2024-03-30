from terminal.terminalExecutor import TerminalExecutor

def query_handler(query:str) -> str:
    executor = TerminalExecutor()
    if "files" in query or "dir" in query:
        query += f"This is my working directory:  {executor.get_cwd()}"

    executor.get_file_contents()