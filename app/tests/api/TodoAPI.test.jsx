var expect=require('expect');

var TodoAPI=require('TodoAPI');

describe('TodoAPI',()=>{
    beforeEach(()=>{
      localStorage.removeItem('todos');
    });
    it('should Exist',()=>{
      expect(TodoAPI).toExist();
    });

    describe('setTodos',()=>{
    it('should set valid todos array',()=>{
      var todos=[{
        id:23,
        text:'test',
        completed:false
      }];
      TodoAPI.setTodos(todos);
      var actualTodos=JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });
    it('should not set invalid todos array',()=>{

      var badTodos={
        a:'b'
      };
      TodoAPI.setTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    });


});
  describe('getTodos',()=>{
    it('should return empty array bydefault',()=>{
      var actualTodos=TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });
    it('should return valid array',()=>{
      var todos=[{
        id:23,
        test:'test',
        completed:false
      }];
      localStorage.setItem('todos',JSON.stringify(todos));
      var actualTodos=TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodos',()=>{
    var todos=[{
      id:1,
      text:'first text',
      completed:true
    },
    {
      id:2,
      text:'second text',
      completed:false
    },
    {
      id:3,
      text:'third text',
      completed:true
    }];

    it('should show all items when showCompleted is true',()=>{
      var filterTodos=TodoAPI.filterTodos(todos,true,'');
      expect(filterTodos.length).toBe(3);
    });
    it('should show only not completed items when showCompleted is false',()=>{
      var filterTodos=TodoAPI.filterTodos(todos,false,'');
      expect(filterTodos.length).toBe(1);
    });

    it('should filter todos by non-completed first',()=>{
      var filterTodos=TodoAPI.filterTodos(todos,true,'');
      expect(filterTodos[0].completed).toBe(false);
    });
    it('should filter todos by searchText',()=>{
      var filterTodos=TodoAPI.filterTodos(todos,true,'first');
      expect(filterTodos.length).toBe(1);
    });

    it('should return all items if search text is empty',()=>{
      var filterTodos=TodoAPI.filterTodos(todos,true,'');
      expect(filterTodos.length).toBe(3);
    });

  });
    });
