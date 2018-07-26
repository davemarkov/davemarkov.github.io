function changeBackground(color) {
    var body = document.getElementById('body');
    body.style.backgroundColor = color.value;
}

var searchBar = document.getElementById('search-form');

//Add event listener
searchBar.addEventListener('input', searchSite);

var sth = document.querySelector('.nav-and-title');
var newElem = document.createElement('div');
//console.log(newElem);
//console.log(sth.parentNode);


function searchSite() {

    var searchValue = searchBar.value.toUpperCase();
    //  console.log(searchValue);

    //get all text-content
    var contacts = document.querySelectorAll('div.text-content');
    //console.log(contacts);
    var searchBox = document.getElementById('display-search').style;
    searchBox.display = 'block';
    //loop through contacts
    if (searchValue == '') {
        document.getElementById('display-search').innerHTML = '';
        document.getElementById('nav-and-title').style.position = 'fixed';
        return;
    }
    document.getElementById('nav-and-title').style.position = 'relative';
    for (var i = 0; i < contacts.length; i++) {
        var text = contacts[i].getElementsByTagName('h1')[0];
        //  console.log(contacts[i]);
        if (text.innerHTML.toLocaleUpperCase().localeCompare(searchValue) > -1) {
            //contacts[i].style.display = 'none';
            document.getElementById('display-search').innerHTML = contacts[i];
        } else {
            document.getElementById('display-search').innerHTML = '';
        }
    }
}

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