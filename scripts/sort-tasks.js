function sortTasks(e) {
    taskList.innerHTML = "";
    if (e.target.id == "hide-completed-task") {
        const filterTasks = tasks.filter(task => !task.isDone);
        filterTasks.forEach(filterTask => {
            taskList.append(filterTask.div);
        });
        
        if (tasks.length !== 0 && taskList.innerHTML == "") {
            startMessage.innerHTML = "Нет не завершенных задач";
            taskList.append(startMessage);
            startMessage.hidden = false;
        }
    } else
        if (e.target.id == "show-all-task") {
            tasks.forEach(task => {
                taskList.append(task.div);
            });
            startMessage.innerHTML = "Нет новых задач";
            taskList.append(startMessage);
            startMessage.hidden = true;
        }
}

showAllTask.addEventListener("click", sortTasks);
hideCompletedTask.addEventListener("click", sortTasks);