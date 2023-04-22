"use strict";(self.webpackChunksddp_logger_frontend=self.webpackChunksddp_logger_frontend||[]).push([[950],{3950:(Ze,T,a)=>{a.r(T),a.d(T,{AlertEventModule:()=>fe});var I=a(9609),c=a(8996),g=a(8059),J=a(9300),E=a(3900),N=a(9841),y=a(8505),h=a(4218),p=a(9586),e=a(4650),D=a(6037),R=a(5929),j=a(529),Q=a(1082);let U=(()=>{class n{constructor(t,i){this.http=t,this.applicationConfigService=i,this.resourceUrl=this.applicationConfigService.getEndpointFor("api/alert-events")}create(t){return this.http.post(this.resourceUrl,t,{observe:"response"})}update(t){return this.http.put(`${this.resourceUrl}/${this.getAlertEventIdentifier(t)}`,t,{observe:"response"})}partialUpdate(t){return this.http.patch(`${this.resourceUrl}/${this.getAlertEventIdentifier(t)}`,t,{observe:"response"})}find(t){return this.http.get(`${this.resourceUrl}/${t}`,{observe:"response"})}query(t){const i=(0,R.b)(t);return this.http.get(this.resourceUrl,{params:i,observe:"response"})}delete(t){return this.http.delete(`${this.resourceUrl}/${t}`,{observe:"response"})}getAlertEventIdentifier(t){return t.id}compareAlertEvent(t,i){return t&&i?this.getAlertEventIdentifier(t)===this.getAlertEventIdentifier(i):t===i}addAlertEventToCollectionIfMissing(t,...i){const r=i.filter(D.E);if(r.length>0){const l=t.map(u=>this.getAlertEventIdentifier(u));return[...r.filter(u=>{const v=this.getAlertEventIdentifier(u);return!l.includes(v)&&(l.push(v),!0)}),...t]}return t}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(j.eN),e.LFG(Q.y))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var A=a(945),s=a(433),_=a(6895),m=a(2216),f=a(486);function B(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"form",1),e.NdJ("ngSubmit",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.confirmDelete(r.alertEvent.id))}),e._uU(1,"\n  "),e.TgZ(2,"div",2),e._uU(3,"\n    "),e.TgZ(4,"h4",3),e._uU(5,"Confirm delete operation"),e.qZA(),e._uU(6,"\n\n    "),e.TgZ(7,"button",4),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.cancel())}),e._uU(8,"\xd7"),e.qZA(),e._uU(9,"\n  "),e.qZA(),e._uU(10,"\n\n  "),e.TgZ(11,"div",5),e._uU(12,"\n    "),e._UZ(13,"jhi-alert-error"),e._uU(14,"\n    "),e.TgZ(15,"p",6),e._uU(16),e.qZA(),e._uU(17,"\n  "),e.qZA(),e._uU(18,"\n\n  "),e.TgZ(19,"div",7),e._uU(20,"\n    "),e.TgZ(21,"button",8),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.cancel())}),e._uU(22,"\n      "),e._UZ(23,"fa-icon",9),e._uU(24,"\xa0"),e.TgZ(25,"span"),e._uU(26,"Cancel"),e.qZA(),e._uU(27,"\n    "),e.qZA(),e._uU(28,"\n\n    "),e.TgZ(29,"button",10),e._uU(30,"\n      "),e._UZ(31,"fa-icon",11),e._uU(32,"\xa0"),e.TgZ(33,"span"),e._uU(34,"Delete"),e.qZA(),e._uU(35,"\n    "),e.qZA(),e._uU(36,"\n  "),e.qZA(),e._uU(37,"\n"),e.qZA()}if(2&n){const t=e.oxw();e.xp6(16),e.hij("Are you sure you want to delete Alert Event ",t.alertEvent.id,"?")}}let w=(()=>{class n{constructor(t,i){this.alertEventService=t,this.activeModal=i}cancel(){this.activeModal.dismiss()}confirmDelete(t){this.alertEventService.delete(t).subscribe(()=>{this.activeModal.close(p.s1)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(U),e.Y36(A.Kz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:2,vars:1,consts:[["name","deleteForm",3,"ngSubmit",4,"ngIf"],["name","deleteForm",3,"ngSubmit"],[1,"modal-header"],["data-cy","alertEventDeleteDialogHeading",1,"modal-title"],["aria-hidden","true","data-dismiss","modal","type","button",1,"btn-close",3,"click"],[1,"modal-body"],["id","jhi-delete-alertEvent-heading"],[1,"modal-footer"],["data-dismiss","modal","type","button",1,"btn","btn-secondary",3,"click"],["icon","ban"],["data-cy","entityConfirmDeleteButton","id","jhi-confirm-delete-alertEvent","type","submit",1,"btn","btn-danger"],["icon","times"]],template:function(t,i){1&t&&(e.YNc(0,B,38,1,"form",0),e._uU(1,"\n")),2&t&&e.Q6J("ngIf",i.alertEvent)},dependencies:[s._Y,s.JL,s.F,_.O5,m.BN,f.A],encapsulation:2}),n})();var M=a(9848),S=a(9003),Y=a(1408),L=a(1427),k=a(8133),O=a(924);function z(n,o){1&n&&(e.TgZ(0,"div",10),e._uU(1,"\n    "),e.TgZ(2,"span"),e._uU(3,"No Alert Events found"),e.qZA(),e._uU(4,"\n  "),e.qZA())}const P=function(n){return["/alert-subscriber",n,"view"]};function K(n,o){if(1&n&&(e.TgZ(0,"div"),e._uU(1,"\n              "),e.TgZ(2,"a",24),e._uU(3),e.qZA(),e._uU(4,"\n            "),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(2),e.Q6J("routerLink",e.VKq(2,P,t.alertSubscriber.id)),e.xp6(1),e.Oqu(t.alertSubscriber.name)}}const q=function(n){return["/alert-event",n,"view"]},V=function(n){return["/alert-event",n,"edit"]};function G(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"tr",23),e._uU(1,"\n          "),e.TgZ(2,"td"),e._uU(3,"\n            "),e.TgZ(4,"a",24),e._uU(5),e.qZA(),e._uU(6,"\n          "),e.qZA(),e._uU(7,"\n          "),e.TgZ(8,"td"),e._uU(9),e.qZA(),e._uU(10,"\n          "),e.TgZ(11,"td"),e._uU(12),e.qZA(),e._uU(13,"\n          "),e.TgZ(14,"td"),e._uU(15),e.qZA(),e._uU(16,"\n          "),e.TgZ(17,"td"),e._uU(18,"\n            "),e.YNc(19,K,5,4,"div",9),e._uU(20,"\n          "),e.qZA(),e._uU(21,"\n          "),e.TgZ(22,"td",25),e._uU(23,"\n            "),e.TgZ(24,"div",26),e._uU(25,"\n              "),e.TgZ(26,"button",27),e._uU(27,"\n                "),e._UZ(28,"fa-icon",28),e._uU(29,"\n                "),e.TgZ(30,"span",29),e._uU(31,"View"),e.qZA(),e._uU(32,"\n              "),e.qZA(),e._uU(33,"\n\n              "),e.TgZ(34,"button",30),e._uU(35,"\n                "),e._UZ(36,"fa-icon",31),e._uU(37,"\n                "),e.TgZ(38,"span",29),e._uU(39,"Edit"),e.qZA(),e._uU(40,"\n              "),e.qZA(),e._uU(41,"\n\n              "),e.TgZ(42,"button",32),e.NdJ("click",function(){const l=e.CHM(t).$implicit,d=e.oxw(2);return e.KtG(d.delete(l))}),e._uU(43,"\n                "),e._UZ(44,"fa-icon",33),e._uU(45,"\n                "),e.TgZ(46,"span",29),e._uU(47,"Delete"),e.qZA(),e._uU(48,"\n              "),e.qZA(),e._uU(49,"\n            "),e.qZA(),e._uU(50,"\n          "),e.qZA(),e._uU(51,"\n        "),e.qZA()}if(2&n){const t=o.$implicit;e.xp6(4),e.Q6J("routerLink",e.VKq(8,q,t.id)),e.xp6(1),e.Oqu(t.id),e.xp6(4),e.Oqu(t.code),e.xp6(3),e.Oqu(t.application_code),e.xp6(3),e.Oqu(t.is_sent),e.xp6(4),e.Q6J("ngIf",t.alertSubscriber),e.xp6(7),e.Q6J("routerLink",e.VKq(10,q,t.id)),e.xp6(8),e.Q6J("routerLink",e.VKq(12,V,t.id))}}function H(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",11),e._uU(1,"\n    "),e.TgZ(2,"table",12),e._uU(3,"\n      "),e.TgZ(4,"thead"),e._uU(5,"\n        "),e.TgZ(6,"tr",13),e.NdJ("sortChange",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.navigateToWithComponentValues())})("ascendingChange",function(r){e.CHM(t);const l=e.oxw();return e.KtG(l.ascending=r)})("predicateChange",function(r){e.CHM(t);const l=e.oxw();return e.KtG(l.predicate=r)}),e._uU(7,"\n          "),e.TgZ(8,"th",14),e._uU(9,"\n            "),e.TgZ(10,"div",15),e._uU(11,"\n              "),e.TgZ(12,"span"),e._uU(13,"ID"),e.qZA(),e._uU(14,"\n              "),e._UZ(15,"fa-icon",16),e._uU(16,"\n            "),e.qZA(),e._uU(17,"\n          "),e.qZA(),e._uU(18,"\n          "),e.TgZ(19,"th",17),e._uU(20,"\n            "),e.TgZ(21,"div",15),e._uU(22,"\n              "),e.TgZ(23,"span"),e._uU(24,"Code"),e.qZA(),e._uU(25,"\n              "),e._UZ(26,"fa-icon",16),e._uU(27,"\n            "),e.qZA(),e._uU(28,"\n          "),e.qZA(),e._uU(29,"\n          "),e.TgZ(30,"th",18),e._uU(31,"\n            "),e.TgZ(32,"div",15),e._uU(33,"\n              "),e.TgZ(34,"span"),e._uU(35,"Application Code"),e.qZA(),e._uU(36,"\n              "),e._UZ(37,"fa-icon",16),e._uU(38,"\n            "),e.qZA(),e._uU(39,"\n          "),e.qZA(),e._uU(40,"\n          "),e.TgZ(41,"th",19),e._uU(42,"\n            "),e.TgZ(43,"div",15),e._uU(44,"\n              "),e.TgZ(45,"span"),e._uU(46,"Is Sent"),e.qZA(),e._uU(47,"\n              "),e._UZ(48,"fa-icon",16),e._uU(49,"\n            "),e.qZA(),e._uU(50,"\n          "),e.qZA(),e._uU(51,"\n          "),e.TgZ(52,"th",20),e._uU(53,"\n            "),e.TgZ(54,"div",15),e._uU(55,"\n              "),e.TgZ(56,"span"),e._uU(57,"Alert Subscriber"),e.qZA(),e._uU(58,"\n              "),e._UZ(59,"fa-icon",16),e._uU(60,"\n            "),e.qZA(),e._uU(61,"\n          "),e.qZA(),e._uU(62,"\n          "),e._UZ(63,"th",21),e._uU(64,"\n        "),e.qZA(),e._uU(65,"\n      "),e.qZA(),e._uU(66,"\n      "),e.TgZ(67,"tbody"),e._uU(68,"\n        "),e.YNc(69,G,52,14,"tr",22),e._uU(70,"\n      "),e.qZA(),e._uU(71,"\n    "),e.qZA(),e._uU(72,"\n  "),e.qZA()}if(2&n){const t=e.oxw();e.xp6(6),e.Q6J("ascending",t.ascending)("predicate",t.predicate),e.xp6(63),e.Q6J("ngForOf",t.alertEvents)("ngForTrackBy",t.trackId)}}const $=function(n,o,t){return{page:n,totalItems:o,itemsPerPage:t}};function W(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e._uU(1,"\n    "),e.TgZ(2,"div",34),e._uU(3,"\n      "),e._UZ(4,"jhi-item-count",35),e._uU(5,"\n    "),e.qZA(),e._uU(6,"\n\n    "),e.TgZ(7,"div",34),e._uU(8,"\n      "),e.TgZ(9,"ngb-pagination",36),e.NdJ("pageChange",function(r){e.CHM(t);const l=e.oxw();return e.KtG(l.navigateToPage(r))}),e.qZA(),e._uU(10,"\n    "),e.qZA(),e._uU(11,"\n  "),e.qZA()}if(2&n){const t=e.oxw();e.xp6(4),e.Q6J("params",e.kEZ(7,$,t.page,t.totalItems,t.itemsPerPage)),e.xp6(5),e.Q6J("boundaryLinks",!0)("collectionSize",t.totalItems)("maxSize",5)("pageSize",t.itemsPerPage)("page",t.page)("rotate",!0)}}const X=function(){return["/alert-event/new"]};let ee=(()=>{class n{constructor(t,i,r,l){this.alertEventService=t,this.activatedRoute=i,this.router=r,this.modalService=l,this.isLoading=!1,this.predicate="id",this.ascending=!0,this.filters=new M.j,this.itemsPerPage=h.gK,this.totalItems=0,this.page=0,this.trackId=(d,u)=>this.alertEventService.getAlertEventIdentifier(u)}ngOnInit(){this.load(),this.filters.filterChanges.subscribe(t=>this.handleNavigation(1,this.predicate,this.ascending,t))}delete(t){const i=this.modalService.open(w,{size:"lg",backdrop:"static"});i.componentInstance.alertEvent=t,i.closed.pipe((0,J.h)(r=>r===p.s1),(0,E.w)(()=>this.loadFromBackendWithRouteInformations())).subscribe({next:r=>{this.onResponseSuccess(r)}})}load(){this.loadFromBackendWithRouteInformations().subscribe({next:t=>{this.onResponseSuccess(t)}})}navigateToWithComponentValues(){this.handleNavigation(this.page,this.predicate,this.ascending,this.filters.filterOptions)}navigateToPage(t=this.page){this.handleNavigation(t,this.predicate,this.ascending,this.filters.filterOptions)}loadFromBackendWithRouteInformations(){return(0,N.a)([this.activatedRoute.queryParamMap,this.activatedRoute.data]).pipe((0,y.b)(([t,i])=>this.fillComponentAttributeFromRoute(t,i)),(0,E.w)(()=>this.queryBackend(this.page,this.predicate,this.ascending,this.filters.filterOptions)))}fillComponentAttributeFromRoute(t,i){const r=t.get(h.ji);this.page=+(r??0);const l=(t.get(p._l)??i[p.cy]).split(",");this.predicate=l[0],this.ascending=l[1]===p.aW,this.filters.initializeFromParams(t)}onResponseSuccess(t){this.fillComponentAttributesFromResponseHeader(t.headers);const i=this.fillComponentAttributesFromResponseBody(t.body);this.alertEvents=i}fillComponentAttributesFromResponseBody(t){return t??[]}fillComponentAttributesFromResponseHeader(t){this.totalItems=Number(t.get(h.K_))}queryBackend(t,i,r,l){this.isLoading=!0;const u={page:t??0,size:this.itemsPerPage,eagerload:!0,sort:this.getSortQueryParam(i,r)};return l?.forEach(v=>{u[v.name]=v.values}),this.alertEventService.query(u).pipe((0,y.b)(()=>this.isLoading=!1))}handleNavigation(t=this.page,i,r,l){const d={page:t,size:this.itemsPerPage,sort:this.getSortQueryParam(i,r)};l?.forEach(u=>{d[u.nameAsQueryParam()]=u.values}),this.router.navigate(["./"],{relativeTo:this.activatedRoute,queryParams:d})}getSortQueryParam(t=this.predicate,i=this.ascending){return""===t?[]:[t+","+(i?p.aW:p.jo)]}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(U),e.Y36(c.gz),e.Y36(c.F0),e.Y36(A.FF))},n.\u0275cmp=e.Xpm({type:n,selectors:[["jhi-alert-event"]],decls:40,vars:8,consts:[["data-cy","AlertEventHeading","id","page-heading"],[1,"d-flex","justify-content-end"],[1,"btn","btn-info","me-2",3,"disabled","click"],["icon","sync",3,"spin"],["data-cy","entityCreateButton","id","jh-create-entity",1,"btn","btn-primary","jh-create-entity","create-alert-event",3,"routerLink"],["icon","plus"],[3,"filters"],["class","alert alert-warning","id","no-result",4,"ngIf"],["class","table-responsive table-entities","id","entities",4,"ngIf"],[4,"ngIf"],["id","no-result",1,"alert","alert-warning"],["id","entities",1,"table-responsive","table-entities"],["aria-describedby","page-heading",1,"table","table-striped"],["jhiSort","",3,"ascending","predicate","sortChange","ascendingChange","predicateChange"],["jhiSortBy","id","scope","col"],[1,"d-flex"],["icon","sort",1,"p-1"],["jhiSortBy","code","scope","col"],["jhiSortBy","application_code","scope","col"],["jhiSortBy","is_sent","scope","col"],["jhiSortBy","alertSubscriber.name","scope","col"],["scope","col"],["data-cy","entityTable",4,"ngFor","ngForOf","ngForTrackBy"],["data-cy","entityTable"],[3,"routerLink"],[1,"text-end"],[1,"btn-group"],["data-cy","entityDetailsButton","type","submit",1,"btn","btn-info","btn-sm",3,"routerLink"],["icon","eye"],[1,"d-none","d-md-inline"],["data-cy","entityEditButton","type","submit",1,"btn","btn-primary","btn-sm",3,"routerLink"],["icon","pencil-alt"],["data-cy","entityDeleteButton","type","submit",1,"btn","btn-danger","btn-sm",3,"click"],["icon","times"],[1,"d-flex","justify-content-center"],[3,"params"],[3,"boundaryLinks","collectionSize","maxSize","pageSize","page","rotate","pageChange"]],template:function(t,i){1&t&&(e.TgZ(0,"div"),e._uU(1,"\n  "),e.TgZ(2,"h2",0),e._uU(3,"\n    "),e.TgZ(4,"span"),e._uU(5,"Alert Events"),e.qZA(),e._uU(6,"\n\n    "),e.TgZ(7,"div",1),e._uU(8,"\n      "),e.TgZ(9,"button",2),e.NdJ("click",function(){return i.load()}),e._uU(10,"\n        "),e._UZ(11,"fa-icon",3),e._uU(12,"\n        "),e.TgZ(13,"span"),e._uU(14,"Refresh list"),e.qZA(),e._uU(15,"\n      "),e.qZA(),e._uU(16,"\n\n      "),e.TgZ(17,"button",4),e._uU(18,"\n        "),e._UZ(19,"fa-icon",5),e._uU(20,"\n        "),e.TgZ(21,"span"),e._uU(22," Create a new Alert Event "),e.qZA(),e._uU(23,"\n      "),e.qZA(),e._uU(24,"\n    "),e.qZA(),e._uU(25,"\n  "),e.qZA(),e._uU(26,"\n\n  "),e._UZ(27,"jhi-alert-error"),e._uU(28,"\n\n  "),e._UZ(29,"jhi-alert"),e._uU(30,"\n\n  "),e._UZ(31,"jhi-filter",6),e._uU(32,"\n\n  "),e.YNc(33,z,5,0,"div",7),e._uU(34,"\n\n  "),e.YNc(35,H,73,4,"div",8),e._uU(36,"\n\n  "),e.YNc(37,W,12,11,"div",9),e._uU(38,"\n"),e.qZA(),e._uU(39,"\n")),2&t&&(e.xp6(9),e.Q6J("disabled",i.isLoading),e.xp6(2),e.Q6J("spin",i.isLoading),e.xp6(6),e.Q6J("routerLink",e.DdM(7,X)),e.xp6(14),e.Q6J("filters",i.filters),e.xp6(2),e.Q6J("ngIf",0===(null==i.alertEvents?null:i.alertEvents.length)),e.xp6(2),e.Q6J("ngIf",i.alertEvents&&i.alertEvents.length>0),e.xp6(2),e.Q6J("ngIf",i.alertEvents&&i.alertEvents.length>0))},dependencies:[_.sg,_.O5,A.N9,m.BN,S.w,f.A,Y.T,L.b,k.N,O.z,c.rH,c.yS],encapsulation:2}),n})();const te=function(n){return["/alert-subscriber",n,"view"]};function ne(n,o){if(1&n&&(e.TgZ(0,"div"),e._uU(1,"\n            "),e.TgZ(2,"a",9),e._uU(3),e.qZA(),e._uU(4,"\n          "),e.qZA()),2&n){const t=e.oxw(2);e.xp6(2),e.Q6J("routerLink",e.VKq(2,te,t.alertEvent.alertSubscriber.id)),e.xp6(1),e.Oqu(t.alertEvent.alertSubscriber.name)}}const ie=function(n){return["/alert-event",n,"edit"]};function re(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e._uU(1,"\n      "),e.TgZ(2,"h2",3)(3,"span"),e._uU(4,"Alert Event"),e.qZA()(),e._uU(5,"\n\n      "),e._UZ(6,"hr"),e._uU(7,"\n\n      "),e._UZ(8,"jhi-alert-error"),e._uU(9,"\n\n      "),e._UZ(10,"jhi-alert"),e._uU(11,"\n\n      "),e.TgZ(12,"dl",4),e._uU(13,"\n        "),e.TgZ(14,"dt")(15,"span"),e._uU(16,"ID"),e.qZA()(),e._uU(17,"\n        "),e.TgZ(18,"dd"),e._uU(19,"\n          "),e.TgZ(20,"span"),e._uU(21),e.qZA(),e._uU(22,"\n        "),e.qZA(),e._uU(23,"\n        "),e.TgZ(24,"dt")(25,"span"),e._uU(26,"Code"),e.qZA()(),e._uU(27,"\n        "),e.TgZ(28,"dd"),e._uU(29,"\n          "),e.TgZ(30,"span"),e._uU(31),e.qZA(),e._uU(32,"\n        "),e.qZA(),e._uU(33,"\n        "),e.TgZ(34,"dt")(35,"span"),e._uU(36,"Application Code"),e.qZA()(),e._uU(37,"\n        "),e.TgZ(38,"dd"),e._uU(39,"\n          "),e.TgZ(40,"span"),e._uU(41),e.qZA(),e._uU(42,"\n        "),e.qZA(),e._uU(43,"\n        "),e.TgZ(44,"dt")(45,"span"),e._uU(46,"Is Sent"),e.qZA()(),e._uU(47,"\n        "),e.TgZ(48,"dd"),e._uU(49,"\n          "),e.TgZ(50,"span"),e._uU(51),e.qZA(),e._uU(52,"\n        "),e.qZA(),e._uU(53,"\n        "),e.TgZ(54,"dt")(55,"span"),e._uU(56,"Alert Subscriber"),e.qZA()(),e._uU(57,"\n        "),e.TgZ(58,"dd"),e._uU(59,"\n          "),e.YNc(60,ne,5,4,"div",2),e._uU(61,"\n        "),e.qZA(),e._uU(62,"\n      "),e.qZA(),e._uU(63,"\n\n      "),e.TgZ(64,"button",5),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.previousState())}),e._uU(65,"\n        "),e._UZ(66,"fa-icon",6),e._uU(67,"\xa0"),e.TgZ(68,"span"),e._uU(69,"Back"),e.qZA(),e._uU(70,"\n      "),e.qZA(),e._uU(71,"\n\n      "),e.TgZ(72,"button",7),e._uU(73,"\n        "),e._UZ(74,"fa-icon",8),e._uU(75,"\xa0"),e.TgZ(76,"span"),e._uU(77,"Edit"),e.qZA(),e._uU(78,"\n      "),e.qZA(),e._uU(79,"\n    "),e.qZA()}if(2&n){const t=e.oxw();e.xp6(21),e.Oqu(t.alertEvent.id),e.xp6(10),e.Oqu(t.alertEvent.code),e.xp6(10),e.Oqu(t.alertEvent.application_code),e.xp6(10),e.Oqu(t.alertEvent.is_sent),e.xp6(9),e.Q6J("ngIf",t.alertEvent.alertSubscriber),e.xp6(12),e.Q6J("routerLink",e.VKq(6,ie,t.alertEvent.id))}}let oe=(()=>{class n{constructor(t){this.activatedRoute=t,this.alertEvent=null}ngOnInit(){this.activatedRoute.data.subscribe(({alertEvent:t})=>{this.alertEvent=t})}previousState(){window.history.back()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["jhi-alert-event-detail"]],decls:8,vars:1,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],[4,"ngIf"],["data-cy","alertEventDetailsHeading"],[1,"row-md","jh-entity-details"],["data-cy","entityDetailsBackButton","type","submit",1,"btn","btn-info",3,"click"],["icon","arrow-left"],["type","button",1,"btn","btn-primary",3,"routerLink"],["icon","pencil-alt"],[3,"routerLink"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._uU(1,"\n  "),e.TgZ(2,"div",1),e._uU(3,"\n    "),e.YNc(4,re,80,8,"div",2),e._uU(5,"\n  "),e.qZA(),e._uU(6,"\n"),e.qZA(),e._uU(7,"\n")),2&t&&(e.xp6(4),e.Q6J("ngIf",i.alertEvent))},dependencies:[_.O5,m.BN,S.w,f.A,c.rH,c.yS],encapsulation:2}),n})();var ae=a(8746),C=a(4004);let se=(()=>{class n{createAlertEventFormGroup(t={id:null}){const i={...this.getFormDefaults(),...t};return new s.cw({id:new s.NI({value:i.id,disabled:!0},{nonNullable:!0,validators:[s.kI.required]}),code:new s.NI(i.code),application_code:new s.NI(i.application_code),is_sent:new s.NI(i.is_sent),alertSubscriber:new s.NI(i.alertSubscriber,{validators:[s.kI.required]})})}getAlertEvent(t){return t.getRawValue()}resetForm(t,i){const r={...this.getFormDefaults(),...i};t.reset({...r,id:{value:r.id,disabled:!0}})}getFormDefaults(){return{id:null,is_sent:!1}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var le=a(8594);function ue(n,o){1&n&&(e.TgZ(0,"div",5),e._uU(1,"\n          "),e.TgZ(2,"label",21),e._uU(3,"ID"),e.qZA(),e._uU(4,"\n          "),e._UZ(5,"input",22),e._uU(6,"\n        "),e.qZA()),2&n&&(e.xp6(5),e.Q6J("readonly",!0))}function ce(n,o){1&n&&e._UZ(0,"option",23),2&n&&e.Q6J("ngValue",null)}function de(n,o){if(1&n&&(e.TgZ(0,"option",24),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("ngValue",t),e.xp6(1),e.hij("\n              ",t.name,"\n            ")}}function pe(n,o){1&n&&(e.TgZ(0,"small",26),e._uU(1," This field is required. "),e.qZA())}const Z=function(){return["alertSubscriber"]};function _e(n,o){if(1&n&&(e.TgZ(0,"div"),e._uU(1,"\n          "),e.YNc(2,pe,2,0,"small",25),e._uU(3,"\n        "),e.qZA()),2&n){const t=e.oxw();let i;e.xp6(2),e.Q6J("ngIf",null==(i=t.editForm.get(e.DdM(1,Z)))||null==i.errors?null:i.errors.required)}}let x=(()=>{class n{constructor(t,i,r,l){this.alertEventService=t,this.alertEventFormService=i,this.alert_subscriberservice=r,this.activatedRoute=l,this.isSaving=!1,this.alertEvent=null,this.alert_subscribersSharedCollection=[],this.editForm=this.alertEventFormService.createAlertEventFormGroup(),this.compareAlertSubscriber=(d,u)=>this.alert_subscriberservice.compareAlertSubscriber(d,u)}ngOnInit(){this.activatedRoute.data.subscribe(({alertEvent:t})=>{this.alertEvent=t,t&&this.updateForm(t),this.loadRelationshipsOptions()})}previousState(){window.history.back()}save(){this.isSaving=!0;const t=this.alertEventFormService.getAlertEvent(this.editForm);this.subscribeToSaveResponse(null!==t.id?this.alertEventService.update(t):this.alertEventService.create(t))}subscribeToSaveResponse(t){t.pipe((0,ae.x)(()=>this.onSaveFinalize())).subscribe({next:()=>this.onSaveSuccess(),error:()=>this.onSaveError()})}onSaveSuccess(){this.previousState()}onSaveError(){}onSaveFinalize(){this.isSaving=!1}updateForm(t){this.alertEvent=t,this.alertEventFormService.resetForm(this.editForm,t),this.alert_subscribersSharedCollection=this.alert_subscriberservice.addAlertSubscriberToCollectionIfMissing(this.alert_subscribersSharedCollection,t.alertSubscriber)}loadRelationshipsOptions(){this.alert_subscriberservice.query().pipe((0,C.U)(t=>t.body??[])).pipe((0,C.U)(t=>this.alert_subscriberservice.addAlertSubscriberToCollectionIfMissing(t,this.alertEvent?.alertSubscriber))).subscribe(t=>this.alert_subscribersSharedCollection=t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(U),e.Y36(se),e.Y36(le.N),e.Y36(c.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["jhi-alert-event-update"]],decls:77,vars:10,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],["name","editForm","novalidate","","role","form",3,"formGroup","ngSubmit"],["data-cy","AlertEventCreateUpdateHeading","id","jhi-alert-event-heading"],["class","row mb-3",4,"ngIf"],[1,"row","mb-3"],["for","field_code",1,"form-label"],["data-cy","code","formControlName","code","id","field_code","name","code","type","text",1,"form-control"],["for","field_application_code",1,"form-label"],["data-cy","application_code","formControlName","application_code","id","field_application_code","name","application_code","type","text",1,"form-control"],["for","field_is_sent",1,"form-label"],["data-cy","is_sent","formControlName","is_sent","id","field_is_sent","name","is_sent","type","checkbox",1,"form-check"],["for","field_alertSubscriber",1,"form-label"],["data-cy","alertSubscriber","formControlName","alertSubscriber","id","field_alertSubscriber","name","alertSubscriber",1,"form-control",3,"compareWith"],["selected","",3,"ngValue",4,"ngIf"],[3,"ngValue",4,"ngFor","ngForOf"],[4,"ngIf"],["data-cy","entityCreateCancelButton","id","cancel-save","type","button",1,"btn","btn-secondary",3,"click"],["icon","ban"],["data-cy","entityCreateSaveButton","id","save-entity","type","submit",1,"btn","btn-primary",3,"disabled"],["icon","save"],["for","field_id",1,"form-label"],["data-cy","id","formControlName","id","id","field_id","name","id","type","number",1,"form-control",3,"readonly"],["selected","",3,"ngValue"],[3,"ngValue"],["class","form-text text-danger",4,"ngIf"],[1,"form-text","text-danger"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._uU(1,"\n  "),e.TgZ(2,"div",1),e._uU(3,"\n    "),e.TgZ(4,"form",2),e.NdJ("ngSubmit",function(){return i.save()}),e._uU(5,"\n      "),e.TgZ(6,"h2",3),e._uU(7,"Create or edit a Alert Event"),e.qZA(),e._uU(8,"\n\n      "),e.TgZ(9,"div"),e._uU(10,"\n        "),e._UZ(11,"jhi-alert-error"),e._uU(12,"\n\n        "),e.YNc(13,ue,7,1,"div",4),e._uU(14,"\n\n        "),e.TgZ(15,"div",5),e._uU(16,"\n          "),e.TgZ(17,"label",6),e._uU(18,"Code"),e.qZA(),e._uU(19,"\n          "),e._UZ(20,"input",7),e._uU(21,"\n        "),e.qZA(),e._uU(22,"\n\n        "),e.TgZ(23,"div",5),e._uU(24,"\n          "),e.TgZ(25,"label",8),e._uU(26,"Application Code"),e.qZA(),e._uU(27,"\n          "),e._UZ(28,"input",9),e._uU(29,"\n        "),e.qZA(),e._uU(30,"\n\n        "),e.TgZ(31,"div",5),e._uU(32,"\n          "),e.TgZ(33,"label",10),e._uU(34,"Is Sent"),e.qZA(),e._uU(35,"\n          "),e._UZ(36,"input",11),e._uU(37,"\n        "),e.qZA(),e._uU(38,"\n\n        "),e.TgZ(39,"div",5),e._uU(40,"\n          "),e.TgZ(41,"label",12),e._uU(42,"Alert Subscriber"),e.qZA(),e._uU(43,"\n          "),e.TgZ(44,"select",13),e._uU(45,"\n            "),e.YNc(46,ce,1,1,"option",14),e._uU(47,"\n            "),e.YNc(48,de,2,2,"option",15),e._uU(49,"\n          "),e.qZA(),e._uU(50,"\n        "),e.qZA(),e._uU(51,"\n        "),e.YNc(52,_e,4,2,"div",16),e._uU(53,"\n      "),e.qZA(),e._uU(54,"\n\n      "),e.TgZ(55,"div"),e._uU(56,"\n        "),e.TgZ(57,"button",17),e.NdJ("click",function(){return i.previousState()}),e._uU(58,"\n          "),e._UZ(59,"fa-icon",18),e._uU(60,"\xa0"),e.TgZ(61,"span"),e._uU(62,"Cancel"),e.qZA(),e._uU(63,"\n        "),e.qZA(),e._uU(64,"\n\n        "),e.TgZ(65,"button",19),e._uU(66,"\n          "),e._UZ(67,"fa-icon",20),e._uU(68,"\xa0"),e.TgZ(69,"span"),e._uU(70,"Save"),e.qZA(),e._uU(71,"\n        "),e.qZA(),e._uU(72,"\n      "),e.qZA(),e._uU(73,"\n    "),e.qZA(),e._uU(74,"\n  "),e.qZA(),e._uU(75,"\n"),e.qZA(),e._uU(76,"\n")),2&t&&(e.xp6(4),e.Q6J("formGroup",i.editForm),e.xp6(9),e.Q6J("ngIf",null!==i.editForm.controls.id.value),e.xp6(31),e.Q6J("compareWith",i.compareAlertSubscriber),e.xp6(2),e.Q6J("ngIf",!i.editForm.get("alertSubscriber").value),e.xp6(2),e.Q6J("ngForOf",i.alert_subscribersSharedCollection),e.xp6(4),e.Q6J("ngIf",i.editForm.get(e.DdM(7,Z)).invalid&&(i.editForm.get(e.DdM(8,Z)).dirty||i.editForm.get(e.DdM(9,Z)).touched)),e.xp6(13),e.Q6J("disabled",i.editForm.invalid||i.isSaving))},dependencies:[s._Y,s.YN,s.Kr,s.Fj,s.wV,s.Wl,s.EJ,s.JJ,s.JL,_.sg,_.O5,m.BN,s.sg,s.u,f.A],encapsulation:2}),n})();var F=a(9646),ve=a(515),ge=a(5577);let b=(()=>{class n{constructor(t,i){this.service=t,this.router=i}resolve(t){const i=t.params.id;return i?this.service.find(i).pipe((0,ge.z)(r=>r.body?(0,F.of)(r.body):(this.router.navigate(["404"]),ve.E))):(0,F.of)(null)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(U),e.LFG(c.F0))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ue=[{path:"",component:ee,data:{defaultSort:"id,"+p.aW},canActivate:[g.Z]},{path:":id/view",component:oe,resolve:{alertEvent:b},canActivate:[g.Z]},{path:"new",component:x,resolve:{alertEvent:b},canActivate:[g.Z]},{path:":id/edit",component:x,resolve:{alertEvent:b},canActivate:[g.Z]}];let me=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.Bz.forChild(Ue),c.Bz]}),n})(),fe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[I.m,me]}),n})()}}]);