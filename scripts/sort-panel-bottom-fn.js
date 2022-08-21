function sortPanelBottomFn() {
    let contentHeight = parseFloat(getComputedStyle(content).height);
    let taskListHeight = parseFloat(getComputedStyle(taskList).height);
    let taskListPaddingTop = parseFloat(getComputedStyle(taskList).paddingTop);
    let taskListPaddingBottom = parseFloat(getComputedStyle(taskList).paddingBottom);
    let taskListInnerHeight = taskListHeight - (taskListPaddingTop + taskListPaddingBottom);
    let differenceHeight = contentHeight - (taskListPaddingTop + taskListInnerHeight);

    //console.log(`contentHeight: ${contentHeight}, taskListInnerHeight: ${taskListInnerHeight}, differenceHeight: ${differenceHeight}`);
    if (taskListInnerHeight >= 215.8 && differenceHeight > 0) {
        sortPanel.style.bottom = differenceHeight + 'px';
    } else 
    if (taskListInnerHeight >= 215.8 && differenceHeight < 0) {
        sortPanel.style.bottom = "0px";
    } else
    if (taskListInnerHeight < 215.8 && differenceHeight > 0) {
        sortPanel.style.bottom = "160px";
    }
}