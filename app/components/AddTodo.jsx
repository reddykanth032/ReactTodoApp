var React =require('react');

var AddTodo=React.createClass({
  onFormSubmit:function(e){
    e.preventDefault();
    var todoText=this.refs.todoText.value;
    if(todoText.length>0){
      this.refs.todoText.value='';
      this.props.onAddTodo(todoText);
    }else{
      this.refs.todoText.focus();
    }
  },
  render:function(){
  return(
    <div className="container__footer">
      <form onSubmit={this.onFormSubmit}>
        <input type='text' ref='todoText' placeholder='Please type Todo here'/>
        <button className="button expanded ">AddTodo</button>
      </form>
    </div>
  );
  }
});

module.exports=AddTodo;
