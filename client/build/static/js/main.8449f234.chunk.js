(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(65)},56:function(e,t,a){},57:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(30),c=a.n(r),l=a(14),s=a(7),i=a(9),u=a(10),m=a(12),d=a(11),h=a(13),v=a(16),f=a.n(v),k={getBook:function(e){return f.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e))},deleteBook:function(e){return f.a.delete("/api/books/"+e).then(function(e){return e.data})},saveBook:function(e){return f.a.post("/api/books",e).then(function(e){return e.data})},savedBooks:function(){return f.a.get("/api/books").then(function(e){return e.data})}},p=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={savedBooks:[]},a.handleSave=function(e){a.state.savedBooks.map(function(e){return e._id}).includes(e._id)?k.deleteBook(e._id).then(function(e){return a.setState({savedBooks:a.state.savedBooks.filter(function(t){return t._id!==e._id})})}).catch(function(e){return console.error(e)}):k.saveBook(e).then(function(e){return a.setState({savedBooks:a.state.savedBooks.concat([e])})}).catch(function(e){return console.error(e)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.savedBooks().then(function(t){return e.setState({savedBooks:t})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.props.books.length?o.a.createElement("div",null,this.props.books.map(function(t){return o.a.createElement("div",{className:"card mb-3",key:t._id},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-2"},o.a.createElement("img",{alt:t.title,className:"img-fluid",src:t.image})),o.a.createElement("div",{className:"col-md-10"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},t.title," by ",t.authors),o.a.createElement("p",{className:"card-text"},t.description),o.a.createElement("div",null,o.a.createElement("a",{href:t.link,className:"btn badge-pill btn-outline-dark mt-3",target:"_blank"},"View"),o.a.createElement("button",{onClick:function(){return e.handleSave(t)},className:"btn badge-pill btn-outline-warning mt-3 ml-3"},e.state.savedBooks.map(function(e){return e._id}).includes(t._id)?"Unsave":"Save"))))))})):o.a.createElement("h1",{className:"text-center"},"No Results to Display"))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={savedBooks:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.savedBooks().then(function(t){return e.setState({savedBooks:t})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"Saved books"),o.a.createElement(p,{books:this.state.savedBooks}))}}]),t}(n.Component),E=a(31);var g=function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"search"},o.a.createElement("h2",null,"Search for and save Books of Interest")),o.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search a Book",id:"search"}),o.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-dark mt-3 mb-5"},"Search"))))},B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={value:"",books:[]},a.makeBook=function(e){return{_id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.previewLink}},a.searchBook=function(e){k.getBook(e).then(function(e){return a.setState({books:e.data.items.map(function(e){return a.makeBook(e)})})}).catch(function(e){return console.error(e)})},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(E.a)({},t,n))},a.handleFormSubmit=function(e){e.preventDefault(),a.searchBook(a.state.search)},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.searchBook()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(g,{search:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"Results"),o.a.createElement(p,{books:this.state.books})))}}]),t}(o.a.Component);a(56);var N=function(){return o.a.createElement("div",{className:"jumbotron text-center"},o.a.createElement("div",{className:"container text-light"},o.a.createElement("h1",null,"Google Books Search")))};var w=function(){return o.a.createElement("div",null,o.a.createElement(N,null,o.a.createElement("h1",null,"404 Page Not Found"),o.a.createElement("h1",null,o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))};a(57);var S=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg text-light"},o.a.createElement("div",{className:"container"},o.a.createElement(l.b,{className:"navbar-brand",to:"/"},"Google Books"),o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(l.b,{to:"/search",className:"/search"===window.location.pathname?"nav-link active":"nav-link"}," Search")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(l.b,{to:"/saved",className:"/saved"===window.location.pathname?"nav-link active":"nav-link"},"Saved")))))};var j=function(e){return o.a.createElement("main",Object.assign({className:"wrapper"},e))};var y=function(){return o.a.createElement(l.a,null,o.a.createElement("div",null,o.a.createElement(S,null),o.a.createElement(N,null),o.a.createElement(j,null,o.a.createElement(s.a,{exact:!0,path:"/",component:B}),o.a.createElement(s.a,{exact:!0,path:"/search",component:B}),o.a.createElement(s.a,{exact:!0,path:"/saved",component:b}),o.a.createElement(s.a,{exact:!0,path:"/noMatch",component:w}))))};c.a.render(o.a.createElement(y,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.8449f234.chunk.js.map