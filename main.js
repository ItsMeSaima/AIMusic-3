song1 = "";
song2 = "";

leftWrisY = "";
leftWristX = "";

rightWristY = "";
rightWristX = "";

function preload(){
    song1.loadSound("PeterPan.mp3");
    song2.loadSound("HarryPotter.mp3");
}

function setup() {
     canvas =  createCanvas(600, 500);
     canvas.center();
     canvas.position(360,260);
    video = createCapture(VIDEO);
    video.hide();

    
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}
function draw() {
    image(video, 0, 0, 600, 500);
}

function modelLoaded(){
    console.log("PoseNet is Intialized");
}

function play(){
    
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        leftX = results[0].pose.leftWrist.x;
        leftY = results[0].pose.leftWrist.y;
        console.log("left wrist X = " + leftX + " left wrist Y = " + leftY);

        rightX = results[0].pose.rightWrist.x;
        rightY = results[0].pose.rightWrist.y;
        console.log("right wrist X = " + rightX + " right wrist Y = " + rightY);

    }
}