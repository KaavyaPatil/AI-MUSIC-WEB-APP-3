song = "";
song1 = "";
leftWristX = 0 ;
leftWristY = 0;
rightWristX = 0;
ruightWristY = 0;

function preload()
{
    song = loadSound("m.mp3");
    song1 = loadSound("m2.mp3");
}
function setup()
{
    canvas = createCanvas(610, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.posenet(video , modelLoaded);
    posenet.on('pose' , gotPoses);
}
function draw()
{
    image(0,0,650,600);
}
function modelLoaded{
    console.log("PoseNet Is Initialized");
}
function gotPoses()
{
    if(result.length > 0)
    {
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+ rightWristX+"rightWristY = " + rightWristY);

        leftWristX = results[0].pose.leftWristx;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
    }
}