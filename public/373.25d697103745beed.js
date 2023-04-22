"use strict";(self.webpackChunksddp_logger_frontend=self.webpackChunksddp_logger_frontend||[]).push([[373],{9373:(A,f,i)=>{i.r(f),i.d(f,{UserManagementModule:()=>ae});var n=i(8996),Z=i(9609),c=i(9646),p=i(9841),s=i(4218),v=i(9586),e=i(4650),h=i(5929),U=i(529),u=i(1082);let a=(()=>{class r{constructor(t,o){this.http=t,this.applicationConfigService=o,this.resourceUrl=this.applicationConfigService.getEndpointFor("api/admin/users")}create(t){return this.http.post(this.resourceUrl,t)}update(t){return this.http.put(`${this.resourceUrl}/${t.id}`,t)}find(t){return this.http.get(`${this.resourceUrl}/${t}`)}query(t){const o=(0,h.b)(t);return this.http.get(this.resourceUrl,{params:o,observe:"response"})}delete(t){return this.http.delete(`${this.resourceUrl}/${t}`)}authorities(){return this.http.get(this.applicationConfigService.getEndpointFor("api/authorities"))}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(U.eN),e.LFG(u.y))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var m=i(945),l=i(433),d=i(6895),y=i(2216),C=i(486);function M(r,_){if(1&r){const t=e.EpF();e.TgZ(0,"form",1),e.NdJ("ngSubmit",function(){e.CHM(t);const g=e.oxw();return e.KtG(g.confirmDelete(g.user.id))}),e._uU(1,"\n  "),e.TgZ(2,"div",2),e._uU(3,"\n    "),e.TgZ(4,"h4",3),e._uU(5,"Confirm delete operation"),e.qZA(),e._uU(6,"\n\n    "),e.TgZ(7,"button",4),e.NdJ("click",function(){e.CHM(t);const g=e.oxw();return e.KtG(g.cancel())}),e._uU(8,"\xd7"),e.qZA(),e._uU(9,"\n  "),e.qZA(),e._uU(10,"\n\n  "),e.TgZ(11,"div",5),e._uU(12,"\n    "),e._UZ(13,"jhi-alert-error"),e._uU(14,"\n\n    "),e.TgZ(15,"p"),e._uU(16),e.qZA(),e._uU(17,"\n  "),e.qZA(),e._uU(18,"\n\n  "),e.TgZ(19,"div",6),e._uU(20,"\n    "),e.TgZ(21,"button",7),e.NdJ("click",function(){e.CHM(t);const g=e.oxw();return e.KtG(g.cancel())}),e._uU(22,"\n      "),e._UZ(23,"fa-icon",8),e._uU(24,"\xa0"),e.TgZ(25,"span"),e._uU(26,"Cancel"),e.qZA(),e._uU(27,"\n    "),e.qZA(),e._uU(28,"\n\n    "),e.TgZ(29,"button",9),e._UZ(30,"fa-icon",10),e._uU(31,"\xa0"),e.TgZ(32,"span"),e._uU(33,"Delete"),e.qZA()(),e._uU(34,"\n  "),e.qZA(),e._uU(35,"\n"),e.qZA()}if(2&r){const t=e.oxw();e.xp6(16),e.hij("Are you sure you want to delete user ",t.user.email,"?")}}let x=(()=>{class r{constructor(t,o){this.userService=t,this.activeModal=o}cancel(){this.activeModal.dismiss()}confirmDelete(t){this.userService.delete(t).subscribe(()=>{this.activeModal.close("deleted")})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(a),e.Y36(m.Kz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["jhi-user-mgmt-delete-dialog"]],decls:2,vars:1,consts:[["name","deleteForm",3,"ngSubmit",4,"ngIf"],["name","deleteForm",3,"ngSubmit"],[1,"modal-header"],[1,"modal-title"],["aria-hidden","true","data-dismiss","modal","type","button",1,"btn-close",3,"click"],[1,"modal-body"],[1,"modal-footer"],["data-dismiss","modal","type","button",1,"btn","btn-secondary",3,"click"],["icon","ban"],["type","submit",1,"btn","btn-danger"],["icon","times"]],template:function(t,o){1&t&&(e.YNc(0,M,36,1,"form",0),e._uU(1,"\n")),2&t&&e.Q6J("ngIf",o.user)},dependencies:[l._Y,l.JL,l.F,d.O5,y.BN,C.A],encapsulation:2}),r})();var q=i(9199),S=i(9003),F=i(1408),N=i(1427),L=i(8133);function P(r,_){if(1&r&&(e.TgZ(0,"div"),e._uU(1,"\n              "),e.TgZ(2,"span",30),e._uU(3),e.qZA(),e._uU(4,"\n            "),e.qZA()),2&r){const t=_.$implicit;e.xp6(3),e.Oqu(t)}}const I=function(r){return["./",r,"view"]},J=function(r){return["./",r,"edit"]};function B(r,_){if(1&r){const t=e.EpF();e.TgZ(0,"tr"),e._uU(1,"\n          "),e.TgZ(2,"td"),e._uU(3,"\n            "),e.TgZ(4,"a",19),e._uU(5),e.qZA(),e._uU(6,"\n          "),e.qZA(),e._uU(7,"\n          "),e.TgZ(8,"td"),e._uU(9),e.qZA(),e._uU(10,"\n          "),e.TgZ(11,"td"),e._uU(12),e.qZA(),e._uU(13,"\n\n          "),e.TgZ(14,"td"),e._uU(15,"\n            "),e.YNc(16,P,5,1,"div",20),e._uU(17,"\n          "),e.qZA(),e._uU(18,"\n          "),e.TgZ(19,"td"),e._uU(20),e.ALo(21,"date"),e.qZA(),e._uU(22,"\n          "),e._uU(23,"\n          "),e.TgZ(24,"td"),e._uU(25),e.ALo(26,"date"),e.qZA(),e._uU(27,"\n          "),e.TgZ(28,"td",21),e._uU(29,"\n            "),e.TgZ(30,"div",22),e._uU(31,"\n              "),e.TgZ(32,"button",23),e._uU(33,"\n                "),e._UZ(34,"fa-icon",24),e._uU(35,"\n                "),e.TgZ(36,"span",25),e._uU(37,"View"),e.qZA(),e._uU(38,"\n              "),e.qZA(),e._uU(39,"\n\n              "),e.TgZ(40,"button",26),e._uU(41,"\n                "),e._UZ(42,"fa-icon",27),e._uU(43,"\n                "),e.TgZ(44,"span",25),e._uU(45,"Edit"),e.qZA(),e._uU(46,"\n              "),e.qZA(),e._uU(47,"\n\n              "),e.TgZ(48,"button",28),e.NdJ("click",function(){const T=e.CHM(t).$implicit,b=e.oxw(3);return e.KtG(b.deleteUser(T))}),e._uU(49,"\n                "),e._UZ(50,"fa-icon",29),e._uU(51,"\n                "),e.TgZ(52,"span",25),e._uU(53,"Delete"),e.qZA(),e._uU(54,"\n              "),e.qZA(),e._uU(55,"\n            "),e.qZA(),e._uU(56,"\n          "),e.qZA(),e._uU(57,"\n        "),e.qZA()}if(2&r){const t=_.$implicit,o=e.oxw(3);e.xp6(4),e.Q6J("routerLink",e.VKq(16,I,t.email)),e.xp6(1),e.Oqu(t.id),e.xp6(4),e.Oqu(t.email),e.xp6(3),e.Oqu(t.first_name),e.xp6(4),e.Q6J("ngForOf",t.authorities),e.xp6(4),e.Oqu(e.xi3(21,10,t.created_at,"dd/MM/yy HH:mm")),e.xp6(5),e.Oqu(e.xi3(26,13,t.updated_at,"dd/MM/yy HH:mm")),e.xp6(7),e.Q6J("routerLink",e.VKq(18,I,t.id)),e.xp6(8),e.Q6J("routerLink",e.VKq(20,J,t.id)),e.xp6(8),e.Q6J("disabled",!o.currentAccount)}}function Q(r,_){if(1&r&&(e.TgZ(0,"tbody"),e._uU(1,"\n        "),e.YNc(2,B,58,22,"tr",18),e._uU(3,"\n      "),e.qZA()),2&r){const t=e.oxw(2);e.xp6(2),e.Q6J("ngForOf",t.users)("ngForTrackBy",t.trackIdentity)}}function w(r,_){if(1&r){const t=e.EpF();e.TgZ(0,"div",8),e._uU(1,"\n    "),e.TgZ(2,"table",9),e._uU(3,"\n      "),e.TgZ(4,"thead"),e._uU(5,"\n        "),e.TgZ(6,"tr",10),e.NdJ("sortChange",function(){e.CHM(t);const g=e.oxw();return e.KtG(g.transition())})("ascendingChange",function(g){e.CHM(t);const T=e.oxw();return e.KtG(T.ascending=g)})("predicateChange",function(g){e.CHM(t);const T=e.oxw();return e.KtG(T.predicate=g)}),e._uU(7,"\n          "),e.TgZ(8,"th",11),e._uU(9,"\n            "),e.TgZ(10,"span"),e._uU(11,"ID"),e.qZA(),e._uU(12,"\n            "),e._UZ(13,"fa-icon",12),e._uU(14,"\n          "),e.qZA(),e._uU(15,"\n          "),e.TgZ(16,"th",13),e._uU(17,"\n            "),e.TgZ(18,"span"),e._uU(19,"Email"),e.qZA(),e._uU(20,"\n            "),e._UZ(21,"fa-icon",12),e._uU(22,"\n          "),e.qZA(),e._uU(23,"\n          "),e.TgZ(24,"th",14),e._uU(25,"\n            "),e.TgZ(26,"span"),e._uU(27,"Name"),e.qZA(),e._uU(28,"\n            "),e._UZ(29,"fa-icon",12),e._uU(30,"\n          "),e.qZA(),e._uU(31,"\n          "),e._uU(32,"\n          "),e.TgZ(33,"th",15)(34,"span"),e._uU(35,"Profiles"),e.qZA()(),e._uU(36,"\n          "),e.TgZ(37,"th",16),e._uU(38,"\n            "),e.TgZ(39,"span"),e._uU(40,"Created date"),e.qZA(),e._uU(41,"\n            "),e._UZ(42,"fa-icon",12),e._uU(43,"\n          "),e.qZA(),e._uU(44,"\n          "),e._uU(45,"\n          "),e.TgZ(46,"th",17),e._uU(47,"\n            "),e.TgZ(48,"span"),e._uU(49,"Modified date"),e.qZA(),e._uU(50,"\n            "),e._UZ(51,"fa-icon",12),e._uU(52,"\n          "),e.qZA(),e._uU(53,"\n          "),e._UZ(54,"th",15),e._uU(55,"\n        "),e.qZA(),e._uU(56,"\n      "),e.qZA(),e._uU(57,"\n      "),e.YNc(58,Q,4,2,"tbody",7),e._uU(59,"\n    "),e.qZA(),e._uU(60,"\n  "),e.qZA()}if(2&r){const t=e.oxw();e.xp6(6),e.Q6J("ascending",t.ascending)("predicate",t.predicate),e.xp6(52),e.Q6J("ngIf",t.users)}}const j=function(r,_,t){return{page:r,totalItems:_,itemsPerPage:t}};function Y(r,_){if(1&r){const t=e.EpF();e.TgZ(0,"div"),e._uU(1,"\n    "),e.TgZ(2,"div",31),e._uU(3,"\n      "),e._UZ(4,"jhi-item-count",32),e._uU(5,"\n    "),e.qZA(),e._uU(6,"\n\n    "),e.TgZ(7,"div",31),e._uU(8,"\n      "),e.TgZ(9,"ngb-pagination",33),e.NdJ("pageChange",function(){e.CHM(t);const g=e.oxw();return e.KtG(g.transition())})("pageChange",function(g){e.CHM(t);const T=e.oxw();return e.KtG(T.page=g)}),e.qZA(),e._uU(10,"\n    "),e.qZA(),e._uU(11,"\n  "),e.qZA()}if(2&r){const t=e.oxw();e.xp6(4),e.Q6J("params",e.kEZ(7,j,t.page,t.totalItems,t.itemsPerPage)),e.xp6(5),e.Q6J("page",t.page)("boundaryLinks",!0)("collectionSize",t.totalItems)("maxSize",5)("pageSize",t.itemsPerPage)("rotate",!0)}}const R=function(){return["./new"]};let K=(()=>{class r{constructor(t,o,g,T,b){this.userService=t,this.accountService=o,this.activatedRoute=g,this.router=T,this.modalService=b,this.currentAccount=null,this.users=null,this.isLoading=!1,this.totalItems=0,this.itemsPerPage=s.gK}ngOnInit(){this.accountService.identity().subscribe(t=>this.currentAccount=t),this.handleNavigation()}setActive(t,o){this.userService.update({...t,activated:o}).subscribe(()=>this.loadAll())}trackIdentity(t,o){return o.id}deleteUser(t){const o=this.modalService.open(x,{size:"lg",backdrop:"static"});o.componentInstance.user=t,o.closed.subscribe(g=>{"deleted"===g&&this.loadAll()})}loadAll(){this.isLoading=!0,this.userService.query({page:this.page-1,size:this.itemsPerPage,sort:this.sort()}).subscribe({next:t=>{this.isLoading=!1,this.onSuccess(t.body,t.headers)},error:()=>this.isLoading=!1})}transition(){this.router.navigate(["./"],{relativeTo:this.activatedRoute.parent,queryParams:{page:this.page,sort:`${this.predicate},${this.ascending?v.aW:v.jo}`}})}handleNavigation(){(0,p.a)([this.activatedRoute.data,this.activatedRoute.queryParamMap]).subscribe(([t,o])=>{const g=o.get("page");this.page=+(g??1);const T=(o.get(v._l)??t.defaultSort).split(",");this.predicate=T[0],this.ascending=T[1]===v.aW,this.loadAll()})}sort(){const t=[`${this.predicate},${this.ascending?v.aW:v.jo}`];return"id"!==this.predicate&&t.push("id"),t}onSuccess(t,o){this.totalItems=Number(o.get("X-Total-Count")),this.users=t}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(a),e.Y36(q.B),e.Y36(n.gz),e.Y36(n.F0),e.Y36(m.FF))},r.\u0275cmp=e.Xpm({type:r,selectors:[["jhi-user-mgmt"]],decls:36,vars:6,consts:[["data-cy","userManagementPageHeading","id","user-management-page-heading"],[1,"d-flex","justify-content-end"],[1,"btn","btn-info","me-2",3,"disabled","click"],["icon","sync",3,"spin"],[1,"btn","btn-primary","jh-create-entity",3,"routerLink"],["icon","plus"],["class","table-responsive",4,"ngIf"],[4,"ngIf"],[1,"table-responsive"],["aria-describedby","user-management-page-heading",1,"table","table-striped"],["jhiSort","",3,"ascending","predicate","sortChange","ascendingChange","predicateChange"],["jhiSortBy","id","scope","col"],["icon","sort"],["jhiSortBy","email","scope","col"],["jhiSortBy","first_name","scope","col"],["scope","col"],["jhiSortBy","created_at","scope","col"],["jhiSortBy","updated_at","scope","col"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"routerLink"],[4,"ngFor","ngForOf"],[1,"text-end"],[1,"btn-group"],["type","submit",1,"btn","btn-info","btn-sm",3,"routerLink"],["icon","eye"],[1,"d-none","d-md-inline"],["queryParamsHandling","merge","type","submit",1,"btn","btn-primary","btn-sm",3,"routerLink"],["icon","pencil-alt"],["type","button",1,"btn","btn-danger","btn-sm",3,"disabled","click"],["icon","times"],[1,"badge","bg-info"],[1,"d-flex","justify-content-center"],[3,"params"],[3,"page","boundaryLinks","collectionSize","maxSize","pageSize","rotate","pageChange"]],template:function(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"\n  "),e.TgZ(2,"h2"),e._uU(3,"\n    "),e.TgZ(4,"span",0),e._uU(5,"Users"),e.qZA(),e._uU(6,"\n\n    "),e.TgZ(7,"div",1),e._uU(8,"\n      "),e.TgZ(9,"button",2),e.NdJ("click",function(){return o.loadAll()}),e._uU(10,"\n        "),e._UZ(11,"fa-icon",3),e._uU(12,"\n        "),e.TgZ(13,"span"),e._uU(14,"Refresh list"),e.qZA(),e._uU(15,"\n      "),e.qZA(),e._uU(16,"\n      "),e.TgZ(17,"button",4),e._uU(18,"\n        "),e._UZ(19,"fa-icon",5),e._uU(20,"\n        "),e.TgZ(21,"span"),e._uU(22,"Create a new user"),e.qZA(),e._uU(23,"\n      "),e.qZA(),e._uU(24,"\n    "),e.qZA(),e._uU(25,"\n  "),e.qZA(),e._uU(26,"\n\n  "),e._UZ(27,"jhi-alert-error"),e._uU(28,"\n\n  "),e._UZ(29,"jhi-alert"),e._uU(30,"\n\n  "),e.YNc(31,w,61,3,"div",6),e._uU(32,"\n\n  "),e.YNc(33,Y,12,11,"div",7),e._uU(34,"\n"),e.qZA(),e._uU(35,"\n")),2&t&&(e.xp6(9),e.Q6J("disabled",o.isLoading),e.xp6(2),e.Q6J("spin",o.isLoading),e.xp6(6),e.Q6J("routerLink",e.DdM(5,R)),e.xp6(14),e.Q6J("ngIf",o.users),e.xp6(2),e.Q6J("ngIf",o.users))},dependencies:[d.sg,d.O5,m.N9,y.BN,S.w,C.A,F.T,N.b,L.N,n.rH,n.yS,d.uU],encapsulation:2}),r})();function H(r,_){if(1&r&&(e.TgZ(0,"li"),e._uU(1,"\n              "),e.TgZ(2,"span",8),e._uU(3),e.qZA(),e._uU(4,"\n            "),e.qZA()),2&r){const t=_.$implicit;e.xp6(3),e.Oqu(t)}}function $(r,_){if(1&r&&(e.TgZ(0,"div"),e._uU(1,"\n      "),e.TgZ(2,"h2"),e._uU(3,"\n        "),e.TgZ(4,"span"),e._uU(5,"User"),e.qZA(),e._uU(6," ["),e.TgZ(7,"strong"),e._uU(8),e.qZA(),e._uU(9,"]\n      "),e.qZA(),e._uU(10,"\n\n      "),e.TgZ(11,"dl",3),e._uU(12,"\n        "),e.TgZ(13,"dt")(14,"span"),e._uU(15,"Login"),e.qZA()(),e._uU(16,"\n        "),e.TgZ(17,"dd"),e._uU(18,"\n          "),e.TgZ(19,"span"),e._uU(20),e.qZA(),e._uU(21,"\n          "),e._uU(22,"\n          "),e._uU(23,"\n        "),e.qZA(),e._uU(24,"\n\n        "),e.TgZ(25,"dt")(26,"span"),e._uU(27,"First name"),e.qZA()(),e._uU(28,"\n        "),e.TgZ(29,"dd"),e._uU(30),e.qZA(),e._uU(31,"\n\n        "),e.TgZ(32,"dt")(33,"span"),e._uU(34,"Last name"),e.qZA()(),e._uU(35,"\n        "),e.TgZ(36,"dd"),e._uU(37),e.qZA(),e._uU(38,"\n\n        "),e.TgZ(39,"dt")(40,"span"),e._uU(41,"Email"),e.qZA()(),e._uU(42,"\n        "),e.TgZ(43,"dd"),e._uU(44),e.qZA(),e._uU(45,"\n\n        "),e.TgZ(46,"dt")(47,"span"),e._uU(48,"Created by"),e.qZA()(),e._uU(49,"\n        "),e._UZ(50,"dd"),e._uU(51,"\n\n        "),e.TgZ(52,"dt")(53,"span"),e._uU(54,"Created date"),e.qZA()(),e._uU(55,"\n        "),e.TgZ(56,"dd"),e._uU(57),e.ALo(58,"date"),e.qZA(),e._uU(59,"\n\n        "),e.TgZ(60,"dt")(61,"span"),e._uU(62,"Modified by"),e.qZA()(),e._uU(63,"\n        "),e._UZ(64,"dd"),e._uU(65,"\n\n        "),e.TgZ(66,"dt")(67,"span"),e._uU(68,"Modified date"),e.qZA()(),e._uU(69,"\n        "),e.TgZ(70,"dd"),e._uU(71),e.ALo(72,"date"),e.qZA(),e._uU(73,"\n\n        "),e.TgZ(74,"dt")(75,"span"),e._uU(76,"Profiles"),e.qZA()(),e._uU(77,"\n        "),e.TgZ(78,"dd"),e._uU(79,"\n          "),e.TgZ(80,"ul",4),e._uU(81,"\n            "),e.YNc(82,H,5,1,"li",5),e._uU(83,"\n          "),e.qZA(),e._uU(84,"\n        "),e.qZA(),e._uU(85,"\n      "),e.qZA(),e._uU(86,"\n\n      "),e.TgZ(87,"button",6),e._UZ(88,"fa-icon",7),e._uU(89,"\xa0"),e.TgZ(90,"span"),e._uU(91,"Back"),e.qZA()(),e._uU(92,"\n    "),e.qZA()),2&r){const t=e.oxw();e.xp6(8),e.Oqu(t.user.email),e.xp6(12),e.Oqu(t.user.email),e.xp6(10),e.Oqu(t.user.first_name),e.xp6(7),e.Oqu(t.user.last_name),e.xp6(7),e.Oqu(t.user.email),e.xp6(13),e.Oqu(e.xi3(58,8,t.user.created_at,"dd/MM/yy HH:mm")),e.xp6(14),e.Oqu(e.xi3(72,11,t.user.updated_at,"dd/MM/yy HH:mm")),e.xp6(11),e.Q6J("ngForOf",t.user.authorities)}}let W=(()=>{class r{constructor(t){this.route=t,this.user=null}ngOnInit(){this.route.data.subscribe(({user:t})=>{this.user=t})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(n.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["jhi-user-mgmt-detail"]],decls:8,vars:1,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],[4,"ngIf"],[1,"row-md","jh-entity-details"],[1,"list-unstyled"],[4,"ngFor","ngForOf"],["routerLink","../../","type","submit",1,"btn","btn-info"],["icon","arrow-left"],[1,"badge","bg-info"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e._uU(1,"\n  "),e.TgZ(2,"div",1),e._uU(3,"\n    "),e.YNc(4,$,93,14,"div",2),e._uU(5,"\n  "),e.qZA(),e._uU(6,"\n"),e.qZA(),e._uU(7,"\n")),2&t&&(e.xp6(4),e.Q6J("ngIf",o.user))},dependencies:[d.sg,d.O5,y.BN,n.rH,d.uU],encapsulation:2}),r})();function k(r,_){1&r&&(e.TgZ(0,"small",19),e._uU(1,"\n            This field cannot be longer than 50 characters.\n          "),e.qZA())}function G(r,_){if(1&r&&(e.TgZ(0,"div"),e._uU(1,"\n          "),e.YNc(2,k,2,0,"small",18),e._uU(3,"\n        "),e.qZA()),2&r){const t=e.oxw();let o;e.xp6(2),e.Q6J("ngIf",null==(o=t.editForm.get("first_name"))||null==o.errors?null:o.errors.maxlength)}}function z(r,_){1&r&&(e.TgZ(0,"small",19),e._uU(1,"\n            This field cannot be longer than 50 characters.\n          "),e.qZA())}function X(r,_){if(1&r&&(e.TgZ(0,"div"),e._uU(1,"\n          "),e.YNc(2,z,2,0,"small",18),e._uU(3,"\n        "),e.qZA()),2&r){const t=e.oxw();let o;e.xp6(2),e.Q6J("ngIf",null==(o=t.editForm.get("last_name"))||null==o.errors?null:o.errors.maxlength)}}function V(r,_){1&r&&(e.TgZ(0,"small",19),e._uU(1," This field is required. "),e.qZA())}function ee(r,_){1&r&&(e.TgZ(0,"small",19),e._uU(1,"\n            This field cannot be longer than 100 characters.\n          "),e.qZA())}function te(r,_){1&r&&(e.TgZ(0,"small",19),e._uU(1,"\n            This field is required to be at least 5 characters.\n          "),e.qZA())}function ne(r,_){1&r&&(e.TgZ(0,"small",19),e._uU(1," Your email is invalid. "),e.qZA())}function re(r,_){if(1&r&&(e.TgZ(0,"div"),e._uU(1,"\n          "),e.YNc(2,V,2,0,"small",18),e._uU(3,"\n\n          "),e.YNc(4,ee,2,0,"small",18),e._uU(5,"\n\n          "),e.YNc(6,te,2,0,"small",18),e._uU(7,"\n\n          "),e.YNc(8,ne,2,0,"small",18),e._uU(9,"\n        "),e.qZA()),2&r){const t=e.oxw();let o,g,T,b;e.xp6(2),e.Q6J("ngIf",null==(o=t.editForm.get("email"))||null==o.errors?null:o.errors.required),e.xp6(2),e.Q6J("ngIf",null==(g=t.editForm.get("email"))||null==g.errors?null:g.errors.maxlength),e.xp6(2),e.Q6J("ngIf",null==(T=t.editForm.get("email"))||null==T.errors?null:T.errors.minlength),e.xp6(2),e.Q6J("ngIf",null==(b=t.editForm.get("email"))||null==b.errors?null:b.errors.email)}}function oe(r,_){if(1&r&&(e.TgZ(0,"option",20),e._uU(1),e.qZA()),2&r){const t=_.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}const E={},ie={activated:!0};let O=(()=>{class r{constructor(t,o){this.userService=t,this.route=o,this.authorities=[],this.isSaving=!1,this.editForm=new l.cw({id:new l.NI(E.id),first_name:new l.NI(E.first_name,{validators:[l.kI.maxLength(50)]}),last_name:new l.NI(E.last_name,{validators:[l.kI.maxLength(50)]}),email:new l.NI(E.email,{nonNullable:!0,validators:[l.kI.minLength(5),l.kI.maxLength(254),l.kI.email]}),authorities:new l.NI(E.authorities,{nonNullable:!0})})}ngOnInit(){this.route.data.subscribe(({user:t})=>{this.editForm.reset(t||ie)}),this.userService.authorities().subscribe(t=>this.authorities=t)}previousState(){window.history.back()}save(){this.isSaving=!0;const t=this.editForm.getRawValue();null!==t.id?this.userService.update(t).subscribe({next:()=>this.onSaveSuccess(),error:()=>this.onSaveError()}):this.userService.create(t).subscribe({next:()=>this.onSaveSuccess(),error:()=>this.onSaveError()})}onSaveSuccess(){this.isSaving=!1,this.previousState()}onSaveError(){this.isSaving=!1}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(a),e.Y36(n.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["jhi-user-mgmt-update"]],decls:92,vars:7,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],["name","editForm","novalidate","","role","form",3,"formGroup","ngSubmit"],["id","myUserLabel"],[1,"mb-3",3,"hidden"],["formControlName","id","name","id","readonly","","type","text",1,"form-control"],[1,"mb-3"],[1,"form-label"],["formControlName","first_name","name","first_name","type","text",1,"form-control"],[4,"ngIf"],["formControlName","last_name","name","last_name","type","text",1,"form-control"],["formControlName","email","name","email","type","email",1,"form-control"],["formControlName","authorities","multiple","","name","authority",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-secondary",3,"click"],["icon","ban"],["type","submit",1,"btn","btn-primary",3,"disabled"],["icon","save"],["class","form-text text-danger",4,"ngIf"],[1,"form-text","text-danger"],[3,"value"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e._uU(1,"\n  "),e.TgZ(2,"div",1),e._uU(3,"\n    "),e.TgZ(4,"form",2),e.NdJ("ngSubmit",function(){return o.save()}),e._uU(5,"\n      "),e.TgZ(6,"h2",3),e._uU(7,"Create or edit a user"),e.qZA(),e._uU(8,"\n\n      "),e._UZ(9,"jhi-alert-error"),e._uU(10,"\n\n      "),e.TgZ(11,"div",4),e._uU(12,"\n        "),e.TgZ(13,"label"),e._uU(14,"ID"),e.qZA(),e._uU(15,"\n        "),e._UZ(16,"input",5),e._uU(17,"\n      "),e.qZA(),e._uU(18,"\n      "),e.TgZ(19,"div",6),e._uU(20,"\n        "),e.TgZ(21,"label",7),e._uU(22,"First name"),e.qZA(),e._uU(23,"\n        "),e._UZ(24,"input",8),e._uU(25,"\n\n        "),e.YNc(26,G,4,1,"div",9),e._uU(27,"\n      "),e.qZA(),e._uU(28,"\n\n      "),e.TgZ(29,"div",6),e._uU(30,"\n        "),e.TgZ(31,"label"),e._uU(32,"Last name"),e.qZA(),e._uU(33,"\n        "),e._UZ(34,"input",10),e._uU(35,"\n\n        "),e.YNc(36,X,4,1,"div",9),e._uU(37,"\n      "),e.qZA(),e._uU(38,"\n\n      "),e.TgZ(39,"div",6),e._uU(40,"\n        "),e.TgZ(41,"label",7),e._uU(42,"Email"),e.qZA(),e._uU(43,"\n        "),e._UZ(44,"input",11),e._uU(45,"\n\n        "),e.YNc(46,re,10,4,"div",9),e._uU(47,"\n      "),e.qZA(),e._uU(48,"\n\n      "),e._uU(49,"\n      "),e._uU(50,"\n      "),e._uU(51,"\n      "),e._uU(52,"\n      "),e._uU(53,"\n      "),e._uU(54,"\n      "),e._uU(55,"\n      "),e._uU(56,"\n      "),e._uU(57,"\n      "),e._uU(58,"\n      "),e._uU(59,"\n      "),e._uU(60,"\n      "),e._uU(61,"\n\n      "),e.TgZ(62,"div",6),e._uU(63,"\n        "),e.TgZ(64,"label"),e._uU(65,"Profiles"),e.qZA(),e._uU(66,"\n        "),e.TgZ(67,"select",12),e._uU(68,"\n          "),e.YNc(69,oe,2,2,"option",13),e._uU(70,"\n        "),e.qZA(),e._uU(71,"\n      "),e.qZA(),e._uU(72,"\n      "),e.TgZ(73,"button",14),e.NdJ("click",function(){return o.previousState()}),e._uU(74,"\n        "),e._UZ(75,"fa-icon",15),e._uU(76,"\xa0"),e.TgZ(77,"span"),e._uU(78,"Cancel"),e.qZA(),e._uU(79,"\n      "),e.qZA(),e._uU(80,"\n\n      "),e.TgZ(81,"button",16),e._uU(82,"\n        "),e._UZ(83,"fa-icon",17),e._uU(84,"\xa0"),e.TgZ(85,"span"),e._uU(86,"Save"),e.qZA(),e._uU(87,"\n      "),e.qZA(),e._uU(88,"\n    "),e.qZA(),e._uU(89,"\n  "),e.qZA(),e._uU(90,"\n"),e.qZA(),e._uU(91,"\n")),2&t&&(e.xp6(4),e.Q6J("formGroup",o.editForm),e.xp6(7),e.Q6J("hidden",!o.editForm.value.id),e.xp6(15),e.Q6J("ngIf",o.editForm.get("first_name").invalid&&(o.editForm.get("first_name").dirty||o.editForm.get("first_name").touched)),e.xp6(10),e.Q6J("ngIf",o.editForm.get("last_name").invalid&&(o.editForm.get("last_name").dirty||o.editForm.get("last_name").touched)),e.xp6(10),e.Q6J("ngIf",o.editForm.get("email").invalid&&(o.editForm.get("email").dirty||o.editForm.get("email").touched)),e.xp6(23),e.Q6J("ngForOf",o.authorities),e.xp6(12),e.Q6J("disabled",o.editForm.invalid||o.isSaving))},dependencies:[l._Y,l.YN,l.Kr,l.Fj,l.K7,l.JJ,l.JL,d.sg,d.O5,y.BN,l.sg,l.u,C.A],encapsulation:2}),r})(),D=(()=>{class r{constructor(t){this.service=t}resolve(t){const o=t.params.id;return o?this.service.find(o):(0,c.of)(null)}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(a))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();const se=[{path:"",component:K,data:{defaultSort:"id,asc"}},{path:":id/view",component:W,resolve:{user:D}},{path:"new",component:O,resolve:{user:D}},{path:":id/edit",component:O,resolve:{user:D}}];let ae=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[Z.m,n.Bz.forChild(se)]}),r})()},9586:(A,f,i)=>{i.d(f,{_l:()=>c,aW:()=>n,cy:()=>s,jo:()=>Z,s1:()=>p});const n="asc",Z="desc",c="sort",p="deleted",s="defaultSort"},4218:(A,f,i)=>{i.d(f,{K_:()=>n,gK:()=>c,ji:()=>Z});const n="X-Total-Count",Z="page",c=20},5929:(A,f,i)=>{i.d(f,{b:()=>Z});var n=i(529);const Z=c=>{let p=new n.LE;return c&&(Object.keys(c).forEach(s=>{if("sort"!==s&&c[s])for(const v of[].concat(c[s]).filter(e=>""!==e))p=p.append(s,v)}),c.sort&&c.sort.forEach(s=>{p=p.append("sort",s)})),p}},486:(A,f,i)=>{i.d(f,{A:()=>h});var n=i(4650),Z=i(4728),c=i(8821),p=i(6895),s=i(945);function v(U,u){if(1&U){const a=n.EpF();n.TgZ(0,"ngb-alert",4),n.NdJ("closed",function(){n.CHM(a);const l=n.oxw().$implicit,d=n.oxw();return n.KtG(d.close(l))}),n._uU(1,"\n      "),n.TgZ(2,"pre"),n._uU(3),n.qZA(),n._uU(4,"\n    "),n.qZA()}if(2&U){const a=n.oxw().$implicit;n.Q6J("type",a.type),n.xp6(3),n.Oqu(a.error)}}function e(U,u){if(1&U&&(n.TgZ(0,"div",2),n._uU(1,"\n    "),n.YNc(2,v,5,2,"ngb-alert",3),n._uU(3,"\n  "),n.qZA()),2&U){const a=u.$implicit,m=n.oxw();n.Q6J("ngClass",m.setClasses(a)),n.xp6(2),n.Q6J("ngIf",a.error)}}let h=(()=>{class U{constructor(a,m){this.alertService=a,this.eventManager=m,this.alerts=[],this.errorListener=m.subscribe("sddpLoggerFrontendApp.error",l=>{this.addErrorAlert(l.content.error)}),this.httpErrorListener=m.subscribe("sddpLoggerFrontendApp.httpError",l=>{const d=l.content;switch(d.status){case 0:this.addErrorAlert("Server not reachable");break;case 400:{const y=d.headers.keys();let C=null;for(const M of y)M.toLowerCase().endsWith("app-error")&&(C=d.headers.get(M));if(C)this.addErrorAlert(C);else if(""!==d.error&&d.error.fieldErrors){const M=d.error.fieldErrors;for(const x of M){["Min","Max","DecimalMin","DecimalMax"].includes(x.message)&&(x.message="Size");const q=x.field.replace(/\[\d*\]/g,"[]"),S=q.charAt(0).toUpperCase()+q.slice(1);this.addErrorAlert(`Error on field "${S}"`)}}else this.addErrorAlert(""!==d.error&&d.error.message?d.error.detail??d.error.message:d.error);break}case 404:this.addErrorAlert("Not found");break;default:this.addErrorAlert(""!==d.error&&d.error.message?d.error.detail??d.error.message:d.error)}})}setClasses(a){const m={"jhi-toast":Boolean(a.toast)};return a.position?{...m,[a.position]:!0}:m}ngOnDestroy(){this.eventManager.destroy(this.errorListener),this.eventManager.destroy(this.httpErrorListener)}close(a){a.close?.(this.alerts)}addErrorAlert(a){let m;m="string"==typeof a?a:a.error?a.error:JSON.stringify(a),this.alertService.addAlert({type:"danger",error:m},this.alerts)}}return U.\u0275fac=function(a){return new(a||U)(n.Y36(Z.c),n.Y36(c.Q))},U.\u0275cmp=n.Xpm({type:U,selectors:[["jhi-alert-error"]],decls:5,vars:1,consts:[["role","alert",1,"alerts"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[3,"type","closed",4,"ngIf"],[3,"type","closed"]],template:function(a,m){1&a&&(n.TgZ(0,"div",0),n._uU(1,"\n  "),n.YNc(2,e,4,2,"div",1),n._uU(3,"\n"),n.qZA(),n._uU(4,"\n")),2&a&&(n.xp6(2),n.Q6J("ngForOf",m.alerts))},dependencies:[p.mk,p.sg,p.O5,s.xm],encapsulation:2}),U})()},9003:(A,f,i)=>{i.d(f,{w:()=>e});var n=i(4650),Z=i(4728),c=i(6895),p=i(945);function s(h,U){if(1&h){const u=n.EpF();n.TgZ(0,"ngb-alert",4),n.NdJ("closed",function(){n.CHM(u);const m=n.oxw().$implicit,l=n.oxw();return n.KtG(l.close(m))}),n._uU(1,"\n      "),n._UZ(2,"pre",5),n._uU(3,"\n    "),n.qZA()}if(2&h){const u=n.oxw().$implicit;n.Q6J("type",u.type),n.xp6(2),n.Q6J("innerHTML",u.error,n.oJD)}}function v(h,U){if(1&h&&(n.TgZ(0,"div",2),n._uU(1,"\n    "),n.YNc(2,s,4,2,"ngb-alert",3),n._uU(3,"\n  "),n.qZA()),2&h){const u=U.$implicit,a=n.oxw();n.Q6J("ngClass",a.setClasses(u)),n.xp6(2),n.Q6J("ngIf",u.error)}}let e=(()=>{class h{constructor(u){this.alertService=u,this.alerts=[]}ngOnInit(){this.alerts=this.alertService.get()}setClasses(u){const a={"jhi-toast":Boolean(u.toast)};return u.position?{...a,[u.position]:!0}:a}ngOnDestroy(){this.alertService.clear()}close(u){u.close?.(this.alerts)}}return h.\u0275fac=function(u){return new(u||h)(n.Y36(Z.c))},h.\u0275cmp=n.Xpm({type:h,selectors:[["jhi-alert"]],decls:5,vars:1,consts:[["role","alert",1,"alerts"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[3,"type","closed",4,"ngIf"],[3,"type","closed"],[3,"innerHTML"]],template:function(u,a){1&u&&(n.TgZ(0,"div",0),n._uU(1,"\n  "),n.YNc(2,v,4,2,"div",1),n._uU(3,"\n"),n.qZA(),n._uU(4,"\n")),2&u&&(n.xp6(2),n.Q6J("ngForOf",a.alerts))},dependencies:[c.mk,c.sg,c.O5,p.xm],encapsulation:2}),h})()},8133:(A,f,i)=>{i.d(f,{N:()=>Z});var n=i(4650);let Z=(()=>{class c{set params(s){s.page&&void 0!==s.totalItems&&s.itemsPerPage?(this.first=(s.page-1)*s.itemsPerPage+1,this.second=s.page*s.itemsPerPage<s.totalItems?s.page*s.itemsPerPage:s.totalItems):(this.first=void 0,this.second=void 0),this.total=s.totalItems}}return c.\u0275fac=function(s){return new(s||c)},c.\u0275cmp=n.Xpm({type:c,selectors:[["jhi-item-count"]],inputs:{params:"params"},decls:4,vars:3,template:function(s,v){1&s&&(n._uU(0," "),n.TgZ(1,"div"),n._uU(2),n.qZA(),n._uU(3," ")),2&s&&(n.xp6(2),n.lnq("Showing ",v.first," - ",v.second," of ",v.total," items."))},encapsulation:2}),c})()},1408:(A,f,i)=>{i.d(f,{T:()=>e});var n=i(7579),Z=i(2722),c=i(2216),p=i(2687),s=i(4650),v=i(1427);let e=(()=>{class h{constructor(u){this.sort=u,this.sortIcon=p.CmM,this.sortAscIcon=p.foy,this.sortDescIcon=p.u9C,this.destroy$=new n.x,u.predicateChange.pipe((0,Z.R)(this.destroy$)).subscribe(()=>this.updateIconDefinition()),u.ascendingChange.pipe((0,Z.R)(this.destroy$)).subscribe(()=>this.updateIconDefinition())}onClick(){this.iconComponent&&this.sort.sort(this.jhiSortBy)}ngAfterContentInit(){this.updateIconDefinition()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}updateIconDefinition(){if(this.iconComponent){let u=this.sortIcon;this.sort.predicate===this.jhiSortBy&&(u=this.sort.ascending?this.sortAscIcon:this.sortDescIcon),this.iconComponent.icon=u.iconName,this.iconComponent.render()}}}return h.\u0275fac=function(u){return new(u||h)(s.Y36(v.b,1))},h.\u0275dir=s.lG2({type:h,selectors:[["","jhiSortBy",""]],contentQueries:function(u,a,m){if(1&u&&s.Suo(m,c.BN,5),2&u){let l;s.iGM(l=s.CRH())&&(a.iconComponent=l.first)}},hostBindings:function(u,a){1&u&&s.NdJ("click",function(){return a.onClick()})},inputs:{jhiSortBy:"jhiSortBy"}}),h})()},1427:(A,f,i)=>{i.d(f,{b:()=>Z});var n=i(4650);let Z=(()=>{class c{constructor(){this.predicateChange=new n.vpe,this.ascendingChange=new n.vpe,this.sortChange=new n.vpe}get predicate(){return this._predicate}set predicate(s){this._predicate=s,this.predicateChange.emit(s)}get ascending(){return this._ascending}set ascending(s){this._ascending=s,this.ascendingChange.emit(s)}sort(s){this.ascending=s!==this.predicate||!this.ascending,this.predicate=s,this.predicateChange.emit(s),this.ascendingChange.emit(this.ascending),this.sortChange.emit({predicate:this.predicate,ascending:this.ascending})}}return c.\u0275fac=function(s){return new(s||c)},c.\u0275dir=n.lG2({type:c,selectors:[["","jhiSort",""]],inputs:{predicate:"predicate",ascending:"ascending"},outputs:{predicateChange:"predicateChange",ascendingChange:"ascendingChange",sortChange:"sortChange"}}),c})()}}]);