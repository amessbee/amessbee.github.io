(function(){
  'use strict';
  var slides=Array.from(document.querySelectorAll('.slide'));
  var current=0;
  var dots=document.getElementById('dots');
  var currentLabel=document.getElementById('current');
  var prev=document.getElementById('prev');
  var next=document.getElementById('next');
  var help=document.getElementById('keyHelp');

  function graph(svgSelector,lineClass,nodeClass,sparse){
    var svg=document.querySelector(svgSelector); if(!svg)return;
    var lines=svg.querySelector('.'+lineClass),nodes=svg.querySelector('.'+nodeClass);
    var pts=[[45,170],[78,72],[145,42],[226,64],[288,137],[272,229],[203,286],[111,277],[60,229],[147,153],[212,177],[151,225]];
    var edges=sparse?[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0],[1,9],[9,10],[10,5],[9,11],[11,7]]:[];
    if(!sparse){for(var i=0;i<pts.length;i++)for(var j=i+1;j<pts.length;j++)if((i*7+j*11)%4!==0)edges.push([i,j]);}
    edges.forEach(function(e){var l=document.createElementNS('http://www.w3.org/2000/svg','line');l.setAttribute('x1',pts[e[0]][0]);l.setAttribute('y1',pts[e[0]][1]);l.setAttribute('x2',pts[e[1]][0]);l.setAttribute('y2',pts[e[1]][1]);lines.appendChild(l);});
    pts.forEach(function(p){var c=document.createElementNS('http://www.w3.org/2000/svg','circle');c.setAttribute('cx',p[0]);c.setAttribute('cy',p[1]);c.setAttribute('r',sparse?9:7);nodes.appendChild(c);});
  }
  graph('.dense-graph','auto-edges','auto-nodes',false); graph('.backbone svg','backbone-lines','backbone-nodes',true);

  slides.forEach(function(_,i){var b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Go to slide '+(i+1));b.addEventListener('click',function(){show(i);});dots.appendChild(b);});
  function show(index){current=Math.max(0,Math.min(slides.length-1,index));slides.forEach(function(s,i){s.classList.toggle('is-active',i===current);s.setAttribute('aria-hidden',i===current?'false':'true');});Array.from(dots.children).forEach(function(d,i){d.classList.toggle('active',i===current);});currentLabel.textContent=current+1;prev.disabled=current===0;next.disabled=current===slides.length-1;history.replaceState(null,'','#slide-'+(current+1));}
  prev.addEventListener('click',function(){show(current-1);});next.addEventListener('click',function(){show(current+1);});
  document.addEventListener('keydown',function(e){if(!help.hidden&&e.key==='Escape'){help.hidden=true;return;}if(e.key==='ArrowRight'||e.key==='PageDown'||e.key===' '){e.preventDefault();show(current+1);}if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();show(current-1);}if(e.key==='Home')show(0);if(e.key==='End')show(slides.length-1);if(e.key.toLowerCase()==='f'&&document.documentElement.requestFullscreen)document.documentElement.requestFullscreen();});
  var start=parseInt(location.hash.replace('#slide-',''),10);show(Number.isFinite(start)?start-1:0);
  document.getElementById('helpButton').addEventListener('click',function(){help.hidden=false;});document.getElementById('closeHelp').addEventListener('click',function(){help.hidden=true;});help.addEventListener('click',function(e){if(e.target===help)help.hidden=true;});
  var touchX=0;document.addEventListener('touchstart',function(e){touchX=e.changedTouches[0].clientX;},{passive:true});document.addEventListener('touchend',function(e){var dx=e.changedTouches[0].clientX-touchX;if(Math.abs(dx)>55)show(current+(dx<0?1:-1));},{passive:true});
})();
