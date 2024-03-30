import os
import numpy as np
import librosa
from sklearn.ensemble import RandomForestClassifier
import joblib
# Function to extract features from audio file
def extract_features(file_path):
    y, sr = librosa.load(file_path, sr=None)  # Load audio file
    mfccs = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=20)  # Extract MFCC features
    return np.mean(mfccs.T, axis=0)  # Return mean MFCCs

def train_model(sample_dir, model_save_path):
    # List to hold features and labels
    features = []
    labels = []

    # Iterate through each user's sample files
    for user_folder in os.listdir(sample_dir):
        user_path = os.path.join(sample_dir, user_folder)
        if os.path.isdir(user_path):
            for file in os.listdir(user_path):
                if file.endswith(".wav"):
                    file_path = os.path.join(user_path, file)
                    features.append(extract_features(file_path))
                    labels.append(user_folder)

    # Convert labels to numerical format
    label_to_index = {label: index for index, label in enumerate(set(labels))}
    numerical_labels = [label_to_index[label] for label in labels]

    # Train a RandomForestClassifier
    clf = RandomForestClassifier(n_estimators=100, random_state=42)
    clf.fit(features, numerical_labels)

    # Save the trained model to disk
    joblib.dump((clf, label_to_index), model_save_path)



if __name__ == "__main__":
    # # Directory containing sample wave files of each user
    sample_dir = "sample"

    # Path to save the trained model
    model_save_path = "./sample/speaker_recognition_model.pkl"

    # Train the model and save it
    train_model(sample_dir, model_save_path)
