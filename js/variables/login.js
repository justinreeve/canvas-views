var CV = new Object(),
	Login = new Object();

Login.container = $('.ic-Login__container');
Login.formLogin = Login.container.find('form#login_form');

Login.googleLoginContainer = '<div />';
Login.googleLoginButton = Login.formLogin.find('a.ic-Login__sso-button--google');

Login.canvasLoginContainer = '<div />';
Login.canvasLoginInputEmail = Login.formLogin.find('div.ic-Form-control ic-Form-control--login:eq(0)');
Login.canvasLoginInputPassword = Login.formLogin.find('div.ic-Form-control ic-Form-control--login:eq(1)');
Login.canvasLoginButton = Login.formLogin.find('button.Button--primary.Button--login');

CV.Login = Login;