/*Javascript to make a sound when hovering a-tags in header*/

function PlaySound (soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound (soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.curentTime = 0;
}