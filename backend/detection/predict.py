import os
import math
import numpy as np
import librosa
import joblib
from sklearn.metrics import accuracy_score
import shutil
from train import train_model


# Function to extract features from audio file
def extract_features(file_path):
    y, sr = librosa.load(file_path, sr=None)  # Load audio file
    mfccs = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=20)  # Extract MFCC features
    return np.mean(mfccs.T, axis=0)  # Return mean MFCCs


def predict_speaker(model_load_path, sample_dir, unknown_file_path):

    # Load the trained model from disk
    clf, label_to_index = joblib.load(model_load_path)

    # Extract features from the unknown file
    unknown_features = extract_features(unknown_file_path)

    # Predict the speaker of the unknown file along with the probability estimates
    predicted_proba = clf.predict_proba([unknown_features])[0]
    max_proba = np.max(predicted_proba)
    predicted_label_index = np.argmax(predicted_proba)
    predicted_label = [
        label
        for label, index in label_to_index.items()
        if index == predicted_label_index
    ]

    data_amount = len(os.listdir(f"./sample/{predicted_label[0]}"))
    min_accuracy = -0.5 + 1 / (0.04 + math.exp(-0.3 * data_amount + 1.1))
    print(min_accuracy, predicted_label[0])
    # Calculate accuracy using the predicted probabilities
    accuracy = max_proba

    if accuracy < min_accuracy:  # If accuracy is below the threshold
        # Find the next best match with highest accuracy above threshold
        next_best_label = None
        next_best_accuracy = min_accuracy
        for label in label_to_index.keys():
            if label != predicted_label[0]:
                label_folder = os.path.join(sample_dir, label)
                data_amount = len(os.listdir(label_folder))
                min_accuracy = -0.5 + 1 / (0.04 + math.exp(-0.3 * data_amount + 1.1))
                if min_accuracy > next_best_accuracy:
                    next_best_accuracy = min_accuracy
                    next_best_label = label

        if next_best_label:
            # Save the unknown file under the next best label folder
            next_best_folder = os.path.join(sample_dir, next_best_label)
            os.makedirs(next_best_folder, exist_ok=True)
            sample_files = os.listdir(next_best_folder)
            srno = len(sample_files) + 1
            next_best_file_path = os.path.join(next_best_folder, f"{srno}.wav")
            shutil.copy(
                unknown_file_path, next_best_file_path
            )  # Copy the file to the next best label folder

            return (
                next_best_label,
                srno,
                1 - next_best_accuracy,
            )  # Return the next best label, sample serial number, and accuracy
        else:
            # Create a guest identifier if no next best match is found
            guest_id = "guest"
            guest_count = 0
            while os.path.exists(os.path.join(sample_dir, f"{guest_id}{guest_count}")):
                guest_count += 1
            guest_id += str(guest_count)

            # Save the unknown file under the guest folder
            guest_folder = os.path.join(sample_dir, guest_id)
            os.makedirs(guest_folder, exist_ok=True)
            sample_files = os.listdir(guest_folder)
            srno = len(sample_files) + 1
            guest_file_path = os.path.join(guest_folder, f"{srno}.wav")
            shutil.copy(
                unknown_file_path, guest_file_path
            )  # Copy the file to the guest folder
            # # Directory containing sample wave files of each user
            sample_dir = "sample"

            # Path to save the trained model
            model_save_path = "./sample/speaker_recognition_model.pkl"

            # Train the model and save it
            train_model(sample_dir, model_save_path)

            return (
                guest_id,
                srno,
                1 - accuracy,
            )  # Return the guest identifier, sample serial number, and accuracy
    else:
        return (
            predicted_label[0],
            None,
            accuracy,
        )  # Return the predicted speaker, no sample serial number, and accuracy


if __name__ == "__main__":
    model_load_path = "./sample/speaker_recognition_model.pkl"
    sample_dir = "./sample"
    unknown_file_path = "./sample/unknown2.wav"
    predicted_speaker, sample_serial, accuracy = predict_speaker(
        model_load_path, sample_dir, unknown_file_path
    )

    print("Predicted Speaker:", predicted_speaker, "Accuracy:", accuracy)
    if sample_serial:
        print("Sample Serial:", sample_serial)
