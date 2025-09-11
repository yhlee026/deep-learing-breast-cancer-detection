🩺 Deep Learning Breast Cancer Detection

This project uses Convolutional Neural Networks (CNNs) to assist in breast cancer screening via X-ray mammography. It classifies mammogram images into four categories: Malignant, Benign (with callback), Benign (no callback), and Normal. The goal is to improve screening accuracy and support radiologists in clinical workflows.

📌 Objectives

Train CNNs on the CBIS-DDSM dataset.

Build a Flask backend API for predictions.

Provide a frontend interface for image upload & results.

Evaluate performance with accuracy, precision, recall, F1-score, and ROC-AUC.

📂 Dataset

CBIS-DDSM (Digital Database for Screening Mammography).

Images: DICOM → PNG, resized to 244×244, normalized, and augmented.

⚠️ Dataset not included here — download from the official repository
.

🧰 Tech Stack

Python, TensorFlow/Keras

Flask (backend API)

HTML/JS/Bootstrap (frontend)

SQLite/MySQL (optional for user data)

⚙️ How to Run
# Clone repo
git clone https://github.com/yhlee026/deep-learing-breast-cancer-detection.git
cd deep-learing-breast-cancer-detection

# Setup environment
python -m venv venv
venv\Scripts\activate   # (Windows)
source venv/bin/activate  # (Mac/Linux)

# Install dependencies
pip install -r requirements.txt

# Run backend
cd backend
python app.py


Frontend can be opened via frontend/index.html.

🚀 Usage

Upload a mammogram image.

Model predicts class & confidence score.

Results displayed with image preview.

📈 Results

Accuracy > 85% on validation set.

MobileNetV2 & DenseNet121 performed best for generalization.

Challenges remain with class imbalance.

👨‍💻 Author

Yong Hua Lee
Final Year Computer Science Student, SIM – University of London
