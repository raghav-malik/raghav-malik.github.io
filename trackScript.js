"use strict";

const track = document.getElementById("image-track");


window.onmousedown = function(e)
{
    track.dataset.mouseDownAt = e.clientX;    
}

window.onmouseup = function()
{
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = function(e)
{
    if ( track.dataset.mouseDownAt === "0" )
    {
        return;
    }

    const yAxis = -60;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth/2;
    

    
    const percentage = (mouseDelta/maxDelta)*100*(-1);
    const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);


    track.dataset.percentage = nextPercentage;
    

    track.animate({
        transform: `translate(${nextPercentage}%, ${yAxis}%)`
    }, { duration: 1000, fill: "forwards" });
    
    
    for (const image of track.getElementsByClassName("image"))
    {
        image.animate({
            objectPosition: `${nextPercentage+100}% center`
        }, { duration: 1000, fill: "forwards"});
    }
}