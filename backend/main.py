from llm.InteractiveChat import chatRoute
from llm.InteractiveChat.command import commandRouter
from detection import detectionRouter
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
import uvicorn
import os


load_dotenv()
app = FastAPI()
origins = ["*"]  # Allow all origins for this example

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(chatRoute.router, prefix="/chat")
app.include_router(commandRouter.router, prefix="/term")
app.include_router(detectionRouter.router, prefix="/detection")


@app.get("/")
def read_root():
    return {"Hello": "World"}


if __name__ == "__main__":
    os.system("uvicorn main:app --host 0.0.0.0 --port 80 --reload")
