Webcam.set({

    width: 350,

    height: 300,

    img_format: "png",

    png_quality: 90

})

camera = document.getElementById("Camera");

Webcam.attatch("#camera")

function TakeSnapshot() {

    Webcam.snap(function(data_uri){

        document.getElementById("Result").innerHTML = '<img id="ZooWeeMama" src=' + data_uri + ' >'

    })
    
}

console.log("ml5 Version:",ml5.version);

Classifier = ml5.ImageClassifier("https://teachablemachine.withgoogle.com/models/MqRTmMARr/model.json",ModelLoaded);

function ModelLoaded() {

    console.log("Model Loaded");
    
}