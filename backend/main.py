from llm.InteractiveChat import chatRoute
from llm.InteractiveChat.command import commandRouter
from dotenv import load_dotenv
from fastapi import FastAPI
import uvicorn
import os


load_dotenv()
app = FastAPI()
app.include_router(chatRoute.router, prefix="/chat")
app.include_router(commandRouter.router, prefix="/term")


@app.get("/")
def read_root():
    return {"Hello": "World"}


if __name__ == "__main__":
    os.system("uvicorn main:app --host 0.0.0.0 --port 80 --reload")
