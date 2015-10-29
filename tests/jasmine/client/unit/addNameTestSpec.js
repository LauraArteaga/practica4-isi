describe('createNewList', function() {
    beforeAll(function(done){

      Meteor.call('clearDB', function(){
        Meteor.call('loadFixtures');
        done();
      });

    })
    beforeEach(function(done){

      Meteor.loginWithPassword("user@gmail.com", "123456789", function(err){
        Tracker.afterFlush(done);
      });
    });

     afterEach(function(done){

        Meteor.logout(function() {

          Tracker.afterFlush(done);
        });
      });

    it("Mete un nombre",function(done){

      $('[name="listName"]').val("PepitoTrueno"); 
      $('#formList').submit();
      setTimeout(function(){
        
        expect(Lists.findOne({name:"PepitoTrueno"})).toBeTruthy()
        done();
      }, 1000);
    });
});