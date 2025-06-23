# deep-learning-breast-cancer-detection

Deep learning-assisted X-ray mammography can improve the accuracy and consistency of breast cancer screening by modelling the CBIS-DDSM dataset with convolutional neural networks (CNNs).

## 🧠 Project Objective

* Build and evaluate CNN models to classify mammogram images into:

  * Malignant
  * Benign (with callback)
  * Benign (no callback)
  * Normal
* Reduce diagnostic turnaround time and support radiologists in screening workflows.

## 📂 Repository Structure

```text
deep-learning-breast-cancer-detection/
├── Pre_Process_DDSM_Images/         # Scripts & notebooks to convert CBIS-DDSM DICOM → PNG and organize per class
│   ├── Pre_Process_DDSM_Images.ipynb
│   └── utils.py                     # Helper functions for DICOM loading and metadata parsing
├── Normal_Case_Preprocess/          # Prepare and resize normal MIAS/CBIS images for training
│   ├── Normal_Case_Preprocess.ipynb
│   └── config.yaml                  # Paths and resize parameters
├── Custom_Built_CNNs/               # CNN model definitions, training & evaluation
│   ├── Custom_Built_CNNs.ipynb      # Model architecture, training loops, and results
│   └── model.py                     # CNN classes and utilities
├── requirements.txt                 # Python dependencies
├── README.md                        # This file
└── .gitignore
```

## ⚙️ Environment Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yhlee026/deep-learning-breast-cancer-detection.git
   cd deep-learning-breast-cancer-detection
   ```

2. **Install dependencies**

   ```bash
   python3 -m venv venv
   source venv/bin/activate        # On Windows: venv\Scripts\activate
   pip install --upgrade pip
   pip install -r requirements.txt
   ```

## 🚀 Usage

### 1. Preprocess CBIS-DDSM Images

Navigate to the `Pre_Process_DDSM_Images` folder and run the notebook:

```bash
jupyter notebook Pre_Process_DDSM_Images.ipynb
```

This step converts DICOM files to PNG, normalizes image sizes, and splits images into class folders.

### 2. Prepare Normal Cases

In `Normal_Case_Preprocess`, run:

```bash
jupyter notebook Normal_Case_Preprocess.ipynb
```

This resizes and formats the normal class images (MIAS) to match CBIS-DDSM dimensions.

### 3. Train & Evaluate CNN Models

Open the `Custom_Built_CNNs` notebook:

```bash
jupyter notebook Custom_Built_CNNs.ipynb
```

This notebook defines the CNN architecture, trains on the preprocessed dataset, and plots metrics (accuracy, loss, confusion matrix).

You can also import and use the standalone `model.py`:

```python
from model import build_custom_cnn
# ... load data, compile, and fit the model
```

## 📈 Results

After training, review the final cell in `Custom_Built_CNNs.ipynb` for performance metrics and sample predictions.

## ✨ Contributing

1. Fork the repo
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to your branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

>>>>>>> 21075b7 (Add Custom Build CNN model)
