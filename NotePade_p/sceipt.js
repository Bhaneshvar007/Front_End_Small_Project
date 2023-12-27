let CreateNote = document.querySelector(".btn");
// let deleteNote = document.querySelector(".delete");
let container = document.querySelector(".container");

CreateNote.addEventListener("click", () => {

    const newEl = document.createElement("div")
    newEl.classList.add("notePade")
    newEl.innerHTML = `
            <nav>
                <p>note</p>
                <div class="right">
                    <p>save</p>
                    <p class="delete">delete</p>
                </div>
            </nav>
            <section>
                <textarea></textarea>
            </section>`

    container.appendChild(newEl)

    let deleteNote = newEl.querySelector(".delete")

    deleteNote.addEventListener("click", () => {
        newEl.remove();
    })
})
