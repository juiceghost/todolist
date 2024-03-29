let noteList;

window.addEventListener('load', function () {
    // ...
    // Hämta data från localStorage
    loadNotes(); // hämtar arrayen från localstorage och läser in i noteList
    noteList.forEach(renderNote);
});

function renderNotes(func = () => true) {
    document.querySelector("ul#preview").innerHTML = "";
    noteList.filter(func).forEach(renderNote);
}
function onlyFavs(note) {
    return note.favourite
}

function filterEvenIDs(note) {
    return (note.id % 2 === 0)
}

function newItem() {
    var item = document.querySelector("input#input").value;
    var ul = document.querySelector("ul#list");
    var li = document.createElement("li");

    li.appendChild(document.createTextNode("- " + item));
    ul.appendChild(li);
    addNote();
    document.querySelector("input#input").value = "";
    li.onclick = removeItem;
}

document.body.onkeyup = function (e) {
    if (e.keyCode == 13) {
        newItem();
        saveNotes();
    }
};

function removeItem(e) {
    e.target.parentElement.removeChild(e.target);
}

function addNote() {
    // skapa ett nytt objekt
    // fyll i data från inputfältet
    // lägg till note i noteList

    let note = {
        id: Date.now(),
        content: document.querySelector("input#input").value,
        favourite: true
    }
    console.log(note);
    noteList.push(note);
    renderNote(note);
}
function saveNotes() {
    // ...
    // save noteList to localStorage
    localStorage.setItem('notes', JSON.stringify(noteList));
}

function loadNotes() {
    // ...
    // load noteList from localStorage
    if (localStorage.getItem('notes')) {
        noteList = JSON.parse(localStorage.getItem('notes'));
    } else {
        noteList = [];
    }
}

function renderNote(note) {
    // ...
    // ta note du fick som argument
    // rendera den noten i preview-listan
    var ul = document.querySelector("ul#preview");
    var li = document.createElement("li");

    li.appendChild(document.createTextNode("- " + note.id));
    ul.appendChild(li);

    //li.onclick = removeItem;
}

let bigList = [
    {
        "title": "aaa",
        "text": {
            "ops": [
                {
                    "insert": "aaaaa\n"
                }
            ]
        },
        "preview": "aaaaa\n",
        "isStarred": "false",
        "isDeleted": "false",
        "id": 1574027714262,
        "year": 2019,
        "month": 10,
        "date": 17,
        "hours": 22,
        "minutes": 55,
        "seconds": 8
    },
    {
        "title": "bbbbbbstar",
        "text": {
            "ops": [
                {
                    "insert": "bbbbb\n"
                },
                {
                    "insert": "starbbbbb\n"
                },
            ]
        },
        "preview": "bbbbbbstar\n",
        "isStarred": "false",
        "isDeleted": "false",
        "id": 1574027717863,
        "year": 2019,
        "month": 10,
        "date": 17,
        "hours": 22,
        "minutes": 55,
        "seconds": 8
    },
    {
        "title": "ccc",
        "text": {
            "ops": [
                {
                    "insert": "cccccstartccccc\n"
                }
            ]
        },
        "preview": "cccccstartccccc\n",
        "isStarred": "false",
        "isDeleted": "false",
        "id": 1574028029296,
        "year": 2019,
        "month": 10,
        "date": 17,
        "hours": 22,
        "minutes": 55,
        "seconds": 8
    }
]