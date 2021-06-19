import TaskRow from "./TaskRow";
import sortHandle from "./sortHandle";
import FilterItem from "./FilterItem";

function TaskTable(props) {
    const {tasks, searchText, order, filterText} = props;
    const filterList = [
                            {title:'All', value: 'all'},
                            {title:'To do', value: 'todo'},
                            {title:'Inprogress', value: 'inprogress'},
                            {title:'Completed', value: 'completed'},
                            {title:'Removed', value: 'removed'},
                        ];
    const filterMenuElements = filterList.map(item => {
        return <FilterItem key={item.value} itemTitle={item.title} onClick={() => props.filterHandle(item.value)}/>
    });
    let Rows = <TaskRow task={''} message={'No tasks available'}/>;
    if (tasks.length > 0) {
        let processedTasks = tasks.map((task) => {
            if (task.trash && filterText !== 'removed' && searchText === '') {
                return -1;
            }
            if (filterText !== 'all' && task.status !== filterText && searchText === '') {
                return -1;
            }
            if (task.name.toLowerCase().indexOf(searchText) === -1) {
                return -1;
            }
            return task;
        });
        processedTasks = processedTasks.filter(task => task !== -1);
        processedTasks = sortHandle(processedTasks, order);
        
        Rows = processedTasks.map((task, idx) => {
            return (<TaskRow 
                        key={task.id} 
                        task={task} no={idx} 
                        editTask={(id) => props.editTask(id)}                   
                    />);
        });
        if (Rows.length === 0) {
            Rows = <TaskRow task={''} message={'No results found'}/>;
        }
    }
    return (
        <table className="table table-bordered table-hover task-table">
            <thead style={{background: "#75e7ad"}} className="text-center">
                <tr>
                    <th>No</th>
                    <th>
                        Taks Name
                        <div className="dropdown d-inline float-right">
                            <span className="dropdown-toggle" id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></span>
                            <div className="dropdown-menu" aria-labelledby="dLabel">
                            <span className="dropdown-item" onClick={() => props.sortHandle(1)}>
                                <i className="fa fa-sort-alpha-asc" aria-hidden="true"></i>
                                &nbsp;Ascending
                            </span>
                            <span className="dropdown-item" onClick={() => props.sortHandle(0)}>
                                <i className="fa fa-sort-alpha-desc" aria-hidden="true"></i>
                                &nbsp;Descending
                            </span>
                            </div>
                        </div>
                    </th>
                    <th>
                        Status
                        <div className="dropdown d-inline float-right">
                            <span className="dropdown-toggle" id="dLabel2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></span>
                            <div className="dropdown-menu" aria-labelledby="dLabel2">
                                {filterMenuElements}
                            </div>
                        </div>
                    </th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {Rows}
            </tbody>
        </table>
    )
}

export default TaskTable;