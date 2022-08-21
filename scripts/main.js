let taskNameInput = document.querySelector("#task-name-input");
let addTaskButton = document.querySelector("#add-task-btn");
let startMessage = document.querySelector("#start-message");
let taskList = document.querySelector(".task-list");
let tasks = [];
let content = document.querySelector(".content");
let sortPanel = document.querySelector(".sort-panel");
let showAllTask = document.querySelector("#show-all-task");
let hideCompletedTask = document.querySelector("#hide-completed-task");

class Task {
    static ID = 0;
    constructor(text) {
        this.taskID = Task.ID;
        Task.ID++;
        this.text = text;
        this.isDone = false;
        this.div = null;
        // this.startMsg = startMessage;
        this.editorSwitch = false;
    }

    createIn(element) {
        this.div = document.createElement("div");
        this.div.classList.add("task");

        let checkbox = document.createElement("div");
        checkbox.classList.add("checkbox");
        checkbox.addEventListener("click", () => this.changeState(this.div));

        let p = document.createElement("p");
        p.innerText = this.text;

        let edit = document.createElement("img");
        edit.classList.add("edit");
        edit.addEventListener("click", () => this.editor(this.div));
        edit.setAttribute("src", "images/edit.png");
        edit.setAttribute("alt", "edit-text");

        let trashCan = document.createElement("img");
        trashCan.classList.add("trash-can");
        trashCan.addEventListener("click", () => this.removeList(this.div));
        trashCan.setAttribute("src", "images/trash-can.png");
        trashCan.setAttribute("alt", "trash-can");

        this.div.append(checkbox);
        this.div.append(p);
        this.div.append(edit)
        this.div.append(trashCan);
        element.append(this.div);
    }

    changeState(element) {
        if (!this.editorSwitch) {
            this.isDone = !this.isDone;
            element.classList.toggle("completed");
        }
    }

    removeList(element) {
        let taskId = this.taskID;
        let index = tasks.findIndex(el => el.taskID === taskId);
        element.remove();
        tasks.splice(index, 1);
        if (tasks.length === 0) {
            startMessage.hidden = false;
            showAllTask.hidden = true;
            hideCompletedTask.hidden = true;
        }
        sortPanelBottomFn();
    }

    editor(element) {
        this.editorSwitch = !this.editorSwitch;
        if (this.editorSwitch) {
            let rows;
            let editText = document.createElement("textarea");
            editText.classList.add("edit-text");

            if (this.isDone) {
                rows = parseFloat(getComputedStyle(element.querySelector("p")).height) / 19.2;
                editText.style.fontSize = "16px";
            } else rows = parseFloat(getComputedStyle(element.querySelector("p")).height) / 21.6;
            editText.setAttribute("rows", rows);
            editText.setAttribute("spellcheck", "false");

            editText.innerHTML = element.querySelector("p").textContent;
            element.querySelector("p").replaceWith(editText);

            editText.focus();
            editText.selectionStart = editText.value.length;
        } else {
            let p = document.createElement("p");
            p.innerHTML = element.querySelector(".edit-text").value;

            element.querySelector(".edit-text").replaceWith(p);
        }
        sortPanelBottomFn();
    }
}