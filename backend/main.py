from fastapi import FastAPI
import os

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


if __name__ == "__main__":
    os.system("uvicorn main:app --host 0.0.0.0 --port 80")
