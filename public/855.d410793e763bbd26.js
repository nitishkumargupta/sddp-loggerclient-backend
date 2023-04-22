"use strict";(self.webpackChunksddp_logger_frontend=self.webpackChunksddp_logger_frontend||[]).push([[855],{3855:(h,s,r)=>{r.r(s),r.d(s,{LoginModule:()=>Z});var l=r(8996),m=r(9609),e=r(433),n=r(4650),c=r(9199),g=r(6091),d=r(6895);const f=["email"];function U(o,a){1&o&&(n.TgZ(0,"div",19),n._uU(1,"\n        "),n.TgZ(2,"strong"),n._uU(3,"Failed to sign in!"),n.qZA(),n._uU(4," Please check your credentials and try again.\n      "),n.qZA())}const p={path:"",component:(()=>{class o{constructor(t,i,u){this.accountService=t,this.loginService=i,this.router=u,this.authenticationError=!1,this.loginForm=new e.cw({email:new e.NI("",{nonNullable:!0,validators:[e.kI.required]}),password:new e.NI("",{nonNullable:!0,validators:[e.kI.required]}),rememberMe:new e.NI(!1,{nonNullable:!0,validators:[e.kI.required]})})}ngOnInit(){this.accountService.identity().subscribe(()=>{this.accountService.isAuthenticated()&&this.router.navigate([""])})}ngAfterViewInit(){this.email.nativeElement.focus()}login(){this.loginService.login(this.loginForm.getRawValue()).subscribe({next:()=>{this.authenticationError=!1,this.router.getCurrentNavigation()||this.router.navigate([""])},error:()=>this.authenticationError=!0})}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(c.B),n.Y36(g.r),n.Y36(l.F0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["jhi-login"]],viewQuery:function(t,i){if(1&t&&n.Gf(f,5),2&t){let u;n.iGM(u=n.CRH())&&(i.email=u.first)}},decls:63,vars:2,consts:[[1,"d-flex","justify-content-center"],[1,"col-lg-6","col-md-8","col-sm-10"],["data-cy","loginTitle"],["class","alert alert-danger","data-cy","loginError",4,"ngIf"],["role","form",1,"form",3,"formGroup","ngSubmit"],[1,"mb-3"],["for","email",1,"username-label"],["data-cy","email","formControlName","email","id","email","name","email","placeholder","Your email","type","text",1,"form-control"],["email",""],["for","password"],["data-cy","password","formControlName","password","id","password","name","password","placeholder","Your password","type","password",1,"form-control"],[1,"form-check"],["for","rememberMe",1,"form-check-label"],["formControlName","rememberMe","id","rememberMe","name","rememberMe","type","checkbox",1,"form-check-input"],["data-cy","submit","type","submit",1,"btn","btn-primary"],[1,"mt-3","alert","alert-warning"],["data-cy","forgetYourPasswordSelector","routerLink","/account/reset/request",1,"alert-link"],[1,"alert","alert-warning"],["routerLink","/account/register",1,"alert-link"],["data-cy","loginError",1,"alert","alert-danger"]],template:function(t,i){1&t&&(n.TgZ(0,"div"),n._uU(1,"\n  "),n.TgZ(2,"div",0),n._uU(3,"\n    "),n.TgZ(4,"div",1),n._uU(5,"\n      "),n.TgZ(6,"h1",2),n._uU(7,"Sign in"),n.qZA(),n._uU(8,"\n      "),n.YNc(9,U,5,0,"div",3),n._uU(10,"\n      "),n.TgZ(11,"form",4),n.NdJ("ngSubmit",function(){return i.login()}),n._uU(12,"\n        "),n.TgZ(13,"div",5),n._uU(14,"\n          "),n.TgZ(15,"label",6),n._uU(16,"email"),n.qZA(),n._uU(17,"\n          "),n._UZ(18,"input",7,8),n._uU(20,"\n        "),n.qZA(),n._uU(21,"\n\n        "),n.TgZ(22,"div",5),n._uU(23,"\n          "),n.TgZ(24,"label",9),n._uU(25,"Password"),n.qZA(),n._uU(26,"\n          "),n._UZ(27,"input",10),n._uU(28,"\n        "),n.qZA(),n._uU(29,"\n\n        "),n.TgZ(30,"div",11),n._uU(31,"\n          "),n.TgZ(32,"label",12),n._uU(33,"\n            "),n._UZ(34,"input",13),n._uU(35,"\n            "),n.TgZ(36,"span"),n._uU(37,"Remember me"),n.qZA(),n._uU(38,"\n          "),n.qZA(),n._uU(39,"\n        "),n.qZA(),n._uU(40,"\n\n        "),n.TgZ(41,"button",14),n._uU(42,"Sign in"),n.qZA(),n._uU(43,"\n      "),n.qZA(),n._uU(44,"\n      "),n.TgZ(45,"div",15),n._uU(46,"\n        "),n.TgZ(47,"a",16),n._uU(48,"Did you forget your password?"),n.qZA(),n._uU(49,"\n      "),n.qZA(),n._uU(50,"\n\n      "),n.TgZ(51,"div",17),n._uU(52,"\n        "),n.TgZ(53,"span"),n._uU(54,"You don't have an account yet?"),n.qZA(),n._uU(55,"\n        "),n.TgZ(56,"a",18),n._uU(57,"Register a new account"),n.qZA(),n._uU(58,"\n      "),n.qZA(),n._uU(59,"\n    "),n.qZA(),n._uU(60,"\n  "),n.qZA(),n._uU(61,"\n"),n.qZA(),n._uU(62,"\n")),2&t&&(n.xp6(9),n.Q6J("ngIf",i.authenticationError),n.xp6(2),n.Q6J("formGroup",i.loginForm))},dependencies:[e._Y,e.Fj,e.Wl,e.JJ,e.JL,d.O5,e.sg,e.u,l.yS],encapsulation:2}),o})(),data:{pageTitle:"Sign in"}};let Z=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[m.m,l.Bz.forChild([p])]}),o})()}}]);