var React=require('react');
var ReactDOM=require('react-dom');
var expect=require('expect');
var $=require('jQuery');
var TestUtils=require('react-addons-test-utils');

var AddTodo=require('AddTodo');

describe('AddTodo',()=>{

  it('it should exist',()=>{
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo prop with valid data',()=>{
    var todoText='check email';
    var spy=expect.createSpy();
    var addTodo=TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el=$(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value=todoText;

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('check email');
  });

  it('should not call onAddTodo prop when input is invalid',()=>{
    var todoText='';
    var spy=expect.createSpy();
    var addTodo=TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el=$(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value=todoText;

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
