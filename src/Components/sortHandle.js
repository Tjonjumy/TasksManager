function sortHandle(tasks,order) {
    if (order === 1) {
        return tasks.sort(ascendingSort) 
    } else if (order === 0) {
        return tasks.sort(descendingSort)
    }
    return tasks;
}

function ascendingSort(a, b) {
    const aValue = a.name.toLowerCase();
    const bValue = b.name.toLowerCase();
    return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
}

function descendingSort(a, b) {
    const aValue = a.name.toLowerCase();
    const bValue = b.name.toLowerCase();
    return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
}
export default sortHandle;