function addTaskHandler() {
    if (taskNameInput.value) {
        if (!startMessage.hidden) startMessage.hidden = true;
        if (showAllTask.hidden) {
            showAllTask.hidden = false;
            hideCompletedTask.hidden = false;
        }

        let newTask = new Task(taskNameInput.value);
        newTask.createIn(taskList);
        tasks.push(newTask);
        
        sortPanelBottomFn();        

        taskNameInput.value = "";
    } else {
        alert("введите имя задачи");
    }
}

addTaskButton.addEventListener("click", addTaskHandler);
taskNameInput.addEventListener("keydown", function (e) {
    if (e.code == "Enter" || e.code == "NumpadEnter") addTaskHandler();
});