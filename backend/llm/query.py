import google.generativeai as genai


class GenerativeAIChat:
    """
    A class for interacting with a Generative AI chat system.
    """

    def __init__(
        self,
        api_key,
        model_name="gemini-1.0-pro",
        generation_config=None,
        safety_settings=None,
    ):
        genai.configure(api_key=api_key)

        if generation_config is None:
            generation_config = {
                "temperature": 0.9,
                "top_p": 1,
                "top_k": 1,
                "max_output_tokens": 2048,
            }

        if safety_settings is None:
            safety_settings = [
                {
                    "category": "HARM_CATEGORY_HARASSMENT",
                    "threshold": "BLOCK_MEDIUM_AND_ABOVE",
                },
                {
                    "category": "HARM_CATEGORY_HATE_SPEECH",
                    "threshold": "BLOCK_MEDIUM_AND_ABOVE",
                },
                {
                    "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                    "threshold": "BLOCK_MEDIUM_AND_ABOVE",
                },
                {
                    "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
                    "threshold": "BLOCK_MEDIUM_AND_ABOVE",
                },
            ]

        self.model = genai.GenerativeModel(
            model_name=model_name,
            generation_config=generation_config,
            safety_settings=safety_settings,
        )
        self.convo = None

    def start_chat(self, history=[]):
        self.convo = self.model.start_chat(history=history)

    def send_message(self, message):
        if self.convo is None:
            raise ValueError(
                "No conversation has been started. Call start_chat method first."
            )
        self.convo.send_message(message)
        return self.convo.last.text
