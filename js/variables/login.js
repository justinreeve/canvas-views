var CanvasView = new Object(),
	Login = new Object();

Login.container = $('.ic-Login__container');
Login.formLogin = Login.container.find('form#login_form');
Login.googleLogin = Login.formLogin.find('a.ic-Login__sso-button--google');
Login.canvasLogin = Login.formLogin.find('button.Button--primary.Button--login');

CanvasView.Login = Login;