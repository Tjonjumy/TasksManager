(this["webpackJsonptask-manager-app"]=this["webpackJsonptask-manager-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(9),l=a.n(c),r=(a(14),a(15),a(3)),i=a(4),o=a(2),d=a(6),m=a(5),j=a(0);var b=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{type:"button","data-toggle":"modal","data-target":"#myModal",className:"btn btn-danger float-right",children:e.type}),Object(j.jsx)("div",{className:"modal",tabIndex:"-1",id:"myModal",children:Object(j.jsx)("div",{className:"modal-dialog",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("div",{className:"modal-header",children:[Object(j.jsx)("h5",{className:"modal-title",children:"Remove Tasks"}),Object(j.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(j.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(j.jsx)("div",{className:"modal-body",children:Object(j.jsx)("p",{children:e.message})}),Object(j.jsxs)("div",{className:"modal-footer",children:[Object(j.jsx)("button",{type:"button",className:"btn btn-default","data-dismiss":"modal",children:"Discard"}),Object(j.jsx)("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",onClick:e.onRemove,children:"Yes"})]})]})})})]})},h=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={task:{id:"",name:"",status:"todo",trash:!1},isValid:!0},s.onSubmitHandle=s.onSubmitHandle.bind(Object(o.a)(s)),s.handleChange=s.handleChange.bind(Object(o.a)(s)),s}return Object(i.a)(a,[{key:"handleChange",value:function(e){var t=this,a=this.state.task,s=e.target.name,n=e.target.value;a[s]=n,this.setState({task:a},(function(){t.handelValidation()}))}},{key:"onSubmitHandle",value:function(e){var t=this.state.task;console.log(t),e.preventDefault(),this.handelValidation(),t.name.trim()&&this.props.onSubmit(t),t.id||(t.name="",t.status="todo",this.setState({task:t}))}},{key:"onRemoveHandle",value:function(){}},{key:"handelValidation",value:function(){this.state.task.name.trim()?this.setState({isValid:!0}):this.setState({isValid:!1})}},{key:"render",value:function(){var e=this.state,t=e.task,a=e.isValid,s=t.name,n=t.status;return Object(j.jsxs)("div",{className:"card card-primary",children:[Object(j.jsxs)("div",{className:"card-header",children:[Object(j.jsx)("i",{className:"fa fa-times","aria-hidden":"true",onClick:this.props.onCloseTaskForm}),Object(j.jsx)("h3",{className:"card-title",children:"Add Task"})]}),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsxs)("form",{onSubmit:this.onSubmitHandle,children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"name",children:"Name"}),Object(j.jsx)("input",{type:"text",className:"form-control ".concat(a?"":"border-danger"),id:"taskName",name:"name",placeholder:"Task name",value:s,onChange:this.handleChange}),Object(j.jsx)("span",{className:"form-check-label ".concat(a?"d-none":"text-danger"),children:"Please fill out this field"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"taskStatus",children:"Status"}),Object(j.jsxs)("select",{className:"form-control",name:"status",id:"taskStatus",onChange:this.handleChange,value:n,children:[Object(j.jsx)("option",{value:"todo",children:"Todo"}),Object(j.jsx)("option",{value:"inprogress",children:"Inprogress"}),Object(j.jsx)("option",{value:"completed",children:"Completed"}),Object(j.jsx)("option",{value:"removed",children:"Removed"})]})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-6 col-lg-6",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-primary mr-4",children:"Save"})}),Object(j.jsx)("div",{className:"col-md-6 col-lg-6",children:Object(j.jsx)(b,{onRemove:this.deleteAllTasks,type:"Remove",message:"Are you sure you want to remove this task?"})})]})]})})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{task:e.task}}}]),a}(n.a.Component);var u=function(e){return Object(j.jsxs)("div",{className:"input-group mb-3",children:[Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Search","aria-label":"Recipient's username","aria-describedby":"basic-addon2",value:e.value,onChange:function(t){return e.onSearch(t)}}),Object(j.jsx)("div",{className:"input-group-append",children:Object(j.jsx)("button",{className:"btn btn-outline-secondary",type:"button",children:Object(j.jsx)("i",{className:"fa fa-search","aria-hidden":"true"})})})]})};var p=function(e){var t=e.task;if(!t||t.trash)return Object(j.jsx)("tr",{children:Object(j.jsx)("td",{colSpan:"4",children:e.message})});var a,s=e.no+1,n=t.name,c=t.id;switch(t.status){case"inprogress":a=Object(j.jsx)("span",{className:"badge badge-primary",children:"Inprogress"});break;case"completed":a=Object(j.jsx)("span",{className:"badge badge-success",children:"Completed"});break;case"removed":a=Object(j.jsx)("span",{className:"badge badge-warning",children:"Removed"});break;default:a=Object(j.jsx)("span",{className:"badge badge-secondary",children:"Todo"})}return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:s}),Object(j.jsx)("td",{className:"task-name",children:n}),Object(j.jsx)("td",{className:"text-center",children:a}),Object(j.jsx)("td",{className:"text-center",onClick:function(){return e.editTask(c)},children:Object(j.jsx)("i",{className:"fa fa-pencil","aria-hidden":"true"})})]})};function x(e,t){var a=e.name.toLowerCase(),s=t.name.toLowerCase();return a>s?1:a<s?-1:0}function O(e,t){var a=e.name.toLowerCase(),s=t.name.toLowerCase();return a>s?-1:a<s?1:0}var v=function(e,t){return 1===t?e.sort(x):0===t?e.sort(O):e};var g=function(e){var t=e.tasks,a=e.searchText,s=e.order,n=Object(j.jsx)(p,{task:"",message:"No tasks available"});if(t.length>0){var c=t.map((function(e){return e.trash||-1===e.name.toLowerCase().indexOf(a)?-1:e}));c=c.filter((function(e){return-1!==e})),0===(n=(c=v(c,s)).map((function(t,a){return Object(j.jsx)(p,{task:t,no:a,editTask:function(t){return e.editTask(t)}},t.id)}))).length&&(n=Object(j.jsx)(p,{task:"",message:"No results found"}))}return Object(j.jsxs)("table",{className:"table table-bordered table-hover task-table",children:[Object(j.jsx)("thead",{style:{background:"#75e7ad"},children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"No"}),Object(j.jsxs)("th",{children:["Taks Name",Object(j.jsxs)("div",{className:"dropdown d-inline float-right",children:[Object(j.jsx)("span",{className:"dropdown-toggle",id:"dLabel",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}),Object(j.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dLabel",children:[Object(j.jsxs)("span",{className:"dropdown-item",onClick:function(){return e.sortHandle(1)},children:[Object(j.jsx)("i",{className:"fa fa-sort-alpha-asc","aria-hidden":"true"}),"\xa0Ascending"]}),Object(j.jsxs)("span",{className:"dropdown-item",onClick:function(){return e.sortHandle(0)},children:[Object(j.jsx)("i",{className:"fa fa-sort-alpha-desc","aria-hidden":"true"}),"\xa0Descending"]})]})]})]}),Object(j.jsxs)("th",{children:["Status",Object(j.jsxs)("div",{className:"dropdown d-inline float-right",children:[Object(j.jsx)("span",{className:"dropdown-toggle",id:"dLabel2",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}),Object(j.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dLabel2",children:[Object(j.jsx)("span",{className:"dropdown-item",type:"span",children:"All"}),Object(j.jsx)("span",{className:"dropdown-item",type:"span",children:"To do"}),Object(j.jsx)("span",{className:"dropdown-item",type:"span",children:"Inprogress"}),Object(j.jsx)("span",{className:"dropdown-item",type:"span",children:"Completed"}),Object(j.jsx)("span",{className:"dropdown-item",type:"span",children:"Removed"})]})]})]}),Object(j.jsx)("th",{children:"Edit"})]})}),Object(j.jsx)("tbody",{children:n})]})},f=a(21),k=a(8),N=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).toggleTaskForm=function(e){var t=s.state.isDisplayForm;"add"===e||"edit"===e?s.setState({isDisplayForm:!0}):s.setState({isDisplayForm:!t,task:{id:"",name:"",status:"todo",trash:!1}})},s.onSearchTask=function(e){var t=e.target.value.toLowerCase();s.setState({searchText:t})},s.onEditTask=function(e){s.toggleTaskForm("edit");var t=s.state.tasks.slice(),a=Object(k.findIndex)(t,{id:e});s.setState({task:t[a]})},s.sortHandle=function(e){s.setState({order:e})},s.removeTaskHandle=function(e){},s.deleteAllTasks=function(){s.setState((function(){return{tasks:[]}})),localStorage.removeItem("tasks")},s.state={tasks:[],isDisplayForm:!1,searchText:"",filterText:"all",order:null,task:{id:"",name:"",status:"todo",trash:!1}},s.onSubmitHandle=s.onSubmitHandle.bind(Object(o.a)(s)),s}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e;e=localStorage&&localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):y,this.setState({tasks:e})}},{key:"onSubmitHandle",value:function(e){console.log(e);var t=e.id,a=this.state.tasks;if(t){var s=Object(k.findIndex)(a,{id:t});a.splice(s,1,e)}else e.id=Object(f.a)(),a.push(e);this.setState((function(){return{tasks:a}})),localStorage.setItem("tasks",JSON.stringify(this.state.tasks))}},{key:"render",value:function(){var e=this,t=this.state,a=t.tasks,s=t.task,n=t.isDisplayForm,c=t.order,l=t.searchText,r=n?Object(j.jsx)(h,{onSubmit:this.onSubmitHandle,onCloseTaskForm:this.toggleTaskForm,onRemoveTask:this.removeTaskHandle,task:s}):"";return Object(j.jsxs)("div",{className:"container-fluid mt-3",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"text-center",children:"Tasks Manager"}),Object(j.jsx)("hr",{})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:n?"col-xs-4 col-sm-4 col-md-4 col-lg-4":"",children:r}),Object(j.jsxs)("div",{className:n?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6",children:Object(j.jsx)(u,{value:this.state.searchText,onSearch:this.onSearchTask})}),Object(j.jsx)("div",{className:"col-md-3 col-lg-3",children:Object(j.jsxs)("button",{type:"button",className:n?"invisible":"btn btn-primary float-right",onClick:function(){return e.toggleTaskForm("add")},children:[Object(j.jsx)("i",{className:"fa fa-plus","aria-hidden":"true"}),"\xa0Add Tasks"]})}),Object(j.jsx)("div",{className:"col-md-3 col-lg-3",children:Object(j.jsx)(b,{onRemove:this.deleteAllTasks,type:"Remove All",message:"Are you sure you want to remove all tasks?"})})]}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:Object(j.jsx)(g,{tasks:a,order:c,searchText:l,sortHandle:this.sortHandle,editTask:this.onEditTask})})})]})]})]})}}]),a}(n.a.Component),y=[{name:"Playing soccer",status:"todo",trash:!1,id:"5b0658a2-af54-4c86-b82a-7d99bfd74878"},{name:"Walking",status:"inprogress",trash:!1,id:"ca275d65-7362-4fb4-8f0b-82055c06c9ee"},{name:"Coding",status:"todo",trash:!1,id:"47cfe1a8-8b2a-4d51-a037-c4a7691145d9"}],S=N;var T=function(){return Object(j.jsx)(S,{})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),s(e),n(e),c(e),l(e)}))};l.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root")),C()}},[[19,1,2]]]);
//# sourceMappingURL=main.7ac45261.chunk.js.map