import joblib
import re
import os
from flask import Flask, request, jsonify
from Sastrawi.Stemmer.StemmerFactory import StemmerFactory
from Sastrawi.StopWordRemover.StopWordRemoverFactory import StopWordRemoverFactory
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

base_dir = os.path.dirname(os.path.abspath(__file__))

model_path = os.path.join(base_dir, "model", "sentiment_model.pkl")
vectorizer_path = os.path.join(base_dir, "model", "tfidf_vectorizer.pkl")

try:
    model = joblib.load(model_path)
    vectorizer = joblib.load(vectorizer_path)
    print("Model and vectorizer loaded successfully.")
except Exception as e:
    print(f"Error loading model or vectorizer: {e}")
    model = None
    vectorizer = None

stopword_remover = StopWordRemoverFactory().create_stop_word_remover()
stemmer = StemmerFactory().create_stemmer()

def clean_text(text, words_to_remove=None):
    """
    Fungsi komprehensif untuk membersihkan teks.
    """
    text = text.lower()
    text = re.sub(r'https?://\S+|www\.\S+', '', text)
    text = re.sub(r'@[A-Za-z0-9_]+', '', text)
    text = re.sub(r'#', '', text)
    text = re.sub(r'\\brt\\b', '', text)
    text = re.sub(r'[^a-z\s]', '', text)

    words = text.split()
    words = [word for word in words if len(word) > 1]
    text = ' '.join(words)

    slang_dict = {
        'yg': 'yang', 'ga': 'tidak', 'gak': 'tidak', 'gk': 'tidak',
        'sdh': 'sudah', 'udah': 'sudah', 'blm': 'belum', 'bgt': 'banget',
        'utk': 'untuk', 'dg': 'dengan', 'klo': 'kalau', 'kalo': 'kalau',
        'tdk': 'tidak', 'jgn': 'jangan', 'sm': 'sama', 'lg': 'lagi',
        'gpp': 'tidak apa apa', 'bnyk': 'banyak', 'dr': 'dari'
    }
    words = text.split()
    reformed_words = [slang_dict[word] if word in slang_dict else word for word in words]
    text = ' '.join(reformed_words)

    if words_to_remove:
        words = text.split()
        words_to_remove_set = set(words_to_remove)
        reformed_words = [word for word in words if word not in words_to_remove_set]
        text = ' '.join(reformed_words)
    
    text = text.strip()
    return text

def preprocess_text(text):
    """
    Menggabungkan semua langkah preprocessing untuk input baru.
    """
    custom_words_to_remove = ['fri', 'feb', 'thu', "wed", "tue", "mon", "sun", "omon"]
    cleaned_text = clean_text(text, words_to_remove=custom_words_to_remove)
    no_stopwords_text = stopword_remover.remove(cleaned_text)
    stemmed_text = stemmer.stem(no_stopwords_text)
    return stemmed_text


@app.route("/predict", methods=["POST"])
def predict():
    """
    Endpoint untuk menerima teks dan mengembalikan prediksi sentimen.
    """
    if not model or not vectorizer:
        return jsonify({"error": "Model or vectorizer not loaded"}), 500

    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400

    data = request.get_json()
    if 'text' not in data:
        return jsonify({"error": "Missing 'text' key in request body"}), 400

    try:
        text_input = data['text']

        processed_text = preprocess_text(text_input)

        text_vector = vectorizer.transform([processed_text])

        prediction = model.predict(text_vector)

        return jsonify({"sentiment": prediction[0]})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5328)))