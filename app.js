let noteList = [];

window.addEventListener('load', function () {
    // ...
});

function newItem() {
    var item = document.querySelector("input#input").value;
    var ul = document.querySelector("ul#list");
    var li = document.createElement("li");

    li.appendChild(document.createTextNode("- " + item));
    ul.appendChild(li);
    document.getElementById("input").value = "";
    li.onclick = removeItem;
}

document.body.onkeyup = function (e) {
    if (e.keyCode == 13) {
        newItem();
    }
};

function removeItem(e) {
    e.target.parentElement.removeChild(e.target);
}

function saveNotes () {
    // ...
}

function loadNotes () {
    // ...
}

function renderNote () {
    // ...
}