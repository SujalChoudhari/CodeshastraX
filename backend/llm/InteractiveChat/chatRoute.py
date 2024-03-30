from fastapi import APIRouter
from llm.InteractiveChat.reshandler import response_handler
from llm.InteractiveChat.query import GenerativeAIChat
from llm.prompts import PromptLibrary

router = APIRouter()
import os

CHAT_INTERFACE = GenerativeAIChat(api_key=os.getenv("GEMINI_API"))


@router.get("/init")
async def _start_chat():
    CHAT_INTERFACE.start_chat(
        [
            {
                "role": "user",
                "parts": [PromptLibrary.get_system_prompt()],
            },
            {
                "role": "model",
                "parts": [
                    "Understood, I will not violate any of the Policy and obey it throughly"
                ],
            },
        ]
    )


@router.get("/chat")
async def _chat(message: str):
    res = CHAT_INTERFACE.send_message(message)
    modi_res = response_handler(CHAT_INTERFACE, res)
    return modi_res


@router.get("/command_explaination")
def get_command_explanation(command: str):
    return CHAT_INTERFACE.send_message(
        f"Explain the command keyword by keyword? Break the command down for a layman. COMMAND: {command}"
    )


@router.get("/code_explaination")
def get_python_code_explanation(code: str):
    return CHAT_INTERFACE.send_message(
        f"Explain the CODE line by line. Break the code down for a layman. COMMAND: {code}"
    )
