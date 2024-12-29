"use strict";(self.webpackChunkhealthy=self.webpackChunkhealthy||[]).push([[878],{2528:(O,f,o)=>{o.d(f,{n:()=>p});class p{constructor(e="",u="",b="",d="",m="",v="",h="",i="",t="",r=""){this.initials="",this.email=e,this.role=u,this.first_name=b,this.last_name=d,this.id=m,this.fullName=`${b} ${d}`,b&&d&&(this.initials=`${b.charAt(0)}${d.charAt(0)}`),this.customer_address=v,this.customer_phone=h,this.customer_prefrences=i,this.token=t,this.password=r}}},5852:(O,f,o)=>{o.d(f,{J:()=>e});var p=o(5619),s=o(9212);let e=(()=>{class u{constructor(){this.NavbarVisibleSubject=new p.X(!1),this.isVisible=!1}toggleNavbar(){this.isVisible=!this.isVisible,this.NavbarVisibleSubject.next(this.isVisible)}setNavbarVisible(d){this.isVisible=d,this.NavbarVisibleSubject.next(this.isVisible)}static#e=this.\u0275fac=function(m){return new(m||u)};static#t=this.\u0275prov=s.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()},1132:(O,f,o)=>{o.d(f,{s:()=>m});var p=o(1474),s=o(5619),e=o(553),u=o(9212),b=o(77),d=o(649);let m=(()=>{class v{constructor(i,t,r){this.http=i,this.toasterDisplayService=t,this.router=r,this.productsSubject=new s.X([]),this.cartSubject=new s.X([]),this.categoriesSubject=new s.X([]),this.ordersSubject=new s.X([])}getCartItems(){const i=localStorage.getItem("cartItems");i&&this.cartSubject.next(JSON.parse(i))}addToCart(i){const t=this.cartSubject.getValue().find(r=>r.product_code===i.product_code);t?.quantity?(t.quantity+=1,this.cartSubject.next(this.cartSubject.getValue())):(i.quantity=1,this.cartSubject.next([...this.cartSubject.getValue(),i])),this.saveCartToLocalStorage()}removeFromCart(i){const t=this.cartSubject.getValue(),r=t.findIndex(n=>n.product_code===i.product_code);if(-1!==r){const n=t[r];n.quantity&&n.quantity>1?n.quantity-=1:t.splice(r,1),this.cartSubject.next(t),this.saveCartToLocalStorage()}}saveCartToLocalStorage(){const i=this.cartSubject.getValue();localStorage.setItem("cartItems",JSON.stringify(i))}getProducts(){this.http.get(e.N.serviceBase+"category?page=1").subscribe(i=>{let t=i.data;t.forEach(r=>{r.items.forEach(n=>{n.category=r.category})}),this.productsSubject.next(t)})}deleteProduct(i){let r=JSON.parse(localStorage.getItem("currentUser")||"").token;const n=(new p.WM).set("Authorization",`Bearer ${r}`);this.http.delete(e.N.serviceBase+`admin/product/${i.product_code}`,{headers:n}).subscribe({next:c=>{this.getProducts()},complete:()=>this.toasterDisplayService.showSuccess("Product Deleted Successfully")})}saveProduct(i,t,r){let c=JSON.parse(localStorage.getItem("currentUser")||"").token;const a=(new p.WM).set("Authorization",`Bearer ${c}`);if(console.log(i.get("product_code")),i.get("product_code")>0){const x=e.N.serviceBase+`admin/product/${i.get("product_code")}/update`;this.updateProduct(i,t,r,a,x)}else this.storeProduct(i,t,r,a,e.N.serviceBase+"admin/product")}storeProduct(i,t,r,n,c){this.http.post(c,i,{headers:n}).subscribe({next:a=>{this.getProducts(),t.close(a)},complete:()=>{this.toasterDisplayService.showSuccess("Product Saved Successfully"),r.isSaving=!1},error:a=>{console.error("Error storing product",a),this.toasterDisplayService.showError(a),r.isSaving=!1}})}updateProduct(i,t,r,n,c){this.http.post(c,i,{headers:n}).subscribe({next:a=>{this.getProducts(),t.close(a)},complete:()=>{this.toasterDisplayService.showSuccess("Product Updated Successfully"),r.isSaving=!1},error:a=>{console.error("Error updating product",a),this.toasterDisplayService.showError(a),r.isSaving=!1}})}getCategories(){let t=JSON.parse(localStorage.getItem("currentUser")||"").token;const r=(new p.WM).set("Authorization",`Bearer ${t}`);this.http.get(e.N.serviceBase+"admin/category",{headers:r}).subscribe(n=>{this.categoriesSubject.next(n.data)})}createNewOrder(){let t=JSON.parse(localStorage.getItem("currentUser")||"").token;const r=(new p.WM).set("Authorization",`Bearer ${t}`);let n=this.cartSubject.getValue();const c={products:n.map(a=>a.product_code),quentity:n.map(a=>a.quantity)};this.http.post(e.N.serviceBase+"orders",{...c},{headers:r}).subscribe(a=>{},a=>{this.toasterDisplayService.showError({error:a.error.data.email[0]})},()=>{this.toasterDisplayService.showSuccess("Order Placed Successfully"),this.router.navigate(["/products"]),this.cartSubject.next([]),this.saveCartToLocalStorage()})}getOrders(){let t=JSON.parse(localStorage.getItem("currentUser")||"").token;const r=(new p.WM).set("Authorization",`Bearer ${t}`);this.http.get(e.N.serviceBase+"orders",{headers:r}).subscribe(n=>{this.ordersSubject.next(n.data)})}static#e=this.\u0275fac=function(t){return new(t||v)(u.LFG(p.eN),u.LFG(b.l),u.LFG(d.F0))};static#t=this.\u0275prov=u.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"})}return v})()},77:(O,f,o)=>{o.d(f,{l:()=>e});var p=o(9212),s=o(8763);let e=(()=>{class u{constructor(d){this.toastr=d}showError(d,m="",v=3e3,h="increasing",i=!0,t=!0){let r="";"object"==typeof d.error&&(d.error&&d.error.error&&(r=d.error.error),d.error&&d.error.title&&(m=`${m} ${d.error.title}`)),"string"==typeof d.error&&(r=d.error),403==d.status&&(r="You are not authorized to perform this operation."),404==d.status&&(r="Error 404: Not found."),""==r&&""==m&&(m="An error occurred."),this.toastr.error(r,m,{timeOut:v,progressAnimation:h,progressBar:i,closeButton:t})}showSuccess(d,m="",v=3e3,h="increasing",i=!0,t=!0){this.toastr.success(d,m,{timeOut:v,progressAnimation:h,progressBar:i,closeButton:t})}static#e=this.\u0275fac=function(m){return new(m||u)(p.LFG(s._W))};static#t=this.\u0275prov=p.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()},8736:(O,f,o)=>{o.d(f,{f:()=>v});var p=o(5619),s=o(2528),e=o(1474),u=o(553),b=o(9212),d=o(649),m=o(77);let v=(()=>{class h{constructor(t,r,n){this.http=t,this.router=r,this.toasterDisplayService=n,this.currentUserSubject=new p.X(new Object),this.usersSubject=new p.X([]),this.dummyUserList=[new s.n("ahmed@healthy.com","admin","Ahmed","Aladdin","1","23th Main Street, London"),new s.n("mohammed@gmail.com","user","Mohammed","Ibrahim","2","23th Main Street, London"),new s.n("saber@gmail.com","user","Saber","Osman","3","23th Main Street, London")]}logIn(t,r){this.http.post(u.N.serviceBase+"login",{email:t,password:r}).subscribe(n=>{let c=n.data,a=new s.n;a.email=c.email,a.role=c.role,a.first_name=c.first_name,a.last_name=c.last_name,a.id=c.id,a.customer_address=c.customer_address,a.customer_phone=c.customer_phone,a.customer_prefrences=c.customer_prefrences,a.token=c.token,a.password=c.password,a.fullName=`${a.first_name} ${a.last_name}`,a.first_name&&a.last_name&&(a.initials=`${a.first_name.charAt(0)}${a.last_name.charAt(0)}`),this.currentUserSubject.next(a),localStorage.setItem("currentUser",JSON.stringify(a)),a.role?(this.toasterDisplayService.showSuccess("Login successful"),this.router.navigate(["/products"])):this.toasterDisplayService.showError({error:"User Not Found"})},n=>{this.toasterDisplayService.showError({error:n.error.data.email[0]})})}logOut(){this.currentUserSubject.next(new s.n),localStorage.removeItem("currentUser")}getCurrentUser(){let t=localStorage.getItem("currentUser")?JSON.parse(localStorage.getItem("currentUser")||""):new s.n;this.currentUserSubject.next(t)}getUsers(){let r=JSON.parse(localStorage.getItem("currentUser")||"").token;const n=(new e.WM).set("Authorization",`Bearer ${r}`);this.http.get(u.N.serviceBase+"users",{headers:n}).subscribe(c=>{c.data.forEach(a=>{a.fullName=`${a.first_name} ${a.last_name}`}),this.usersSubject.next(c.data)})}createNewUser(t){const r=localStorage.getItem("currentUser"),n=r?JSON.parse(r):null;if(n){let c=n.token;const a=(new e.WM).set("Authorization",`Bearer ${c}`);t.id?this.http.put(u.N.serviceBase+`users/${t.id}`,t,{headers:a}).subscribe(C=>{this.getUsers(),this.toasterDisplayService.showSuccess("User Updated Successfully")},C=>{this.toasterDisplayService.showError({error:C.error.data.email[0]})}):this.http.post(u.N.serviceBase+"users/create",t,{headers:a}).subscribe(x=>{this.toasterDisplayService.showSuccess("User Created Successfully"),this.getUsers()},x=>{this.toasterDisplayService.showError({error:x.error.data.email[0]})})}else this.http.post(u.N.serviceBase+"signup",t).subscribe(c=>{console.log(c),this.getUsers()},c=>{this.toasterDisplayService.showError({error:c.error.data.email[0]})});console.log(t)}deleteUser(t){const r=localStorage.getItem("currentUser"),n=r?JSON.parse(r):null;if(n){let c=n.token;const a=(new e.WM).set("Authorization",`Bearer ${c}`);this.http.delete(u.N.serviceBase+`users/${t.id}`,{headers:a}).subscribe(x=>{this.getUsers(),this.toasterDisplayService.showSuccess("User Deleted Successfully")},x=>{this.toasterDisplayService.showError({error:x.error.data.email[0]})})}}static#e=this.\u0275fac=function(r){return new(r||h)(b.LFG(e.eN),b.LFG(d.F0),b.LFG(m.l))};static#t=this.\u0275prov=b.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()},3884:(O,f,o)=>{o.d(f,{Z:()=>v});var p=o(7700),s=o(9212),e=o(6223),u=o(6385),b=o(6814);const d=(h,i)=>({"modal-primary-btn":h,"modal-danger-btn":i});function m(h,i){if(1&h){const t=s.EpF();s.TgZ(0,"button",6),s.NdJ("click",function(){s.CHM(t);const n=s.oxw();return s.KtG(n.onYesClick())}),s._uU(1),s.qZA()}if(2&h){const t=s.oxw();s.Q6J("ngClass",s.WLB(2,d,t.data.primaryBtn,!t.data.primaryBtn)),s.xp6(1),s.hij(" ",t.data.btnText?t.data.btnText:"Delete"," ")}}let v=(()=>{class h{constructor(t,r,n){this.fb=t,this.dialogRef=r,this.data=n}onNoClick(){this.dialogRef.close(!1)}onYesClick(){this.dialogRef.close(!0)}static#e=this.\u0275fac=function(r){return new(r||h)(s.Y36(e.qu),s.Y36(p.so),s.Y36(p.WI))};static#t=this.\u0275cmp=s.Xpm({type:h,selectors:[["delete-confirmation-dialog"]],decls:10,vars:3,consts:[["mat-dialog-title","",1,"modal-title"],["mat-dialog-content",""],[2,"color","black"],[1,"modal-footer"],[1,"modal-secondary-btn",2,"margin","4px",3,"click"],["style","margin: 4px;","class","btn","type","submit",3,"ngClass","click",4,"ngIf"],["type","submit",1,"btn",2,"margin","4px",3,"ngClass","click"]],template:function(r,n){1&r&&(s.TgZ(0,"h1",0),s._uU(1),s.qZA(),s._UZ(2,"mat-divider"),s.TgZ(3,"div",1)(4,"p",2),s._uU(5),s.qZA()(),s.TgZ(6,"div",3)(7,"button",4),s.NdJ("click",function(){return n.onNoClick()}),s._uU(8,"Cancel"),s.qZA(),s.YNc(9,m,2,5,"button",5),s.qZA()),2&r&&(s.xp6(1),s.Oqu(n.data.title),s.xp6(4),s.hij(" ",n.data.message," "),s.xp6(4),s.Q6J("ngIf",!n.data.notError))},dependencies:[u.d,p.uh,p.xY,b.mk,b.O5],styles:[".modal-title[_ngcontent-%COMP%]{font-size:1.25rem;color:#3e465b}.form-label[_ngcontent-%COMP%]{margin-bottom:.5rem;font-size:.9rem;font-weight:700;color:#525b75}.modal-footer[_ngcontent-%COMP%]{display:flex;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:.75rem;border-top:1px solid #e3e6ed;border-bottom-left-radius:calc(.375rem - 1px);border-bottom-right-radius:calc(.375rem - 1px)}"]})}return h})()},833:(O,f,o)=>{o.d(f,{S:()=>N});var p=o(7394),s=o(2528),e=o(9212),u=o(649),b=o(5852),d=o(1132),m=o(8736),v=o(6814);function h(g,S){if(1&g&&(e.TgZ(0,"span",28),e._uU(1),e.qZA()),2&g){const l=e.oxw(2);e.xp6(1),e.Oqu(l.cartItems)}}const i=()=>["dashboard/cart"];function t(g,S){if(1&g&&(e.TgZ(0,"a",24),e.YNc(1,h,2,1,"span",25),e.O4$(),e.TgZ(2,"svg",26),e._UZ(3,"path",27),e.qZA()()),2&g){const l=e.oxw();e.Q6J("routerLink",e.DdM(2,i)),e.xp6(1),e.Q6J("ngIf",l.cartItems>0)}}function r(g,S){if(1&g){const l=e.EpF();e.TgZ(0,"div",29),e.NdJ("click",function(){e.CHM(l);const _=e.oxw(),P=e.MAs(18);return e.KtG(_.togglePanel(P))}),e._uU(1),e.qZA()}if(2&g){const l=e.oxw();e.xp6(1),e.hij(" ",l.user.initials," ")}}function n(g,S){if(1&g){const l=e.EpF();e.TgZ(0,"div",29),e.NdJ("click",function(){e.CHM(l);const _=e.oxw(),P=e.MAs(18);return e.KtG(_.togglePanel(P))}),e._uU(1," GU "),e.qZA()}}function c(g,S){if(1&g&&(e.TgZ(0,"h6",30),e._uU(1),e.qZA()),2&g){const l=e.oxw();e.xp6(1),e.hij(" ",l.user.fullName," ")}}function a(g,S){1&g&&(e.TgZ(0,"h6",30),e._uU(1," Guest "),e.qZA())}const x=()=>["/admin"];function C(g,S){1&g&&(e.TgZ(0,"li",31)(1,"a",32)(2,"div",33),e.O4$(),e.TgZ(3,"svg",34),e._UZ(4,"path",35)(5,"circle",36),e.qZA(),e.kcU(),e.TgZ(6,"a",37),e._uU(7,"Users"),e.qZA()()()()),2&g&&e.Q6J("routerLink",e.DdM(1,x))}function U(g,S){if(1&g){const l=e.EpF();e.TgZ(0,"div",38)(1,"a",39),e.NdJ("click",function(){e.CHM(l);const _=e.oxw();return e.KtG(_.logOut())}),e.O4$(),e.TgZ(2,"svg",40),e._UZ(3,"path",41)(4,"polyline",42)(5,"line",43),e.qZA(),e._uU(6,"Sign out "),e.qZA()()}}function E(g,S){if(1&g){const l=e.EpF();e.TgZ(0,"div",38)(1,"a",39),e.NdJ("click",function(){e.CHM(l);const _=e.oxw();return e.KtG(_.logOut())}),e.O4$(),e.TgZ(2,"svg",40),e._UZ(3,"path",41)(4,"polyline",42)(5,"line",43),e.qZA(),e._uU(6,"Sign In "),e.qZA()()}}const y=()=>["/admin/sales"],D=()=>["/admin/users"],T=()=>["/settings/users-managment"];function I(g,S){1&g&&(e.TgZ(0,"nav",44)(1,"div",45)(2,"div",46)(3,"ul",47)(4,"li",48)(5,"div",49)(6,"a",50)(7,"div",9)(8,"span",51),e.O4$(),e.TgZ(9,"svg",52),e._UZ(10,"circle",53)(11,"path",54),e.qZA()(),e.kcU(),e.TgZ(12,"span",55),e._uU(13,"Sales Report"),e.qZA()()(),e.TgZ(14,"a",50)(15,"div",9)(16,"span",51),e.O4$(),e.TgZ(17,"svg",52),e._UZ(18,"circle",53)(19,"path",54),e.qZA()(),e.kcU(),e.TgZ(20,"span",55),e._uU(21,"Users Management"),e.qZA()()(),e.TgZ(22,"div",56,57)(24,"ul",58)(25,"li",48)(26,"a",59)(27,"div",9)(28,"span",60),e._uU(29,"Users Management"),e.qZA()()()()()()()()()()()()),2&g&&(e.xp6(6),e.Q6J("routerLink",e.DdM(3,y)),e.xp6(8),e.Q6J("routerLink",e.DdM(4,D)),e.xp6(12),e.Q6J("routerLink",e.DdM(5,T)))}const A=()=>["dashboard/products"];let N=(()=>{class g{constructor(l,M,_,P,w){this.router=l,this.el=M,this.mainService=_,this.productsService=P,this.usersService=w,this.navbarVisibleSubscription=new p.w0,this.cartSubscription=new p.w0,this.cartProducts=[],this.cartItems=0,this.usersSubscription=new p.w0,this.user=new s.n,this.showSidebar=!0,this.navbarExpanded=!0,this.smallVerticalPanelCollapsed=!0}ngOnInit(){this.navbarVisibleSubscription=this.mainService.NavbarVisibleSubject.subscribe(l=>{this.showSidebar=l}),this.cartSubscription=this.productsService.cartSubject.subscribe(l=>{this.cartProducts=l,this.cartItems=this.cartProducts.reduce((M,_)=>M+(_.quantity||0),0)}),this.productsService.getCartItems(),this.getUser()}ngOnDestroy(){this.navbarVisibleSubscription.unsubscribe(),this.cartSubscription.unsubscribe(),this.usersSubscription.unsubscribe()}getUser(){this.usersService.getCurrentUser();let l=localStorage.getItem("currentUser")?JSON.parse(localStorage.getItem("currentUser")||""):new s.n;this.user=l,this.user.id||(this.usersSubscription=this.usersService.currentUserSubject.subscribe(M=>{this.user=M}))}logOut(){this.usersService.logOut(),this.router.navigate(["/login"])}showPanel(l){this.navbarExpanded?l.classList?.add("d-none"):l.classList?.remove("d-none")}hidePanel(l){l.classList?.add("d-none")}togglePanel(l){l.classList.contains("d-none")?l.classList?.remove("d-none"):l.classList?.add("d-none")}static#e=this.\u0275fac=function(M){return new(M||g)(e.Y36(u.F0),e.Y36(e.SBq),e.Y36(b.J),e.Y36(d.s),e.Y36(m.f))};static#t=this.\u0275cmp=e.Xpm({type:g,selectors:[["app-navbar"]],decls:29,vars:11,consts:[["id","top",1,"main"],["navbar",""],["id","navbarDefault",1,"navbar","navbar-top","fixed-top","navbar-expand",2,"border-right","1px solid #cbd0dd"],[1,"collapse","navbar-collapse","justify-content-between"],[1,"navbar-logo",2,"display","flex"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarVerticalCollapse","aria-controls","navbarVerticalCollapse","aria-expanded","false","aria-label","Toggle Navigation",1,"btn","navbar-toggler","navbar-toggler-humburger-icon","hover-bg-transparent"],["aria-hidden","true","focusable","false","data-prefix","fas","data-icon","grip-lines","role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512","data-fa-i2svg","",1,"svg-inline--fa","fa-grip-lines","text-body","fs-5","toggle-line"],["fill","currentColor","d","M416 288C433.7 288 448 302.3 448 320C448 337.7 433.7 352 416 352H32C14.33 352 0 337.7 0 320C0 302.3 14.33 288 32 288H416zM416 160C433.7 160 448 174.3 448 192C448 209.7 433.7 224 416 224H32C14.33 224 0 209.7 0 192C0 174.3 14.33 160 32 160H416z"],[1,"navbar-brand","me-1","me-sm-3",3,"routerLink"],[1,"d-flex","align-items-center"],["src","assets/logo.png","alt","logo","width","200"],[1,"navbar-nav","navbar-nav-icons","flex-row"],["style","width: 30px; margin-right: 1.25rem; color: rgb(82, 91, 117); display: flex;",3,"routerLink",4,"ngIf"],[1,"nav-item","dropdown"],["class","avatar avatar-l fs-5 fw-bold setting-btn",3,"click",4,"ngIf"],[1,"navbar-collapsed-container","user","d-none",3,"mouseleave"],["userSignOut",""],[1,"navbar-nav","flex-column","navbar-collapsed-ul"],["class","nav-menu-label fw-bold user-title",4,"ngIf"],["class","settings-li px-3",3,"routerLink",4,"ngIf"],["class","px-3 py-2","style","border-top: 1px solid #e3e6ed; ",4,"ngIf"],[1,"px-3",2,"border-top","1px solid #e3e6ed","padding-top","8px"],[1,"fw-bold",2,"color","#141824","padding-left","2px"],["class","navbar navbar-vertical navbar-expand-lg navbar-vertical-collapsed",4,"ngIf"],[2,"width","30px","margin-right","1.25rem","color","rgb(82, 91, 117)","display","flex",3,"routerLink"],["class","icon-indicator-number","style","right: 104.5px; top: 7px; ",4,"ngIfS","ngIf"],["aria-hidden","true","focusable","false","data-prefix","fas","data-icon","cart-shopping","role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 576 512","data-fa-i2svg","",1,"w-100","svg-inline--fa","fa-cart-shopping"],["fill","currentColor","d","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"],[1,"icon-indicator-number",2,"right","104.5px","top","7px"],[1,"avatar","avatar-l","fs-5","fw-bold","setting-btn",3,"click"],[1,"nav-menu-label","fw-bold","user-title"],[1,"settings-li","px-3",3,"routerLink"],[1,"nav-link",2,"padding-left","0px"],[2,"display","flex","align-items","stretch"],["width","16px","height","16px","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"],["cx","12","cy","7","r","4"],[1,"fw-bold",2,"color","#141824","padding-left","10px"],[1,"px-3","py-2",2,"border-top","1px solid #e3e6ed"],[1,"btn","btn-secondary-mod","w-100",2,"display","flex","justify-content","center","align-items","center",3,"click"],["width","16px","height","16px","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-log-out","me-2"],["d","M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"],["points","16 17 21 12 16 7"],["x1","21","y1","12","x2","9","y2","12"],[1,"navbar","navbar-vertical","navbar-expand-lg","navbar-vertical-collapsed"],["id","navbarVerticalCollapse",1,"collapse","navbar-collapse"],[1,"navbar-vertical-content"],["id","navbarVerticalNav",1,"navbar-nav","flex-column"],[1,"nav-item"],[1,"nav-item-wrapper"],["role","button","data-bs-toggle","collapse","aria-expanded","true","aria-controls","nv-home","routerLinkActive","active",1,"nav-link","nav-link-header","dropdown-indicator","label-1",3,"routerLink"],[1,"nav-link-icon"],["width","16px","height","16px","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-settings"],["cx","12","cy","12","r","3"],["d","M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"],[1,"nav-link-text","nav-link-text-header"],[1,"parent-wrapper","label-1","collapsed"],["settingswrapper",""],["data-bs-parent","#navbarVerticalCollapse","id","nv-home",1,"nav","collapse","parent","show"],["data-bs-toggle","","aria-expanded","false","routerLinkActive","active",1,"nav-link",3,"routerLink"],[1,"nav-link-text","nav-item-text"]],template:function(M,_){if(1&M){const P=e.EpF();e.TgZ(0,"main",0,1)(2,"nav",2)(3,"div",3)(4,"div",4)(5,"button",5),e.O4$(),e.TgZ(6,"svg",6),e._UZ(7,"path",7),e.qZA()(),e.kcU(),e.TgZ(8,"a",8)(9,"div",9)(10,"div",9),e._UZ(11,"img",10),e.qZA()()()(),e.TgZ(12,"ul",11),e.YNc(13,t,4,3,"a",12),e.TgZ(14,"li",13),e.YNc(15,r,2,1,"div",14)(16,n,2,0,"div",14),e.TgZ(17,"div",15,16),e.NdJ("mouseleave",function(){e.CHM(P);const k=e.MAs(18);return e.KtG(_.hidePanel(k))}),e.TgZ(19,"ul",17),e.YNc(20,c,2,1,"h6",18)(21,a,2,0,"h6",18)(22,C,8,2,"li",19)(23,U,7,0,"div",20)(24,E,7,0,"div",20),e.TgZ(25,"div",21)(26,"span",22),e._uU(27,"V. 3.5.49"),e.qZA()()()()()()()(),e.YNc(28,I,30,6,"nav",23),e.qZA()}2&M&&(e.xp6(8),e.Q6J("routerLink",e.DdM(10,A)),e.xp6(5),e.Q6J("ngIf","admin"!=_.user.role),e.xp6(2),e.Q6J("ngIf",_.user.role),e.xp6(1),e.Q6J("ngIf",!_.user.role),e.xp6(4),e.Q6J("ngIf",_.user.role),e.xp6(1),e.Q6J("ngIf",!_.user.role),e.xp6(1),e.Q6J("ngIf","admin"==_.user.role),e.xp6(1),e.Q6J("ngIf",_.user.role),e.xp6(1),e.Q6J("ngIf",!_.user.role),e.xp6(4),e.Q6J("ngIf",_.showSidebar))},dependencies:[v.O5,u.rH,u.Od],styles:[".navbar-toggler-humburger-icon[_ngcontent-%COMP%]{height:2.25rem;width:2.25rem;padding:.3125rem;display:flex;justify-content:center;align-items:center;border-radius:50%;border:0;margin-left:.6125rem}.navbar-toggler-humburger-icon[_ngcontent-%COMP%]:hover, .navbar-toggler-humburger-icon[_ngcontent-%COMP%]:focus{background-color:#cbd0dd}@media (min-width: 992px){.navbar-toggler[_ngcontent-%COMP%]{display:none}}@media (max-width: 992px){.expand-width[_ngcontent-%COMP%]{width:100%!important;height:calc(100vh - 4rem)}.expand-width[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]{display:flex!important}}.nav-link-text[_ngcontent-%COMP%], .nav-menu-label[_ngcontent-%COMP%], #nav-menu-li[_ngcontent-%COMP%]{font-size:.9rem}.navbar-vertical-label[_ngcontent-%COMP%]{text-transform:uppercase;font-weight:700;font-size:.64rem;color:#6e7891;margin-bottom:.5rem;margin-top:1.5rem;padding-right:2rem;margin-left:2rem}.setting-btn[_ngcontent-%COMP%]{padding:1rem 0rem;width:3.3rem;display:flex;border:1px solid #6c757d80;background:#f8f9fa;border-radius:32px;color:#3e465b;cursor:pointer;justify-content:center;align-items:center}.user[_ngcontent-%COMP%]{margin-top:0!important;top:72px!important;left:-10.3rem;height:unset;padding-bottom:0}.user[_ngcontent-%COMP%]   .navbar-collapsed-ul[_ngcontent-%COMP%]:before{width:1.5rem;height:1.5rem;top:-.8rem;left:179px;transform:rotate(135deg)}.user[_ngcontent-%COMP%]   .navbar-collapsed-ul[_ngcontent-%COMP%]{margin-left:0!important}.user-title[_ngcontent-%COMP%]{display:flex;justify-content:space-around;color:#141824;font-size:1.1rem;padding:1rem .7rem;border-color:#e3e6ed!important;margin-bottom:0}.settings-li[_ngcontent-%COMP%]:hover{background-color:#eff2f6;cursor:pointer}.dropdown-indicator-icon[_ngcontent-%COMP%]{color:#8a94ad!important}.today-wrapper[_ngcontent-%COMP%]{overflow:hidden}.collapsed.today-wrapper[_ngcontent-%COMP%]{overflow:hidden;height:1px}.jobs-expanded[_ngcontent-%COMP%]{height:8.5rem!important}.jobs-dashboard-expanded[_ngcontent-%COMP%]{height:12.5rem!important}.dashboard-expanded[_ngcontent-%COMP%]{height:3.5rem!important}.settings-expanded[_ngcontent-%COMP%]{height:2rem!important}.logs-expanded[_ngcontent-%COMP%]{height:25rem;overflow:auto}.solution-expanded[_ngcontent-%COMP%], .storage-expanded[_ngcontent-%COMP%]{height:2rem;overflow:auto}.stage-expanded[_ngcontent-%COMP%]{height:2rem}.small-panel[_ngcontent-%COMP%]{height:2rem;transition:all .2s ease-in-out;overflow:hidden}.collapse-small-panel[_ngcontent-%COMP%]{height:1px;overflow:hidden}.icon-indicator-number[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:absolute;top:3.5px;height:1rem;width:1rem;font-size:.8rem;color:#fff;font-weight:700;background:red;border-radius:10px}"]})}return g})()},553:(O,f,o)=>{o.d(f,{N:()=>p});const p={production:!1,serviceBase:"https://food.sidigaber.org/api/"}}}]);