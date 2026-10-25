//your code here!
const list = document.getElementById("infi-list");

let itemCount = 10;

function addItems(count) {
    for (let i = 0; i < count; i++) {
        itemCount++;

        const li = document.createElement("li");
        li.textContent = "Item " + itemCount;

        list.appendChild(li);
    }
}

list.addEventListener("scroll", function () {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight - 5) {
        addItems(2);
    }
});
