(this.webpackJsonpportifolio=this.webpackJsonpportifolio||[]).push([[0],{27:function(e){e.exports=JSON.parse('[{"imgUrl":"/img/portfolio/kalendario.png","name":"Kalendario","description":"Kalendario is a SaaS App for small business / service providers that allow them to manage their service schedule and have their own customer database for management of services provided / history of services. As well as giving every business with their own webpage where users can book appointments online.","backEndStack":["Python.png","Django.png","Django_Rest_Framework.png","Postgresql.svg","Redis.png"],"frontEndStack":["Angular.png","Bootstrap.png","Redux.png","RxJs.png"]}]')},39:function(e,t,s){},40:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(0),n=s.n(c),i=s(9),l=s.n(i),r=(s(39),s(40),s(28)),o=s(29),d=s(32),j=s(30),m=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).handleScroll=function(){var e="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top";(document.body.scrollTop>100||document.documentElement.scrollTop>100)&&(e+=" navbar-shrink"),a.setState({navClass:e})},a.state={navClass:""},a}return Object(o.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return Object(a.jsx)("nav",{className:this.state.navClass,id:"mainNav",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("img",{className:"nav-image",src:"/img/navbar.png",alt:""}),Object(a.jsx)("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"}),Object(a.jsxs)("button",{className:"navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation",children:["Menu",Object(a.jsx)("i",{className:"fas fa-bars"})]}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarResponsive",children:Object(a.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(a.jsx)("li",{className:"nav-item mx-0 mx-lg-1",children:Object(a.jsx)("a",{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",href:"#portfolio",children:"Portfolio"})}),Object(a.jsx)("li",{className:"nav-item mx-0 mx-lg-1",children:Object(a.jsx)("a",{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",href:"#about",children:"About"})})]})})]})})}}]),s}(c.Component),b=function(){return Object(a.jsx)("header",{className:"masthead bg-primary text-white text-center",children:Object(a.jsxs)("div",{className:"container d-flex align-items-center flex-column",children:[Object(a.jsx)("img",{className:"masthead-avatar mb-5",src:"/img/avatar.jfif",alt:""}),Object(a.jsx)("h1",{className:"masthead-heading text-uppercase mb-0",children:"Gustavo Francelino"}),Object(a.jsxs)("div",{className:"divider-custom divider-light",children:[Object(a.jsx)("div",{className:"divider-custom-line"}),Object(a.jsx)("div",{className:"divider-custom-icon",children:Object(a.jsx)("i",{className:"fas fa-star"})}),Object(a.jsx)("div",{className:"divider-custom-line"})]}),Object(a.jsx)("p",{className:"masthead-subheading font-weight-light mb-0",children:"Full Stack Developer"})]})})},h=s(33),x=s(31),u=s(51),p=s(50),g=s(52),v=s(53),O=function(e){var t=Object(c.useState)(!1),s=Object(x.a)(t,2),n=s[0],i=s[1],l=function(e,t){return Object(a.jsxs)("div",{className:"row no-gutters",children:[Object(a.jsx)("div",{className:"h3 col-12",children:e}),t.map((function(e,t){return Object(a.jsx)(u.a,{overlay:Object(a.jsx)(p.a,{id:"tooltip",children:e.split(".")[0].replaceAll("_"," ")}),className:"col",children:Object(a.jsx)("img",{alt:e,className:"stack-logos mb-2 mr-3",src:"/img/logos/"+e},t)})}))]})};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"portfolio-item mx-auto",onClick:function(){return i(!0)},children:[Object(a.jsx)("div",{className:"portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100",children:Object(a.jsx)("div",{className:"portfolio-item-caption-content text-center text-white",children:Object(a.jsx)("i",{className:"fas fa-plus fa-3x"})})}),Object(a.jsx)("img",{className:"img-fluid",src:""+e.imgUrl,alt:""})]}),Object(a.jsxs)(g.a,{size:"lg",show:n,onHide:function(){return i(!1)},children:[Object(a.jsx)(g.a.Header,{closeButton:!0,children:Object(a.jsx)(g.a.Title,{children:e.name})}),Object(a.jsx)(g.a.Body,{children:Object(a.jsxs)("div",{className:"d-flex",children:[Object(a.jsx)("img",{className:"modal-logo mr-2",src:""+e.imgUrl,alt:""}),Object(a.jsx)("p",{className:"flex-fill",children:e.description})]})}),Object(a.jsx)("div",{className:"mx-4 mb-4",children:l("Backend",e.backEndStack)}),Object(a.jsx)("div",{className:"mx-4 mb-4",children:l("Frontend",e.frontEndStack)}),Object(a.jsx)(g.a.Footer,{children:Object(a.jsx)(v.a,{className:"m-2",target:"_blank",href:"https://app.kalendario.ie/landing",children:"Website"})})]})]})},f=s(27),N=function(){return console.log(f),Object(a.jsx)("section",{className:"page-section portfolio",id:"portfolio",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{className:"page-section-heading text-center text-uppercase text-secondary mb-0",children:"Portfolio"}),Object(a.jsxs)("div",{className:"divider-custom",children:[Object(a.jsx)("div",{className:"divider-custom-line"}),Object(a.jsx)("div",{className:"divider-custom-icon",children:Object(a.jsx)("i",{className:"fas fa-star"})}),Object(a.jsx)("div",{className:"divider-custom-line"})]}),Object(a.jsx)("div",{className:"row justify-content-center",children:f.map((function(e,t){return Object(a.jsx)("div",{className:"col-md-6 col-lg-4 mb-5",children:Object(a.jsx)(O,Object(h.a)({},e))},t)}))})]})})},w=function(){return Object(a.jsx)("section",{className:"page-section bg-primary text-white mb-0",id:"about",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{className:"page-section-heading text-center text-uppercase text-white",children:"Skills"}),Object(a.jsxs)("div",{className:"divider-custom divider-light",children:[Object(a.jsx)("div",{className:"divider-custom-line"}),Object(a.jsx)("div",{className:"divider-custom-icon",children:Object(a.jsx)("i",{className:"fas fa-star"})}),Object(a.jsx)("div",{className:"divider-custom-line"})]}),Object(a.jsxs)("div",{className:"row text-center",children:[Object(a.jsx)("div",{className:"col-lg-4 ml-auto",children:["Python","C#","Ruby","Javascript"].map((function(e,t){return Object(a.jsx)("p",{className:"lead",children:e},t)}))}),Object(a.jsx)("div",{className:"col-lg-4 ml-auto",children:["Django","Django Rest Framework","Ruby On Rails",".Net Core","Angular","React","Redux","SQL"].map((function(e,t){return Object(a.jsx)("p",{className:"lead",children:e},t)}))}),Object(a.jsx)("div",{className:"col-lg-4 mr-auto",children:["SOLID Principles","Dry Coding","API"].map((function(e,t){return Object(a.jsx)("p",{className:"lead",children:e},t)}))})]})]})})},k=function(){return Object(a.jsx)("footer",{className:"footer text-center",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-lg-4 mb-5 mb-lg-0",children:[Object(a.jsx)("h4",{className:"text-uppercase mb-4",children:"Location"}),Object(a.jsx)("p",{className:"lead mb-0",children:"Dublin - Ireland"})]}),Object(a.jsxs)("div",{className:"col-lg-4 mb-5 mb-lg-0",children:[Object(a.jsx)("h4",{className:"text-uppercase mb-4",children:"Around the Web"}),Object(a.jsx)("a",{className:"btn btn-outline-light btn-social mx-1",href:"https://www.linkedin.com/in/gustavo-chahm-3b81ab7a/",children:Object(a.jsx)("i",{className:"fab fa-fw fa-linkedin-in"})}),Object(a.jsx)("a",{className:"btn btn-outline-light btn-social mx-1",href:"https://github.com/Gchahm/",children:Object(a.jsx)("i",{className:"fab fa-fw fa-github"})})]}),Object(a.jsxs)("div",{className:"col-lg-4",children:[Object(a.jsx)("h4",{className:"text-uppercase mb-4",children:"About Freelancer"}),Object(a.jsxs)("p",{className:"lead mb-0",children:["Freelance is a free to use, MIT licensed Bootstrap theme created by",Object(a.jsx)("a",{href:"http://startbootstrap.com",children:"Start Bootstrap"}),"."]})]})]})})})};var y=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m,{}),Object(a.jsx)(b,{}),Object(a.jsx)(N,{}),Object(a.jsx)(w,{}),Object(a.jsx)(k,{})]})},S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,54)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};l.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),S()}},[[44,1,2]]]);
//# sourceMappingURL=main.3b3caeab.chunk.js.map