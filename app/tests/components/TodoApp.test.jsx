var React=require('react');
var ReactDOM=require('react-dom');
var expect=require('expect');
var $=require('jQuery');
var TestUtils=require('react-addons-test-utils');

var TodoApp=require('TodoApp');

describe('TodoApp',()=>{
  it('it should exist',()=>{
    expect(TodoApp).toExist();
  });
  it('should add todo when we pass the text',()=>{
    var todoText='test text';
    var todoApp=TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[]});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should toggle todo when we click on checkbox',()=>{
    var todos=[
      {id:11,
      text:'sleep',
      completed:false}
    ];
    var todoApp=TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[...todos]});
    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);

  });
});
