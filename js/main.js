function changeBackground(color) {
    var body = document.getElementById('body');
    body.style.backgroundColor = color.value;
}

//var searchBar = document.getElementById('search-form');

//Add event listener
searchBar.addEventListener('input', searchSite);

var sth = document.querySelector('.nav-and-title');
var newElem = document.createElement('div');
//console.log(newElem);
//console.log(sth.parentNode);

function openHiddenContent(n,id) {
    var contentid = "hidden-content" + n;
    id.setAttribute('onclick','closeHiddenContent(' + n + ',this)');
    id.innerHTML = 'Close';
    var content = document.getElementById(contentid);
    content.style.display = 'block';
    console.log(id);
}

function closeHiddenContent(n,id){
    var contentid = "hidden-content" + n;
    id.setAttribute('onclick','openHiddenContent(' + n + ',this)');
    id.innerHTML = 'Read more';
    var content = document.getElementById(contentid);
    content.style.display = 'none';
    console.log(id);
}

function openPopupContent(n) {
    var contentid = "popup-content" + n;

    var content = document.getElementById(contentid);
    console.log(content);
    content.style.display = 'block';
    content.style.position = 'fixed';
}

function closePopup(n) {
    var contentid = "popup-content" + n;
    var content = document.getElementById(contentid);
    content.style.display = 'none';
}
