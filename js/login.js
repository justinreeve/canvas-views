var loginForm = $('form#login_form'),
//	studentLogin = $('span.ic-Login_sso-button_title--google'),
	studentLogin = $('a.ic-Login__sso-button--google'),
	parentLogin = $('button.Button--primary.Button--login'),
	studentSectionHeader = '<h2>Students</h2>',
	parentSectionHeader = '<h2>Parents</h2>',
	horizontalRule = '<hr />',
	hasStudentLogin = false;

if (studentLogin.length > 0)
	hasStudentLogin = true;

if (hasStudentLogin == false)
{
	studentLogin = $('<br /><a href="/login/google" class="Button Button--primary Button--login btn btn-primary btn-large">Log in as a Student or Teacher</a>');
}
else
{
	studentLogin.text('Log in as a Student or Teacher');
	studentLogin.parent().css('background-color', '#0096db');
}
parentLogin.text('Log in as a Parent');

loginForm.prepend(horizontalRule);
loginForm.prepend(parentSectionHeader);
loginForm.prepend('<br /><br /><br />');

if (hasStudentLogin == false)
{
	studentLogin.prependTo(loginForm);
}
else
{
	studentLogin.parent().detach().prependTo(loginForm);
}

loginForm.prepend(horizontalRule);
loginForm.prepend(studentSectionHeader);