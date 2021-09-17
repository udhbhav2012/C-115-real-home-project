function preload()
{

}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses)
}
function modelLoaded()
{
    console.log('PoseNet is initialized');
}
function getPoses(results)
{
if (results.lenght > 0)
{
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
}
}
function draw()
{

}
function take_snapshot()
{
   save('myFilterimage.png');
}