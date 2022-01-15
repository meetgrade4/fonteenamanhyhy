function preload() {
    
}

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(0,150);

    canvas = createCanvas(550,550);
    canvas.position(560,200);

    poseNet = ml5.poseNet(video, modelLoaded);
}

function draw() {
    poseNet.on('pose', gotResults);
}

function modelLoaded() {
    console.log("the model is loaded");
}

function gotResults(result) {
    if(result.length > 0){
        console.log(result);
    }
}