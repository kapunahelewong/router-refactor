(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{jkDv:function(e,t,n){"use strict";n.r(t);var c=n("ofXK"),a=n("tyNb"),r=n("fXoL");const i=function(){return{exact:!0}};let s=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Db({type:e,selectors:[["app-admin"]],decls:10,vars:2,consts:[["routerLink","./","routerLinkActive","active",3,"routerLinkActiveOptions"],["routerLink","./clearance","routerLinkActive","active"],["routerLink","./items","routerLinkActive","active"]],template:function(e,t){1&e&&(r.Mb(0,"h3"),r.ic(1,"ADMIN"),r.Lb(),r.Mb(2,"nav"),r.Mb(3,"a",0),r.ic(4,"Dashboard"),r.Lb(),r.Mb(5,"a",1),r.ic(6,"Manage Clearance"),r.Lb(),r.Mb(7,"a",2),r.ic(8,"Manage Items"),r.Lb(),r.Lb(),r.Kb(9,"router-outlet")),2&e&&(r.zb(3),r.Zb("routerLinkActiveOptions",r.ac(1,i)))},directives:[a.e,a.d,a.g],styles:[""]}),e})();var o=n("lJxs"),b=n("/s+T");function p(e,t){if(1&e&&(r.Mb(0,"li"),r.ic(1),r.Lb()),2&e){const e=t.$implicit;r.zb(1),r.jc(e)}}let u=(()=>{class e{constructor(e,t){this.route=e,this.modules=t.preloadedModules}ngOnInit(){this.sessionId=this.route.queryParamMap.pipe(Object(o.a)(e=>e.get("session_id")||"None")),this.token=this.route.fragment.pipe(Object(o.a)(e=>e||"None"))}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(a.a),r.Jb(b.a))},e.\u0275cmp=r.Db({type:e,selectors:[["app-admin-dashboard"]],decls:12,vars:7,consts:[["id","anchor"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(r.Mb(0,"p"),r.ic(1,"Dashboard"),r.Lb(),r.Mb(2,"p"),r.ic(3),r.Xb(4,"async"),r.Lb(),r.Kb(5,"a",0),r.Mb(6,"p"),r.ic(7),r.Xb(8,"async"),r.Lb(),r.ic(9," Preloaded Modules\n"),r.Mb(10,"ul"),r.hc(11,p,2,1,"li",1),r.Lb()),2&e&&(r.zb(3),r.kc("Session ID: ",r.Yb(4,3,t.sessionId),""),r.zb(4),r.kc("Token: ",r.Yb(8,5,t.token),""),r.zb(4),r.Zb("ngForOf",t.modules))},directives:[c.i],pipes:[c.b],styles:[""]}),e})(),l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Db({type:e,selectors:[["app-manage-clearance"]],decls:2,vars:0,template:function(e,t){1&e&&(r.Mb(0,"p"),r.ic(1,"Manage clearance here"),r.Lb())},styles:[""]}),e})(),d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Db({type:e,selectors:[["app-manage-items"]],decls:2,vars:0,template:function(e,t){1&e&&(r.Mb(0,"p"),r.ic(1,"Manage items here"),r.Lb())},styles:[""]}),e})();var m=n("P+IX");const f=[{path:"",component:s,canActivate:[m.a],children:[{path:"",canActivateChild:[m.a],children:[{path:"clearance",component:l},{path:"items",component:d},{path:"",component:u}]}]}];let h=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[a.f.forChild(f)],a.f]}),e})();n.d(t,"AdminModule",(function(){return v}));let v=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[c.c,h]]}),e})()}}]);