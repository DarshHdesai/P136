video ="";

function setup()
{
    canvas = createCanvas(480 , 380 );
    canvas.center();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detected Objects";

}
function modelLoaded()
{
    console.log("model loaded !")
    status = true;
}

function draw()
{
    image( video ,0,0,480,380);
}
