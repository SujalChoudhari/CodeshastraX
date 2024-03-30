from fastapi import APIRouter

from llm.InteractiveChat.command.commandExecutor import CommandExecutor

router = APIRouter()


@router.get("/exec")
async def execute_command(command: str):
    out = CommandExecutor.execute(command=command)
    return out
