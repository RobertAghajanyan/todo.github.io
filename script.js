const addBtn = document.getElementById("addBtn");
const adding = document.getElementById("adding");
const todos = document.getElementById("todos");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");
const textInp = document.getElementById("textInp");
const todoDoneBtn = document.getElementById("doneBtn");

addBtn.addEventListener("click", function () {
  addBtn.style.display = "none";
  adding.style.display = "flex";
});
let count = 0;
saveBtn.addEventListener("click", function () {
  const textInp = document.getElementById("textInp");
  let textValue = textInp.value;
  if (textValue.length < 3) {
    textInp.style.borderColor = "red";
  } else {
    count++;
    const todo = document.createElement("div");
    todo.className = "listOfTodo";
    todo.id = "listOfTodo-" + count;

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.className = "doneBtn";
    doneBtn.id = "doneBtn-" + count;

    let todoText = document.createElement("p");
    todoText.className = "textOfTodo";
    todoText.id = "textOfTodo-" + count;
    todoText.innerHTML = textValue;

    todo.appendChild(todoText);
    todo.appendChild(doneBtn);

    todos.append(todo);

    addBtn.style.display = "flex";
    adding.style.display = "none";

    textInp.value = "";

    for (let index = 1; index <= count; ++index) {
      let elBtn = document.getElementById("doneBtn" + "-" + index);
      elBtn.addEventListener("click", function () {
        debugger;
        let buttonId = elBtn.id.split("-")[1];
        const div = document.getElementById("listOfTodo" + "-" + buttonId);
        div.style.backgroundColor = "green";
        elBtn.style.display = "none";
        const doneTxt = document.createElement("h5");
        doneTxt.innerHTML = "DONE";
        doneTxt.style.color = "white";
        todoText.style.textDecoration = "line-through";
        div.append(doneTxt);
      });
      continue;
    }
  }
});

cancelBtn.addEventListener("click", function () {
  addBtn.style.display = "flex";
  adding.style.display = "none";
  textInp.value = "";
});
