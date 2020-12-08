let noteList = new NoteList
noteList.addNote("Note 1")
noteList.addNote("Note 2")
noteList.addNote("Note 3")
console.log(noteList)

let listofNotes = new noteListView(noteList)
const app = document.getElementById('app');

setTimeout( function() {
    app.innerHTML = listofNotes.getHTML();
}, 2000);



// class noteController {
//     constructor(noteList) {
//         this.noteList = noteList
//         this.noteListView = new noteListView(this.noteList)
//     }
//
//     showInHTML(element) {
//         element.innerHTML += this.noteList.getHTML();
//     }
// }


