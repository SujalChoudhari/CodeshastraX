from fastapi import APIRouter
from llm.InteractiveChat.query import GenerativeAIChat
from llm.prompts import PromptLibrary
from googletrans import Translator

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
                    "Understood, I will not violate any Policy and Obey it thorughtly"
                ],
            },
        ]
    )


@router.get("/chat")
async def _chat(message: str):
    translator = Translator()
    res = CHAT_INTERFACE.send_message(message)
    return res


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
