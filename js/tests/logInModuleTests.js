describe('LoginModule', function() {
	describe('LogInModule', function() {
		it('should be an object', function() {
			chai.expect(interviewApp.Modules.LogInModule).to.be.a('object');
		});
    });
    describe('LogInModule.init', function() {
		it('should be a function', function() {
			chai.expect(interviewApp.Modules.LogInModule.init).to.be.a('function');
		});
	});
	
	
});