🩺 Deep Learning Breast Cancer Detection

This project explores the use of deep learning with Convolutional Neural Networks (CNNs) to assist in breast cancer screening through X-ray mammography. Inspired by ongoing healthcare initiatives, the system classifies mammogram images into clinically relevant categories, aiming to enhance diagnostic accuracy and reduce radiologist workload.

📌 Project Objectives

Develop CNN-based models for multi-class classification of mammogram images.

Evaluate performance across categories:

Malignant

Benign (with callback)

Benign (no callback)

Normal

Provide an intuitive web application with backend inference (Flask) and frontend visualization.

Contribute to research on AI-assisted screening for earlier and more accurate detection.

📂 Dataset

Digital Database for Screening Mammography (CBIS-DDSM)

Contains annotated mammogram images with pathology-confirmed labels.

Views used: Mediolateral oblique (MLO).

Preprocessing includes:

DICOM → PNG conversion with VOI LUT

Resizing to 244×244

Normalization and data augmentation (rotation, flipping, zooming)

Class balancing for fair model training

⚠️ Dataset not included due to licensing. Please obtain from CBIS-DDSM repository
.

🧰 Tech Stack

Languages: Python, JavaScript, HTML/CSS

Deep Learning Frameworks: TensorFlow / Keras

Backend: Flask (REST API for prediction)

Frontend: JavaScript, Bootstrap, EJS (interactive UI)

Database: SQLite/MySQL (for storing user/session data if enabled)

Tools: Git, VS Code, Jupyter Notebook

⚙️ Installation & Setup
1. Clone Repository
git clone https://github.com/yhlee026/deep-learing-breast-cancer-detection.git
cd deep-learing-breast-cancer-detection

2. Create Virtual Environment
python -m venv venv
# Activate (Windows)
venv\Scripts\activate
# Activate (Mac/Linux)
source venv/bin/activate

3. Install Dependencies
pip install -r requirements.txt

4. Run Backend (Flask)
cd backend
python app.py


Backend runs on http://127.0.0.1:5000/
.

5. Run Frontend

Open frontend/index.html in your browser or start your Node/Express server if configured.

🚀 Usage

Upload a mammogram image through the web interface.

The system preprocesses the image and runs inference using the trained CNN model.

Results show:

Predicted Class (Normal/Benign/Malignant)

Confidence Score (%)

Image preview for reference

📊 Model Training

Custom CNN Architectures: 3–4 convolutional layers with batch normalization, pooling, and dense softmax outputs.

Transfer Learning: Tested VGG16, ResNet50, MobileNetV2, DenseNet121 for improved feature extraction.

Loss Function: sparse_categorical_crossentropy

Optimizer: Adam

Metrics: Accuracy, Precision, Recall, F1-score, Confusion Matrix, ROC-AUC

📈 Results

Accuracy > 85% on validation dataset (varies by architecture).

MobileNetV2 & DenseNet121 showed strongest generalization on multi-class classification.

Confusion matrices revealed class imbalance challenges (e.g., malignant underrepresentation).

🛠️ Future Work

Extend dataset with MIAS and 3D tomosynthesis images.

Improve class imbalance handling with advanced augmentation or GAN synthesis.

Deploy as a Streamlit/Flask web app or on edge devices for clinical testing.

Enhance frontend with medical terminology clarity and mobile responsiveness.

👨‍💻 Author

LEE YONG HUA
Final Year Computer Science Student,Singapore Institute of Management (SIM) – Goldsmith, University of London



