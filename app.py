import json
from flask import Flask, render_template, jsonify

app = Flask(__name__)


@app.route("/")
def index():
    data = {}
    try:
        # TODO: Utilise un chemin absolu en prod
        # exemple: data_file_path = '/path/to/your/data.json'
        with open("data.json", encoding="utf-8") as f:
            data = json.load(f)
    except FileNotFoundError:
        print("Erreur de traitement de data.json")
        # return jsonify({"error": "Data file not found"}), 404
    except json.JSONDecodeError:
        print("Erreur de traitement de data.json")
        # return jsonify({"error": "Error decoding JSON data"}), 500
    
    return render_template("index.html", data=data)


@app.get("/data.json")
def get_data_json():
    try:
        # TODO: Utilise un chemin absolu en prod
        # exemple: data_file_path = '/path/to/your/data.json'
        with open("data.json", encoding="utf-8") as f:
            data = json.load(f)
        return jsonify(data)
    except FileNotFoundError:
        return jsonify({"error": "Data file not found"}), 404
    except json.JSONDecodeError:
        return jsonify({"error": "Error decoding JSON data"}), 500


if __name__ == "__main__":
    app.run(debug=True)  # TODO: Mettre debug=False en production
