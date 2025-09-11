function uploadImage() {
  const input = document.getElementById("imageInput");
  const file = input.files[0];

  if (!file) {
    alert("Please select an image.");
    return;
  }

  const formData = new FormData();
  formData.append("image", file);

  // Image preview
  const preview = document.getElementById("preview");
  const objectUrl = URL.createObjectURL(file);
  preview.innerHTML = `
    <p><strong>Image Preview:</strong></p>
    <img src="${objectUrl}" height="200" onload="URL.revokeObjectURL(this.src)">
  `;

  // Optional: Show loading
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p style="color: gray;">Processing...</p>`;

  // Send to backend
  fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    body: formData
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }
      return res.json();
    })
    .then(data => {
      resultDiv.innerHTML = `
        <h3>Prediction Result</h3>
        <p><strong>Class:</strong> ${data.class}</p>
        <p><strong>Confidence:</strong> ${(data.confidence * 100).toFixed(2)}%</p>
      `;
    })
    .catch(err => {
      resultDiv.innerHTML = `<p style="color: red;">Error: ${err.message}</p>`;
    });
}
