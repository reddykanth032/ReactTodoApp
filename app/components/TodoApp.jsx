var React = require('react');
var uuid=require('node-uuid');

var TodoList = require('TodoList');
var AddTodo=require('AddTodo');
var TodoSearch=require('TodoSearch');
var TodoAPI=require('TodoAPI');


var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted:false,
      searchText:'',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate:function(){
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo:function(todoText){
    // alert('new todo '+todoText)
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id:uuid(),
          text:todoText,
          completed:false
        }
      ]
    });
  },
  handleToggle:function(id){
    // alert(id)
    var updateTodos=this.state.todos.map((todo)=>{
      if(todo.id===id){
        todo.completed=!todo.completed;
        }
        return todo;
    });
    this.setState({todos:[...updateTodos]});
  },
  handleSearch:function(showCompleted,searchText){
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos,showCompleted,searchText} = this.state;
    var filteredtodos=TodoAPI.filterTodos(todos,showCompleted,searchText);
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={filteredtodos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
