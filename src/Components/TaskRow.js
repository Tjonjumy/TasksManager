
function TaskRow(props) {
    const {task} = props;
    if (!task || task.trash) {
        return (
            <tr>
                <td colSpan="4">{props.message}</td>
            </tr>
        )
    } else {
        const no = props.no + 1;
        const {name, id} = task;
        let status;
        switch (task.status) {
            case 'inprogress':
                status = <span className="badge badge-primary">Inprogress</span>;
                break;
            case 'completed':
                status = <span className="badge badge-success">Completed</span>;
                break;
            case 'removed':
                status = <span className="badge badge-warning">Removed</span>;
                break;
            default:
                status = <span className="badge badge-secondary">Todo</span>;
        }
        return (
            <tr>
                <td>{no}</td>
                <td className="task-name">
                    {name}
                </td>
                <td className="text-center">
                    {status}
                </td>
                <td className="text-center" onClick={() => props.editTask(id)}>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </td>
            </tr>
        )
    }
}

export default TaskRow;