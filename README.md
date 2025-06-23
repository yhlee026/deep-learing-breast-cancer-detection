# deep-learning-breast-cancer-detection

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Python Version](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/)

> Convolutional Neural Networks (CNNs) for improving breast cancer screening accuracy on mammogram images from the CBIS-DDSM dataset.

---

## 📋 Table of Contents

* [🔍 Overview](#-overview)
* [📂 Project Structure](#-project-structure)
* [⚙️ Prerequisites](#️-prerequisites)
* [📥 Dataset Preparation](#-dataset-preparation)

  * [1. CBIS-DDSM Preprocessing](#1-cbis-ddsm-preprocessing)
  * [2. Normal Case Resize](#2-normal-case-resize)
* [🚀 Model Training & Evaluation](#-model-training--evaluation)
* [📈 Results & Visualizations](#-results--visualizations)
* [🤝 Contributing](#-contributing)
* [📄 License](#-license)

---

## 🔍 Overview

Early and accurate detection of breast cancer can save lives. This project implements CNN-based classifiers to categorize mammogram images into four classes:

1. **Malignant**
2. **Benign (with callback)**
3. **Benign (no callback)**
4. **Normal**

We leverage the publicly available CBIS‑DDSM dataset (Digital Database for Screening Mammography) and integrate MIAS normal cases for balanced training.

---

## 📂 Project Structure

```
deep-learning-breast-cancer-detection/
├── Pre_Process_DDSM_Images/
│   ├── Pre_Process_DDSM_Images.ipynb    # Notebook: DICOM→PNG conversion, normalization, folder split
│   └── utils.py                        # DICOM loading & metadata utilities
├── Normal_Case_Preprocess/
│   ├── Normal_Case_Preprocess.ipynb    # Notebook: resize & format MIAS normal images
│   └── config.yaml                     # Source/destination paths, resize dims
├── Custom_Built_CNNs/
│   ├── Custom_Built_CNNs.ipynb         # Notebook: CNN architecture, training, metrics
│   └── model.py                        # build_custom_cnn() & helper classes
├── requirements.txt                    # Python dependencies
├── .gitignore                          # Excludes datasets, checkpoints
├── README.md                           # This file
└── LICENSE                             # MIT License
```

---

## ⚙️ Prerequisites

* Python 3.10 or above
* [git](https://git-scm.com/) installed

Install dependencies:

```bash
git clone https://github.com/yhlee026/deep-learing-breast-cancer-detection.git
cd deep-learing-breast-cancer-detection
python3 -m venv venv
source venv/bin/activate     # Windows: venv\Scripts\activate
pip install --upgrade pip
pip install -r requirements.txt
```

---

## 📥 Dataset Preparation

### 1. CBIS‑DDSM Preprocessing

1. Download the CBIS‑DDSM dataset (DICOM format) from [TCIA](https://wiki.cancerimagingarchive.net/display/Public/CBIS-DDSM).
2. Place raw DICOM files under a local directory, e.g. `data/CBIS-DDSM/`.
3. Open and run `Pre_Process_DDSM_Images/Pre_Process_DDSM_Images.ipynb`:

   * **Steps:**

     * Parse DICOM headers using `utils.py`.
     * Convert pixel arrays to PNG.
     * Normalize image sizes.
     * Split images into class-labelled folders: `output/ malignant/`, `benign_callback/`, `benign_no_callback/`, `normal/`.

```bash
jupyter notebook Pre_Process_DDSM_Images/Pre_Process_DDSM_Images.ipynb
```

### 2. Normal Case Resize

CBIS‑DDSM may lack sufficient “normal” samples. We integrate MIAS dataset normals:

1. Download MIAS images and set `source_dir` in `Normal_Case_Preprocess/config.yaml`.
2. Run `Normal_Case_Preprocess/Normal_Case_Preprocess.ipynb`:

   * Reads config for paths & target size (default: 244×244).
   * Copies & resizes images into `output/normal/` to match CBIS dimensions.

```bash
jupyter notebook Normal_Case_Preprocess/Normal_Case_Preprocess.ipynb
```

---

## 🚀 Model Training & Evaluation

Notebook `Custom_Built_CNNs/Custom_Built_CNNs.ipynb` orchestrates model design and training:

1. **Data Loading:** Uses Keras `ImageDataGenerator` to load and augment from preprocessed folders.
2. **Model Definition:** 4-conv-layer CNN in `model.py` with batch norm, pooling, dropout, and a dense-softmax output.
3. **Training:** Configurable hyperparameters (learning rate, epochs, batch size).
4. **Metrics & Callbacks:** Tracks accuracy, loss, and saves best weights.
5. **Evaluation:** Generates classification report, ROC curves, and confusion matrix.

```bash
jupyter notebook Custom_Built_CNNs/Custom_Built_CNNs.ipynb
```

Alternatively, import the model class in custom Python scripts:

```python
from Custom_Built_CNNs.model import build_custom_cnn
model = build_custom_cnn(input_shape=(244,244,1), num_classes=4)
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
# ... fit & evaluate
```

---

## 📈 Results & Visualizations

After training, view:

* **Accuracy & Loss Curves**: Training vs. validation over epochs
* **Confusion Matrix**: Class-wise performance
* **Classification Report**: Precision, recall, F1-score per class

Snapshots and example metrics are available in the final cells of the training notebook.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch:

   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:

   ```bash
   git commit -m "Add awesome feature"
   ```
4. Push and open a Pull Request:

   ```bash
   git push origin feature/YourFeature
   ```

Please adhere to code style and include tests where applicable.

---

## 📄 License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.
