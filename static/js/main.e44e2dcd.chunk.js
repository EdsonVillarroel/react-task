(this["webpackJsonpintro-react"]=this["webpackJsonpintro-react"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(4),r=n.n(a),s=(n(13),n(6)),l=n(2);var i=n(0),u=c.a.createContext();function d(e){var t=function(e,t){var n=c.a.useState(!1),o=Object(l.a)(n,2),a=o[0],r=o[1],s=c.a.useState(!0),i=Object(l.a)(s,2),u=i[0],d=i[1],j=c.a.useState(t),m=Object(l.a)(j,2),b=m[0],f=m[1];return c.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),f(n),d(!1)}catch(a){r(a)}}),1e3)})),{item:b,saveItem:function(t){try{if(0!==t.loading){var n=JSON.stringify(t);localStorage.setItem(e,n),f(t)}}catch(a){r(a)}},loading:u,error:a}}("TODOS_v1",[]),n=t.item,o=t.saveItem,a=t.loading,r=t.error,d=c.a.useState(""),j=Object(l.a)(d,2),m=j[0],b=j[1],f=c.a.useState(!1),O=Object(l.a)(f,2),x=O[0],h=O[1],p=n.filter((function(e){return!!e.completed})).length,v=n.length,g=[];g=!m.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=m.toLowerCase();return t.includes(n)}));return c.a.useEffect((function(){}),[v]),Object(i.jsx)(u.Provider,{value:{error:r,loading:a,totalTodos:v,completedTodos:p,searchValue:m,setSearchValue:b,searchedTodos:g,completeTodo:function(e){if(0!==e.length){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);n[t].completed=!n[t].completed,o(c)}},addTodo:function(e){if(0!==e.length){var t=Object(s.a)(n);t.push({completed:!1,text:e}),o(t)}},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c.splice(t,1),o(c)},openModal:x,setOpenModal:h},children:e.children})}n(15);function j(){var e=c.a.useContext(u),t=e.totalTodos,n=e.completedTodos;return Object(i.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",n," de ",t," ToDo\xb4s List"]})}n(16);function m(){var e=c.a.useContext(u),t=e.searchValue,n=e.setSearchValue;return Object(i.jsx)("div",{className:"TodoSearch-container",children:Object(i.jsx)("input",{className:"TodoSearch",placeholder:"Filter TODOs",value:t,onChange:function(e){n(e.target.value)}})})}n(17);function b(e){return Object(i.jsx)("div",{className:"TodoList-container",children:e.children})}n(18),n(19);var f=n(8),O={check:function(e){return Object(i.jsx)(f.a,{className:"Icon-svg Icon-svg--check",fill:e})},delete:function(e){return Object(i.jsx)(f.b,{className:"Icon-svg Icon-svg--delete",fill:e})}};function x(e){var t=e.type,n=e.color,o=void 0===n?"gray":n,c=e.onClick;return Object(i.jsx)("span",{className:"Icon-container Icon-container--".concat(t),onClick:c,children:O[t](o)})}function h(e){var t=e.completed,n=e.onComplete;return Object(i.jsx)(x,{type:"check",color:t?"#4caf50":"grey",onClick:n})}function p(e){var t=e.onDelete;return Object(i.jsx)(x,{type:"delete",onClick:t})}function v(e){return Object(i.jsx)("div",{className:"TodoItem-container",children:Object(i.jsxs)("li",{className:"TodoItem",children:[Object(i.jsx)(h,{completed:e.completed,onComplete:e.onComplete}),Object(i.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(i.jsx)(p,{onDelete:e.onDelete})]})})}n(20);function g(e){return Object(i.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})}n(21);function T(e){var t=e.children;return r.a.createPortal(Object(i.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(22);function C(){var e=c.a.useState(""),t=Object(l.a)(e,2),n=t[0],o=t[1],a=c.a.useContext(u),r=a.addTodo,s=a.setOpenModal;return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(n),s(!1)},children:[Object(i.jsx)("label",{children:"New Todo"}),Object(i.jsx)("textarea",{placeholder:"Enter you task here...",value:n,onChange:function(e){o(e.target.value)},className:"textarea"}),Object(i.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(i.jsx)("button",{className:"TodoForm-button TodoForm-button-cancel",type:"button",onClick:function(){s(!1)},children:"Cancelar"}),Object(i.jsx)("button",{className:"TodoForm-button TodoForm-button-add",type:"submit",children:"A\xf1adir"})]})]})}function N(e){e.error;return Object(i.jsx)("p",{children:"No encontramos lo que buscas.."})}n(23);function I(){return Object(i.jsxs)("div",{className:"LoadingTodo-container",children:[Object(i.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(i.jsx)("p",{className:"LoadingTodo-text",children:"Cargando TODOs..."}),Object(i.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}n(24);function S(){return Object(i.jsx)("div",{className:"EmptyTodos-container",children:"\xa1Crea tu primer TODO!"})}n(25);function y(){return Object(i.jsx)("p",{children:"No encontramos lo que buscas.."})}function k(){var e=c.a.useContext(u),t=e.error,n=e.loading,o=e.completeTodo,a=e.deleteTodo,r=e.searchedTodos,s=e.openModal,l=e.setOpenModal,d=c.a.useContext(u),f=d.searchValue;d.setSearchValue;return Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsxs)("div",{className:"App-header",children:[Object(i.jsx)(j,{}),Object(i.jsx)(m,{})]}),Object(i.jsxs)(b,{children:[t&&Object(i.jsx)(N,{error:t}),n&&Object(i.jsx)(I,{}),!n&&!r.length&&Object(i.jsx)(S,{}),f&&!r.length&&Object(i.jsx)(y,{}),r.map((function(e){return Object(i.jsx)(v,{text:e.text,completed:e.completed,onComplete:function(){return o(e.text)},onDelete:function(){return a(e.text)}},e.text)}))]}),!!s&&Object(i.jsx)(T,{children:Object(i.jsx)(C,{})}),Object(i.jsx)(g,{className:"CreateTodoBUtton",setOpenModal:l})]})}var D=function(){return Object(i.jsx)(d,{children:Object(i.jsx)(k,{})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),a(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(D,{})}),document.getElementById("root")),F()}],[[26,1,2]]]);
//# sourceMappingURL=main.e44e2dcd.chunk.js.map