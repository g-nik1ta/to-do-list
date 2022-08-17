function sortTasks(e) {
    taskList.innerHTML = "";
    if (e.target.id == "hide-completed-task") {
        const filterTasks = tasks.filter(task => !task.isDone)
        filterTasks.forEach(filterTask => {
            taskList.append(filterTask.div);
        });
    } else
        if (e.target.id == "show-all-task") {
            tasks.forEach(task => {
                taskList.append(task.div);
            });
        }
}

showAllTask.addEventListener("click", sortTasks);
hideCompletedTask.addEventListener("click", sortTasks);