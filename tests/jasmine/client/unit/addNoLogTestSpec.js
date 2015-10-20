describe('Meteor methods', function() {

  describe('createNewList', function() {

    beforeEach(function(){
      spyOn(Lists, "insert");
    });

    it("No añade lista si no regstrado", function(done) {
      var listName = "";
      var err = "not logged-in";
      
      Meteor.call("createNewList", listName, function(error, result){
        expect(error.error).toBe(err);
        expect(Lists.insert).not.toHaveBeenCalled();
        done();
      });
    });

  });

});
