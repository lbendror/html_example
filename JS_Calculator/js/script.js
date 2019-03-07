var currentColorNumber = 0;

function changeContent() {
    var date = new Date();
    document.getElementById("content_change").innerHTML = date.toString();
}

function changeAttribute() {
    var linkElement = document.getElementById("changing_link");
    var currentUrl = linkElement.getAttribute("href");

    if (currentUrl.includes("google")) {
        linkElement.setAttribute("href", "http://www.ynet.co.il");
    }
    else {
        linkElement.setAttribute("href", "http://www.google.co.il");
    }
}

function changeColor() {
    
    currentColorNumber++;
    if (currentColorNumber > 9) {
        currentColorNumber=0;
    }
    
    var colorChangerDiv = document.getElementById("color_changer");
    var color = '';

    switch (currentColorNumber) {
        case 0:
            color = 'white';
            break;
        case 1:
            color = 'green';
            break;
        case 2:
            color = 'gold';
            break;
        case 3:
            color = 'black';
            break;
        case 4:
            color = 'brown';
            break;
        case 5:
            color = 'orange';
            break;
        case 6:
            color = 'yellow';
            break;
        case 7:
            color = 'pink';
            break;
        case 8:
            color = 'blue';
            break;
        case 9:
            color = 'red';
            break;
    }

    colorChangerDiv.style.backgroundColor = color;
}

function hideOrShowTd() {
    var cell = document.getElementById("cellX");
    
    var dispalyValue = cell.style.display;

    if (dispalyValue == 'none') {
        cell.style.display = 'block';
    }
    else {
        cell.style.display='none';
    }
}