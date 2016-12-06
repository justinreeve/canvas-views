var CV = new Object(),
	Login = new Object();

Login.loginContainer = $('.ic-Login__container').clone(true);
Login.formLogin = Login.loginContainer.find('form#login_form').clone(true);

Login.googleLoginContainer = '<div />';
Login.googleLoginButton = Login.formLogin.find('a.ic-Login__sso-button--google').clone(true);

Login.canvasLoginContainer = '<div />';
Login.canvasLoginInputEmail = Login.formLogin.find('div.ic-Form-control ic-Form-control--login:eq(0)').clone(true);
Login.canvasLoginInputPassword = Login.formLogin.find('div.ic-Form-control ic-Form-control--login:eq(1)').clone(true);
Login.canvasLoginButton = Login.formLogin.find('button.Button--primary.Button--login').clone(true);

CV.Login = Login;