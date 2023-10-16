let item = document.getElementById("item");
let toDoli = document.getElementById("To-Do-list");


item.addEventListener(
    "keyup", function(itemEvent) {
        if (itemEvent.key == "Enter") {
            addToDo(this.value)
            this.value = ""
        }
    }
)

let addToDo = (item) => {
    let additem = document.createElement("li");
    additem.innerHTML = ` ${item} `;

    additem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )

    toDoli.appendChild(additem);
}