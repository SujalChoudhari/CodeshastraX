from fastapi import APIRouter, File, UploadFile
from pydantic import BaseModel
from .train import train_model
import os
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
@router.post("/predict/")
async def predict(predict_request: PredictRequest):
    # Save the uploaded unknown file temporarily
    with open("temp_unknown.wav", "wb") as temp_file:
        temp_file.write(await predict_request.unknown_file.read())

    # Perform prediction
    predicted_speaker, _, acuraccy = predict_speaker(
        "./sample/speaker_recognition_model.pkl", "temp_unknown.wav"
    )
    # Remove the temporary file
    os.remove("temp_unknown.wav")

    return {"predicted_speaker": predicted_speaker, "accuracy": acuraccy}
