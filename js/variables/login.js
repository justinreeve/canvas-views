var Login = {};

Login.container = $('.ic-Login__container');
Login.loginForm = Login.container.find('form#login_form');
Login.googleLogin = Login.loginForm.find('a.ic-Login__sso-button--google');
Login.canvasLogin = Login.loginForm.find('button.Button--primary.Button--login');

console.log(Login);