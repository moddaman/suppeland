(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{I7GX:function(e,n,o){e.exports={video:"livePhoto_video__f8e1Y"}},QYxm:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/LivePhoto/livePhoto",function(){return o("mgFI")}])},Qetd:function(e,n,o){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},mgFI:function(e,n,o){"use strict";o.r(n);var t=o("q1tI"),r=o.n(t),c=o("I7GX"),i=o.n(c),u=r.a.createElement;n.default=function(e){var n=e.videoPath,o=e.interaction,r=Object(t.useRef)(null);Object(t.useEffect)((function(){r.current&&(r.current.preload="1")}),[r.current]);var c=function(){r.current&&(r.current.paused?r.current.play():r.current.pause())};return u("video",{className:i.a.video,loop:!0,preload:"none",ref:r,onMouseEnter:"HOVER"===o?c:function(){return console.log("hei")},onMouseLeave:"HOVER"===o?c:function(){return console.log("hei")},onClick:"CLICK"===o?c:function(){return console.log("hei")}},u("source",{src:n,type:"video/mp4"}),u("source",{src:"https://giant.gfycat.com/VerifiableTerrificHind.webm",type:"video/webm"}))}}},[["QYxm",0,1]]]);