var React=require('react');
var ReactDOM=require('react-dom');
var expect=require('expect');
var $=require('jQuery');
var TestUtils=require('react-addons-test-utils');

var TodoList=require('TodoList');
var Todo=require('Todo');
describe('TodoList',()=>{
  it('it should exist',()=>{
    expect(TodoList).toExist();
  });
  it('should render one Todo Component for each todo item',()=>{
    var todos=[
      {
        id:1,
        text:'first test'
      },{
        id:2,
        text:'second test'
      }
    ];
    var todoList=TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todoComponents=TestUtils.scryRenderedComponentsWithType(todoList,Todo);
    expect(todoComponents.length).toBe(todos.length);
  });
});
