(window["webpackJsonptic-tac-toe"]=window["webpackJsonptic-tac-toe"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var r=a(8),n=a(1),s=a(2),c=a(4),i=a(3),l=a(5),u=a(0),o=a.n(u),d=a(7),m=a.n(d);a(15);function h(e){return o.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var v=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={squares:Array(9).fill(null),xIsNext:!0},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();f(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return o.a.createElement(h,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=f(this.state.squares);return e=t?"Winner: "+t:"Next player: "+(this.state.xIsNext?"X":"O"),o.a.createElement("div",null,o.a.createElement("div",{className:"status"},e),o.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),o.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),o.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(o.a.Component),b=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"game-board"},o.a.createElement(v,null)),o.a.createElement("div",{className:"game-info"},o.a.createElement("div",null),o.a.createElement("ol",null)))}}]),t}(o.a.Component);function f(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(r.a)(t[a],3),s=n[0],c=n[1],i=n[2];if(e[s]&&e[s]===e[c]&&e[s]===e[i])return e[s]}return null}m.a.render(o.a.createElement(b,null),document.getElementById("root"))},15:function(e,t,a){},9:function(e,t,a){e.exports=a(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.e6f44176.chunk.js.map