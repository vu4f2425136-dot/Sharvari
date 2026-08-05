function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = task;

    let btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.className = "delete";

    btn.onclick = function () {
        li.remove();
    };

    li.appendChild(btn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}