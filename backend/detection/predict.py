import os
import numpy as np
import librosa
import joblib


# Function to extract features from audio file
def extract_features(file_path):
    y, sr = librosa.load(file_path, sr=None)  # Load audio file
    mfccs = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=20)  # Extract MFCC features
    return np.mean(mfccs.T, axis=0)  # Return mean MFCCs


def predict_speaker(model_load_path, unknown_file_path):
    # Load the trained model from disk
    clf, label_to_index = joblib.load(model_load_path)

    # Extract features from the unknown file
    unknown_features = extract_features(unknown_file_path)

    # Predict the speaker of the unknown file
    predicted_label_index = clf.predict([unknown_features])[0]
    predicted_label = [
        label
        for label, index in label_to_index.items()
        if index == predicted_label_index
    ][0]

    return predicted_label


# # Path to the trained model
# model_load_path = "./sample/speaker_recognition_model.pkl"

# # Assume 'unknown_file_path' is the path to the unknown audio file
# unknown_file_path = "./sample/unknown.wav"
# predicted_speaker = predict_speaker(model_load_path, unknown_file_path)
# print("Predicted Speaker:", predicted_speaker)
