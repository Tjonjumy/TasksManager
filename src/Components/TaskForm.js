import React from "react";
import Modal from "./Modal";

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: {
                id: '',
                name: '',
                status: 'todo',
                trash: false,
            },
            isValid: true
        };
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        return ({task: props.task})
    }

    handleChange(event) {
        const {task} = this.state;
        const filedName = event.target.name;
        const value = event.target.value;
        task[filedName] = value;
        this.setState({task : task},() => {
            this.handelValidation();
        }
        );  
    }

    onSubmitHandle(event) {
        const {task} = this.state;
        event.preventDefault();
        this.handelValidation();
        if (task.name.trim()) {
            this.props.onSubmit(task);
        }
        if (!task.id) {
            task.name = '';
            task.status = 'todo';
            this.setState({task :task})
        }
    }

    removeTaskHandle = () => {
        this.props.onRemoveTask(this.state.task)
    }

    handelValidation() {
        const {task} = this.state;
        if (!task.name.trim()) {
            this.setState({isValid : false});
        } else {
            this.setState({isValid : true});
        }
    }

    render() {
        const {task, isValid} = this.state;
        const {name, status, id} = task;
        const removeBtn = <Modal 
                            type={'Remove'} 
                            message={'Are you sure you want to remove this task?'} 
                            onRemove={this.removeTaskHandle}                               
                          />;
        const discardBtn = <button 
                                type="submit" 
                                className="btn btn-default float-right" 
                                onClick={this.props.onCloseTaskForm}>
                                Discard
                            </button>;
        const btnElement = id ? removeBtn : discardBtn;

        return (
          <div className="card card-primary">
              <div className="card-header">
                  <i className="fa fa-times" aria-hidden="true" onClick={this.props.onCloseTaskForm}></i>
                  <h3 className="card-title">{id ? 'Edit Task' : 'Add New Task'}</h3>
              </div>
              <div className="card-body">
                  <form onSubmit={this.onSubmitHandle}>
                      <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input 
                                type="text" 
                                className={`form-control ${!isValid ? 'border-danger' : ''}`} id="taskName" 
                                name="name" placeholder="Task name" 
                                value={name}
                                onChange={this.handleChange}
                                
                          />
                          <span className={`form-check-label ${!isValid ? 'text-danger' : 'd-none'}`}>
                            Please fill out this field
                          </span>
                      </div>
                      <div className="form-group">
                          <label htmlFor="taskStatus">Status</label>
                          <select 
                            className="form-control" name="status" id="taskStatus"
                            onChange={this.handleChange}
                            value={status}
                          >
                            <option value="todo">To do</option>
                            <option value="inprogress">Inprogress</option>
                            <option value="completed">Completed</option>
                            {/* <option value="removed">Removed</option> */}
                          </select>
                      </div>
                      <div className="row">
                        <div className="col-6 col-md-6 col-lg-6">
                            {btnElement}
                        </div>
                        <div className="col-6 col-md-6 col-lg-6">
                            <button type="submit" className="btn btn-primary mr-4">{id ? 'Save' : 'Add'}</button>
                        </div>
                      </div>
                  </form>
              </div>
          </div>
        );
    }
}

export default TaskForm;
