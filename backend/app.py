from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image
import io
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load your trained grayscale model
model = load_model('custom_cnn_model.h5')
class_labels = ['Benign', 'Malignant', 'Normal', 'Benign_No_Callback']

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    file = request.files['image']

    # Load image in grayscale mode and resize to 244x244
    img = Image.open(file).convert('L')  # Convert to grayscale
    img = img.resize((244, 244))

    # Convert to numpy array and reshape to match model input shape
    img_array = np.array(img)
    img_array = img_array.reshape(1, 244, 244, 1) / 255.0  # Normalize and expand dims

    # Make prediction
    prediction = model.predict(img_array)[0]
    predicted_class = class_labels[np.argmax(prediction)]
    confidence = float(np.max(prediction))

    return jsonify({'class': predicted_class, 'confidence': confidence})

if __name__ == '__main__':
    app.run(debug=True)


