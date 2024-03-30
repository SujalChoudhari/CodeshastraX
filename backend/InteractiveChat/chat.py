import os
from backend.InteractiveChat.command.commandExecutor import CommandExecutor
from backend.InteractiveChat.python.pythonExecutor import PythonExecutor
from backend.llm.prompts import PromptLibrary
from backend.llm.query import GenerativeAIChat


class InteractiveAIChat:
    def __init__(self, api_key):
        self.chat = GenerativeAIChat(api_key=api_key)
        self.chat.start_chat(
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

    def start_chat_with_ai(self):
        while True:
            user_input = input("You: ")
            if user_input == "" or user_input is None:
                continue
            self.chat_with_ai(user_input)
