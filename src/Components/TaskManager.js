
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
            taskEditing: {
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

    onSubmitHandle(data) {
        const task = Object.assign({}, data);
        const {id, trash} = task;
        const {tasks} = this.state;
        if (trash) {
            task.trash = false;
        }
        if (id) {
            const index = findIndex(tasks, {id: id});
            tasks.splice(index, 1, task);
        } else {
            task.id = uuidv4();
            tasks.push(task);
        }
        this.setState(() => ({
            tasks: tasks,
            filterText: 'all'
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
                    taskEditing: {
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
        this.setState({taskEditing: tasks[index]});
    }

    sortHandle = (value) => {
        this.setState({order: value});
    }

    filterHandle = (value) => {
        this.setState({filterText: value});
    }

    removeTaskHandle = (task) => {
        const {tasks} = this.state
        const id = task.id;
        const index = findIndex(tasks, {id: id});
        tasks[index].trash = true;
        tasks[index].status = 'removed';
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
        this.setState({
            tasks: tasks,
            isDisplayForm: false,
            taskEditing: {
                id: '',
                name: '',
                status: 'todo',
                trash: false,
            }
        });
    }

    deleteAllTasks = () => {
        this.setState(() => ({tasks: []}))
        localStorage.removeItem('tasks');
    }

    render() {
        const {tasks, taskEditing, isDisplayForm, order, searchText, filterText} = this.state;
        const taskFormElement = <TaskForm 
                                    onSubmit={this.onSubmitHandle} 
                                    onCloseTaskForm={this.toggleTaskForm} 
                                    onRemoveTask={this.removeTaskHandle} 
                                    task={taskEditing}
                                /> 
        const elemFormTask = isDisplayForm ? taskFormElement : '';

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
                        <div className="row mb-3">
                            <div className="col-6 col-md-6 col-lg-6">
                                <button 
                                    type="button" 
                                    className={isDisplayForm ? "invisible" : "btn btn-primary"}
                                    onClick={() => this.toggleTaskForm('add')}
                                >
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                    &nbsp;Add Tasks
                                </button>        
                            </div>
                            <div className="col-6 col-md-6 col-lg-6">
                                <Modal 
                                    onRemove={this.deleteAllTasks} 
                                    type={'Remove All'}
                                    message={'All tasks will be erased permenantly.'}
                                />
                                <div className="bar-menu-container d-inline float-right">
                                    <i className="fa fa-bars"></i>
                                    <div className="bar-menu">
                                        <span className="bar-item" type="button" data-toggle="modal" data-target="#myModal">
                                            Remove all taks                                    
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                {/* {SEARCH TASKS} */}
                                <SearchTask value={this.state.searchText} onSearch={this.onSearchTask}/>         
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {/* {TABLE TASKS} */}
                                <TaskTable 
                                    tasks={tasks}
                                    order={order}
                                    filterText={filterText}
                                    searchText={searchText}
                                    sortHandle={this.sortHandle}
                                    filterHandle={this.filterHandle}
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
                {name: "Coding", status: "completed", trash: false, id: "47cfe1a8-8b2a-4d51-a037-c4a7691145d9"},
                {name: "Gaming", status: "removed", trash: true, id: "47cfe1a8-8b2a-4d51-a037-c4a7691145dd"},
            ];

export default TaskManager;