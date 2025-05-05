# Deep Learning Breast Cancer Detection using CNNs

Deep learning-assisted X-ray mammography can improve the accuracy of breast cancer screening, using convolutional neural networks (CNNs) trained on the Digital Database for Screening Mammography (DDSM). It is inspired by a UK NHS initiative launched in early 2025 to explore AI-assisted diagnostics.

## 🧠 Project Objective

To determine whether CNN-based deep learning systems can accurately classify mammogram images into diagnostic categories, with the goal of:
- Reducing diagnostic turnaround time
- Supporting or replacing one of the two radiologists in current UK NHS breast cancer screening protocols
- Improving overall detection accuracy and consistency

## 📂 Dataset

**Digital Database for Screening Mammography (CBIS-DDSM)**

- Includes annotated mammogram images
- Four diagnostic categories:
  - Malignant
  - Benign (with callback)
  - Benign (no callback)
  - Normal
- Views: MLO 
- Format: DICOM to PNG

## 🧰 Tools & Libraries

- Python 3.10+
- TensorFlow / Keras
- NumPy, Pandas
- OpenCV / pydicom (for image processing)
- Matplotlib / Seaborn (for visualization)
