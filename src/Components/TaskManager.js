
import React from 'react';
import TaskForm from './TaskForm';
import SearchTask from './SearchTask';
import TaskTable from './TaskTable';
import Modal from './Modal';
import { v4 as uuidv4 } from 'uuid';
import { findIndex } from 'lodash';


class TaskManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false,
            searchText: '',
            filterText: 'all',
            order: null,
            task: {
                id: '',
                name: '',
                status: 'todo',
                trash: false,
            }
        };
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
    }
    componentDidMount() {
        let tasks;
        if (localStorage && localStorage.getItem('tasks')) {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        } else {
            tasks = datas;
        }
        this.setState({tasks: tasks});
    }

    onSubmitHandle(task) {
        console.log(task)
        const {id} = task;
        const {tasks} = this.state;
        if (id) {
            const index = findIndex(tasks, {id: id});
            tasks.splice(index, 1, task);
        } else {
            task.id = uuidv4();
            tasks.push(task);
        }
        this.setState(() => ({
            tasks: tasks
        }));
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }

    toggleTaskForm = (action) => {
        const {isDisplayForm} = this.state;
        if (action === 'add' || action === 'edit') {
            this.setState({isDisplayForm: true});
        } else {
            this.setState(
                {
                    isDisplayForm: !isDisplayForm,
                    task: {
                        id: '',
                        name: '',
                        status: 'todo',
                        trash: false,
                    }
                
                }
            );
        }
    }

    onSearchTask = (e) => {
        const searchText = e.target.value.toLowerCase();
        this.setState({searchText: searchText});
    }

    onEditTask = (id) => {
        this.toggleTaskForm('edit');
        const tasks = this.state.tasks.slice();
        const index = findIndex(tasks, {id: id});
        this.setState({task: tasks[index]});
    }

    sortHandle = (value) => {
        this.setState({order: value});
    }

    removeTaskHandle = (task) => {
        // const {tasks} = this.state
        // const id = task.id;
        // const index = findIndex(tasks, {id: id});
        // tasks[index].trash = true;
        // this.setState({tasks: tasks});
    }

    deleteAllTasks = () => {
        this.setState(() => ({tasks: []}))
        localStorage.removeItem('tasks');
    }

    render() {
        const {tasks, task, isDisplayForm, order, searchText} = this.state;
        const elemFormTask = isDisplayForm ? 
            <TaskForm onSubmit={this.onSubmitHandle} onCloseTaskForm={this.toggleTaskForm} onRemoveTask={this.removeTaskHandle} task={task}/> : '';

        return (
            <div className="container-fluid mt-3">
                <div>
                    <h1 className="text-center">Tasks Manager</h1><hr />
                </div>            
                <div className="row">
                <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                    {/* {TASK FORM} */} 
                    {elemFormTask}
                </div>
                <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            {/* {SEARCH TASKS} */}
                            <SearchTask value={this.state.searchText} onSearch={this.onSearchTask}/>         
                        </div>
                        <div className="col-md-3 col-lg-3">
                            <button type="button" className={isDisplayForm ? "invisible" : "btn btn-primary float-right"}
                                onClick={() => this.toggleTaskForm('add')}
                            >
                            <i className="fa fa-plus" aria-hidden="true"></i>
                            &nbsp;Add Tasks
                            </button>        
                        </div>
                        <div className="col-md-3 col-lg-3">
                            <Modal 
                                onRemove={this.deleteAllTasks} 
                                type={'Remove All'}
                                message={'Are you sure you want to remove all tasks?'}
                            />
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        {/* {TABLE TASKS} */}
                        <TaskTable 
                            tasks={tasks}
                            order={order}
                            searchText={searchText}
                            sortHandle={this.sortHandle}
                            editTask={this.onEditTask}
                        />
                    </div>
                    </div>
                </div>
                </div>
            </div>       
        )
    }
}

const datas = [
                {name: "Playing soccer", status: "todo", trash: false, id: "5b0658a2-af54-4c86-b82a-7d99bfd74878"},
                {name: "Walking", status: "inprogress", trash: false, id: "ca275d65-7362-4fb4-8f0b-82055c06c9ee"},
                {name: "Coding", status: "todo", trash: false, id: "47cfe1a8-8b2a-4d51-a037-c4a7691145d9"},
            ];

export default TaskManager;