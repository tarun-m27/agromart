from flask import Flask, request, render_template, redirect, url_for, flash
from werkzeug.utils import secure_filename
import os
import numpy as np
import pickle
from PIL import Image

# Initialize Flask app
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = './uploads'
app.secret_key = 'your_secret_key'  # For flashing messages

# Load the model
model_path = 'plant_disease_prediction_model_mobilenet.pkl'
with open(model_path, 'rb') as model_file:
    model = pickle.load(model_file)

# Class indices mapping (Adjust as per your model)
class_indices = {
    0: 'Apple Scab',
    1: 'Apple Black Rot',
    2: 'Apple Cedar Apple Rust',
    3: 'Apple Healthy',
    4: 'Blueberry Healthy',
    5: 'Cherry Powdery Mildew',
    6: 'Cherry Healthy',
    7: 'Corn Cercospora Leaf Spot Gray Leaf Spot',
    8: 'Corn Common Rust',
    9: 'Corn Northern Leaf Blight',
    10: 'Corn Healthy',
    11: 'Grape Black Rot',
    12: 'Grape Esca (Black Measles)',
    13: 'Grape Leaf Blight (Isariopsis Leaf Spot)',
    14: 'Grape Healthy',
    15: 'Orange Huanglongbing (Citrus Greening)',
    16: 'Peach Bacterial Spot',
    17: 'Peach Healthy',
    18: 'Pepper Bell Bacterial Spot',
    19: 'Pepper Bell Healthy',
    20: 'Potato Early Blight',
    21: 'Potato Late Blight',
    22: 'Potato Healthy',
    23: 'Raspberry Healthy',
    24: 'Soybean Healthy',
    25: 'Squash Powdery Mildew',
    26: 'Strawberry Leaf Scorch',
    27: 'Strawberry Healthy',
    28: 'Tomato Bacterial Spot',
    29: 'Tomato Early Blight',
    30: 'Tomato Late Blight',
    31: 'Tomato Leaf Mold',
    32: 'Tomato Septoria Leaf Spot',
    33: 'Tomato Spider Mites Two-Spotted Spider Mite',
    34: 'Tomato Target Spot',
    35: 'Tomato Tomato Yellow Leaf Curl Virus',
    36: 'Tomato Tomato Mosaic Virus',
    37: 'Tomato Healthy'
}

def load_and_preprocess_image(image_path):
    img = Image.open(image_path).resize((224, 224))
    img_array = np.array(img).astype('float32') / 255.0
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    return img_array

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file:
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)

            # Predict the disease
            img_array = load_and_preprocess_image(file_path)
            predictions = model.predict(img_array)

            # Check the confidence of the prediction
            predicted_class_index = np.argmax(predictions, axis=1)[0]
            predicted_class_name = class_indices.get(predicted_class_index, "Unknown")
            confidence = np.max(predictions)

            # Set a threshold for confidence (e.g., 0.5)
            if confidence < 0.5:  # Adjust this threshold as needed
                flash('The uploaded image does not appear to contain a leaf or plant.')
                return redirect(request.url)

            return render_template('index.html', prediction=predicted_class_name)

    return render_template('index.html', prediction=None)

if __name__ == '__main__':
    if not os.path.exists(app.config['UPLOAD_FOLDER']):
        os.makedirs(app.config['UPLOAD_FOLDER'])
    app.run(debug=True)