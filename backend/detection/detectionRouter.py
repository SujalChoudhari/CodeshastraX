from fastapi import APIRouter, File, UploadFile
from pydantic import BaseModel
from .train import train_model
import os, random
from .predict import predict_speaker

router = APIRouter()


# Class to define the structure of data sent for prediction request
class PredictRequest(BaseModel):
    unknown_file: UploadFile


# Endpoint to train the model
@router.post("/train/")
def train():
    train_model("./sample", "./sample/speaker_recognition_model.pkl")
    return {"message": "Model trained successfully"}


# Endpoint to predict speaker
@router.get("/predict/")
async def predict():
    # Save the uploaded unknown file temporarily
    selected_file = random.choice(
        [
            "./sample/unknown.wav",
            "./sample/unknown2.wav",
            "./sample/unknown3.wav",
        ]
    )
    # Perform prediction
    predicted_speaker, _, acuraccy = predict_speaker(
        "./sample/speaker_recognition_model.pkl", selected_file
    )

    return {"predicted_speaker": predicted_speaker, "accuracy": acuraccy}
