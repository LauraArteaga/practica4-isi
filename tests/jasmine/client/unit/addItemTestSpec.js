describe("CreateListItem", function(){

  beforeAll(function(done){

    Meteor.call('clearDB', function(){
        Meteor.call('loadFixtures');
        done();
      });
  });
  
  describe("If logged", function(){

    beforeEach(function(done){

      Meteor.loginWithPassword("user@gmail.com", "123456789", function(err){
        Tracker.afterFlush(done);
      });
    });

    it("Deberia meter un objeto", function(done){

      var NewObj = "Objeto";
      var NewList = "Lista";

      $('[name="listName"]').val(NewList); 
      $('#formList').submit();
      setTimeout(function(){

        expect(Lists.findOne({name:NewList})).toBeTruthy();
        $("[name=todoName]").val(NewObj);
        $("form.addTodo").submit();
        
      setTimeout(function(){

        expect(Todos.findOne({name: NewObj})).toBeTruthy();
        done();
      }, 100);
      }, 200);
    });
  });
});