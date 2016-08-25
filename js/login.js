var loginForm = $('form#login_form'),
	studentLogin = $('span.ic-Login_sso-button_title--google'),
	parentLogin = $('button.Button--primary.Button--login'),
	studentSectionHeader = '<h2>Students</h2>',
	parentSectionHeader = '<h2>Parents</h2>',
	horizontalRule = '<hr />';

studentLogin.text('Log in as a Student');
studentLogin.parent().css('background-color', '#0096db');
parentLogin.text('Log in as a Parent');

loginForm.prepend(horizontalRule);
loginForm.prepend(parentSectionHeader);
loginForm.prepend('<br /><br /><br />');
studentLogin.parent().detach().prependTo(loginForm);
loginForm.prepend(horizontalRule);
loginForm.prepend(studentSectionHeader);