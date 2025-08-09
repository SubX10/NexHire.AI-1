from flask import Flask, jsonify, request
from face_analysis import analyze_face
from voice_analysis import analyze_voice

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])from flask import Flask, jsonify, request
from face_analysis import analyze_face
from voice_analysis import analyze_voice

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    face_result = analyze_face(data.get("face_data"))
    voice_result = analyze_voice(data.get("audio_file"))
    return jsonify({
        "face_analysis": face_result,
        "voice_analysis": voice_result
    })

if __name__ == "__main__":
    print("✅ AI Engine started at http://127.0.0.1:5000")
    app.run(host="0.0.0.0", port=5000)
def analyze():
    data = request.json
    face_result = analyze_face(data.get("face_data"))
    voice_result = analyze_voice(data.get("audio_file"))
    return jsonify({
        "face_analysis": face_result,
        "voice_analysis": voice_result
    })

if __name__ == "__main__":
    print("✅ AI Engine started at http://127.0.0.1:5000")
    app.run(host="0.0.0.0", port=5000)
