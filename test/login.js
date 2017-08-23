describe('Login', function() {
	describe('LoginForm', function() {
		it('should be available', function() {
			chai.expect(LoginForm).to.be.a('function');
		});
	});
	
	describe('LoginHeader', function() {
		it('should be available', function() {
			chai.expect(LoginHeader).to.be.a('function');
		});
	});

	describe('SubmitFeedbackSection', function() {
		it('should be available', function() {
			chai.expect(SubmitFeedbackSection).to.be.a('function');
		});
	});

	describe('SubmitFeedbackResults', function() {
		it('should be available', function() {
			chai.expect(SubmitFeedbackResults).to.be.a('function');
		});
	});

	describe('Footer', function() {
		it('should be available', function() {
			chai.expect(Footer).to.be.a('function');
		});
	});

	describe('LoginPage', function() {
		it('should be available', function() {
			chai.expect(LoginPage).to.be.a('function');
		});
	});
});
