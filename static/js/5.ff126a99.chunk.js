webpackJsonp([5],{183:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return x});var o,c,l=t(0),s=t.n(l),p=t(8),h=t(27),f=t(194),d=t(63),m=t(212),u=(t.n(m),function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}()),g=function(e){return s.a.createElement("div",{className:"cover-img"},s.a.createElement("img",{src:e.coverImgUrl,alt:"pic"}),s.a.createElement("p",{className:"play-count"},s.a.createElement("i",{className:"icon-headphones"}),e.playCount))},b=function(e){return s.a.createElement("div",{className:"creator"},s.a.createElement("div",{className:"creator-avatar"},s.a.createElement("img",{src:e.creator.avatarUrl,alt:"creator-avatar"})),s.a.createElement("div",{className:"creator-nickname"},e.creator.nickname),s.a.createElement("div",{className:"create-time"},Object(d.c)(e.createTime),"\u521b\u5efa"))},v=function(e){var n=JSON.parse(localStorage.getItem("allStarredList"));if(n)for(var t=0;t<n.length;t+=1){var r=n[t];if(r.id===e)return!0}return!1},x=(o=Object(p.b)(function(e){return{starredlist:e.starredlist}},{star:h.c,cancelStar:h.a}))(c=function(e){function n(){r(this,n);var e=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.toggleDesc=function(){e.setState({showDesc:!e.state.showDesc})},e.beforeStar=function(){var n=e.props.playlist,t=n.id,r=n.name,a=n.coverImgUrl,i={id:t,name:r,coverImgUrl:a};e.props.star(i)},e.beforeCancelStar=function(){var n=e.props.playlist,t=n.id;e.props.cancelStar(t)},e.state={showDesc:!1},e}return i(n,e),u(n,[{key:"render",value:function(){var e=this.props.playlist,n=e.id;return s.a.createElement("div",null,s.a.createElement(f.a,{title:"\u6b4c\u5355"}),s.a.createElement("div",{className:"info-header"},g(e),s.a.createElement("div",{className:"info-header-right"},s.a.createElement("p",{className:"title"},e.name),b(e),s.a.createElement("div",{className:"operation-buttons"},v(n)?s.a.createElement("a",{onClick:this.beforeCancelStar},"\u2764\ufe0f \u53d6\u6d88\u6536\u85cf"):s.a.createElement("a",{onClick:this.beforeStar},"\u2661 \u6536\u85cf")),s.a.createElement("div",{className:"tags"},"\u6807\u7b7e\uff1a",e.tags.map(function(e){return s.a.createElement("span",{key:e},e)})),s.a.createElement("div",{className:"playlist-desc",onClick:this.toggleDesc},s.a.createElement("p",{className:this.state.showDesc?"show":"more"},e.description)))))}}]),n}(l.Component))||c},194:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(195),o=(t.n(i),function(e){return a.a.createElement("h4",{className:"subtitle"},e.title)});n.a=o},195:function(e,n,t){var r=t(196);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0};a.transform=void 0;t(177)(r,a);r.locals&&(e.exports=r.locals)},196:function(e,n,t){n=e.exports=t(176)(void 0),n.push([e.i,".subtitle {\n  color: #666;\n  font-size: 12px;\n  margin-bottom: 20px;\n}\n",""])},212:function(e,n,t){var r=t(213);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0};a.transform=void 0;t(177)(r,a);r.locals&&(e.exports=r.locals)},213:function(e,n,t){n=e.exports=t(176)(void 0),n.push([e.i,".info-header {\n  display: -webkit-box;\n  display: -moz-box;\n  display: flex;\n  margin-bottom: 40px;\n}\n.info-header .cover-img {\n  flex: 0 0 200px;\n  width: 200px;\n  height: 200px;\n  margin-right: 20px;\n  position: relative;\n}\n.info-header .cover-img > img {\n  width: 100%;\n  height: 100%;\n}\n.info-header .cover-img .play-count {\n  background-color: rgba(7,17,27,0.3);\n  font-size: 12px;\n  color: #fff;\n  position: absolute;\n  top: 0;\n  right: 0;\n  text-align: right;\n  width: 100%;\n}\n.info-header .info-header-right {\n  font-size: 14px;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  flex: 1;\n  box-flex: 1;\n  min-width: 0;\n}\n.info-header .info-header-right .title {\n  font-size: 20px;\n  color: #000;\n  margin-bottom: 12px;\n}\n.info-header .info-header-right .creator > div {\n  display: inline-block;\n  margin-bottom: 20px;\n  margin-right: 12px;\n  vertical-align: middle;\n}\n.info-header .info-header-right .creator .creator-avatar {\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  overflow: hidden;\n}\n.info-header .info-header-right .creator .creator-avatar > img {\n  width: 100%;\n  height: 100%;\n}\n.info-header .info-header-right .creator .creator-nickname {\n  color: #666;\n}\n.info-header .info-header-right .creator .create-time {\n  color: #aeaeaf;\n}\n.info-header .info-header-right .operation-buttons {\n  margin-bottom: 20px;\n}\n.info-header .info-header-right .operation-buttons > a {\n  background-color: rgba(249,249,249,0.82);\n  border-radius: 5px;\n  cursor: pointer;\n  display: inline-block;\n  height: 18px;\n  line-height: 18px;\n  font-size: 12px;\n  color: #000;\n  padding: 8px;\n  letter-spacing: 1px;\n}\n.info-header .info-header-right .tags {\n  font-size: 12px;\n  color: #7e8c8d;\n}\n.info-header .info-header-right .tags > span {\n  border-radius: 8px;\n  cursor: pointer;\n  display: inline-block;\n  height: 18px;\n  line-height: 18px;\n  margin: 0 10px 4px 0;\n  padding: 4px;\n}\n.info-header .info-header-right .playlist-desc > p {\n  color: #666;\n  cursor: pointer;\n  font-weight: 600;\n  line-height: 20px;\n  margin-top: 4px;\n  height: 40px;\n  overflow: hidden;\n  padding: 0 30px;\n  transition: all 0.5s;\n}\n.info-header .info-header-right .playlist-desc > p.more {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.info-header .info-header-right .playlist-desc > p.show {\n  height: auto;\n}\n",""])}});
//# sourceMappingURL=5.ff126a99.chunk.js.map