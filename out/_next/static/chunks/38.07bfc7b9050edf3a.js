"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{1038:function(e,n,t){t.r(n);var o=t(7294),i=t(4141),r=t(8754),u=t(5893);n.default=function(e){var n=e.isDesktop,t=(0,o.useState)({x:0,y:0}),i=t[0],r=t[1],d=(0,o.useState)("default"),s=d[0],c=d[1],f=function(e){r({x:e.clientX,y:e.clientY})};(0,o.useEffect)((function(){return window.addEventListener("mousemove",f),function(){return window.removeEventListener("mousemove",f)}}),[]);var l={default:{x:i.x-10,y:i.y-10,backgroundColor:"#0f3b56"},text:{x:i.x-50,y:i.y-50,height:100,width:100,backgroundColor:"rgba(250,84,87, 0.1)"}};return document.querySelectorAll(".link").forEach((function(e){e.addEventListener("mouseenter",(function(){c("text")})),e.addEventListener("mouseleave",(function(){c("default")}))})),n&&document.body.clientWidth>767&&(0,u.jsx)(a,{className:"cursor",variants:l,animate:s})};var a=(0,i.ZP)(r.E.div).withConfig({displayName:"Cursor__CursorMain",componentId:"sc-17naaml-0"})(["z-index:10000;background-color:#111;height:20px;width:20px;border-radius:50%;position:fixed;top:0;left:0;pointer-events:none;mix-blend-mode:difference;"])}}]);