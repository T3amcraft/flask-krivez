//<!-- All Scripts. -->
//<!-- space -->

//<!-- Changing to AreaChat-->
function areaChat() {
    if (mapSize == 1) {
        var el = document.getElementById("circle");
        el.style.height = "250px";
        el.style.width = "250px";
    }
    if (mapSize == 2) {
        var el = document.getElementById("circle");
        el.style.height = "125px";
        el.style.width = "125px";
    }
    if (mapSize == 3) {
        var el = document.getElementById("circle");
        el.style.height = "62.5px";
        el.style.width = "62.5px";
    }
    if (mapSize == 4) {
        var el = document.getElementById("circle");
        el.style.height = "31.25px";
        el.style.width = "31.25px";
    }
}
//<!-- Changing to VoiceChat-->
function voiceChat() {
    if (mapSize == 1) {
        var el = document.getElementById("circle");
        el.style.height = "195.3px";
        el.style.width = "195.3px";
    }
    if (mapSize == 2) {
        var el = document.getElementById("circle");
        el.style.height = "97.7px";
        el.style.width = "97.7px";
    }
    if (mapSize == 3) {
        var el = document.getElementById("circle");
        el.style.height = "48.8px";
        el.style.width = "48.8px";
    }
    if (mapSize == 4) {
        var el = document.getElementById("circle");
        el.style.height = "24.4px";
        el.style.width = "24.4px";
    }
}
//<!-- Changing to Gunshots-->
function gunShots() {
    if (mapSize == 1) {
        var el = document.getElementById("circle");
        el.style.height = "1000px";
        el.style.width = "1000px";
    }
    if (mapSize == 2) {
        var el = document.getElementById("circle");
        el.style.height = "500px";
        el.style.width = "500px";
    }
    if (mapSize == 3) {
        var el = document.getElementById("circle");
        el.style.height = "250px";
        el.style.width = "250px";
    }
    if (mapSize == 4) {
        var el = document.getElementById("circle");
        el.style.height = "125px";
        el.style.width = "125px";
    }
}
//<!-- Changing the map-->
var mapSize = 3;

function mapCanyonArena() {
    var img = document.getElementById("map");
    img.src = "https://s3.eu-west-2.amazonaws.com/t3amcraft.public/unturnedmaps/unturnedTinyCanyonArena.png";
    mapSize = 1;
    areaChat()
    return false;
}

function mapMonolith() {
    var img = document.getElementById("map");
    img.src = "https://s3.eu-west-2.amazonaws.com/t3amcraft.public/unturnedmaps/unturnedSmallMonolith.png";
    mapSize = 2;
    areaChat()
    return false;
}

function mapWashington() {
    var img = document.getElementById("map");
    img.src = "https://s3.eu-west-2.amazonaws.com/t3amcraft.public/unturnedmaps/unturnedMediumWashington.png";
    mapSize = 3;
    areaChat()
    return false;
}

function mapPEI() {
    var img = document.getElementById("map");
    img.src = "https://s3.eu-west-2.amazonaws.com/t3amcraft.public/unturnedmaps/unturnedMediumPEI.png";
    mapSize = 3;
    areaChat()
    return false;
}

function mapYukon() {
    var img = document.getElementById("map");
    img.src = "https://s3.eu-west-2.amazonaws.com/t3amcraft.public/unturnedmaps/unturnedMediumYukon.png";
    mapSize = 3;
    areaChat()
    return false;
}

function mapRussia() {
    var img = document.getElementById("map");
    img.src = "https://s3.eu-west-2.amazonaws.com/t3amcraft.public/unturnedmaps/unturnedLargeRussia.png";
    mapSize = 4;
    areaChat()
    return false;
}

function mapWashingtonCounty() {
    var img = document.getElementById("map");
    img.src = "https://s3.eu-west-2.amazonaws.com/t3amcraft.public/unturnedmaps/unturnedLargeWashingtonCounty.png";
    mapSize = 4;
    areaChat()
    return false;
}

function mapUralMountainsLN() {
    var img = document.getElementById("map");
    img.src = "https://s3.eu-west-2.amazonaws.com/t3amcraft.public/unturnedmaps/unturnedLargeUralMountainsLN.png";
    mapSize = 4;
    areaChat()
    return false;
}

function buttonColor() {
    document.getElementsByClassName("buttonmaps").style.backgroundColor = "red";
}

function mapCheck(el) {
    if (mapSize == 1) {
        document.getElementById("box").style.background = ("#FF0000");
        el.innerHTML = "Tiny";
        return;
    }
    if (mapSize == 2) {
        document.getElementById("box").style.background = ("#088A08");
        el.innerHTML = "Small";
        return;
    }
    if (mapSize == 3) {
        document.getElementById("box").style.background = ("#00FFFF");
        el.innerHTML = "Medium";
        return;
    }
    if (mapSize == 4) {
        document.getElementById("box").style.background = ("#00FF00");
        el.innerHTML = "Large";
        return;
    }
}