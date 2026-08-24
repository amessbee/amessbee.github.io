(function () {
  'use strict';
  var slides = Array.from(document.querySelectorAll('.slide'));
  var index = 0;
  var dots = document.getElementById('dotNav');
  var previous = document.getElementById('previous');
  var next = document.getElementById('next');
  var currentLabel = document.getElementById('currentSlide');
  var totalLabel = document.getElementById('slideTotal');
  var chapter = document.getElementById('chapter');
  var progress = document.getElementById('progressBar');
  var notesPanel = document.getElementById('notesPanel');
  var noteText = document.getElementById('noteText');
  var help = document.getElementById('help');

  function buildGraph(edgeSelector, nodeSelector, sparse) {
    var edgeLayer = document.querySelector(edgeSelector);
    var nodeLayer = document.querySelector(nodeSelector);
    if (!edgeLayer || !nodeLayer) return;
    var points = [[62,232],[105,102],[213,54],[339,84],[449,177],[430,316],[329,407],[190,391],[89,336],[216,218],[337,235],[252,316]];
    var sparseEdges = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0],[1,9],[9,10],[10,5]];
    var denseEdges = [];
    for (var i=0; i<points.length; i++) for (var j=i+1; j<points.length; j++) if ((i*5+j*7)%3 !== 0) denseEdges.push([i,j]);
    (sparse ? sparseEdges : denseEdges.slice(0,28)).forEach(function (pair) {
      var line = document.createElementNS('http://www.w3.org/2000/svg','line');
      line.setAttribute('x1',points[pair[0]][0]); line.setAttribute('y1',points[pair[0]][1]);
      line.setAttribute('x2',points[pair[1]][0]); line.setAttribute('y2',points[pair[1]][1]);
      edgeLayer.appendChild(line);
    });
    points.forEach(function (point, pointIndex) {
      var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
      circle.setAttribute('cx',point[0]); circle.setAttribute('cy',point[1]); circle.setAttribute('r',sparse ? 11 : 9);
      if (sparse && (pointIndex === 1 || pointIndex === 9)) circle.classList.add('seed');
      nodeLayer.appendChild(circle);
    });
  }

  buildGraph('.dense-edges','.dense-nodes',false);
  buildGraph('.sparse-edges','.sparse-nodes',true);
  totalLabel.textContent = slides.length;

  slides.forEach(function (_, slideIndex) {
    var button = document.createElement('button');
    button.type = 'button'; button.setAttribute('aria-label','Go to slide '+(slideIndex+1));
    button.addEventListener('click',function(){ show(slideIndex); }); dots.appendChild(button);
  });

  function updateNote() {
    var template = slides[index].querySelector('.speaker-note');
    noteText.textContent = template ? template.content.textContent.trim() : '';
  }

  function show(nextIndex) {
    index = Math.max(0,Math.min(slides.length-1,nextIndex));
    slides.forEach(function (slide, slideIndex) {
      var active = slideIndex === index;
      slide.classList.toggle('active',active);
      slide.setAttribute('aria-hidden',active ? 'false' : 'true');
    });
    Array.from(dots.children).forEach(function (dot,dotIndex){ dot.classList.toggle('active',dotIndex===index); });
    currentLabel.textContent = index+1;
    chapter.textContent = slides[index].dataset.chapter;
    progress.style.width = ((index+1)/slides.length*100)+'%';
    previous.disabled = index === 0; next.disabled = index === slides.length-1;
    history.replaceState(null,'','#slide-'+(index+1)); updateNote();
  }

  function toggleNotes(force) {
    var open = typeof force === 'boolean' ? force : notesPanel.hidden;
    notesPanel.hidden = !open;
    if (open) updateNote();
  }

  previous.addEventListener('click',function(){ show(index-1); });
  next.addEventListener('click',function(){ show(index+1); });
  document.querySelectorAll('[data-next]').forEach(function(button){ button.addEventListener('click',function(){ show(index+1); }); });
  document.getElementById('notesButton').addEventListener('click',function(){ toggleNotes(); });
  document.getElementById('closeNotes').addEventListener('click',function(){ toggleNotes(false); });
  document.getElementById('helpButton').addEventListener('click',function(){ help.hidden=false; });
  document.getElementById('closeHelp').addEventListener('click',function(){ help.hidden=true; });
  help.addEventListener('click',function(event){ if(event.target===help) help.hidden=true; });

  document.addEventListener('keydown',function(event){
    if (!help.hidden && event.key === 'Escape') { help.hidden=true; return; }
    if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') { event.preventDefault(); show(index+1); }
    if (event.key === 'ArrowLeft' || event.key === 'PageUp') { event.preventDefault(); show(index-1); }
    if (event.key === 'Home') show(0);
    if (event.key === 'End') show(slides.length-1);
    if (event.key.toLowerCase() === 'n') toggleNotes();
    if (event.key.toLowerCase() === 'f' && document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
  });

  var touchStart = 0;
  document.addEventListener('touchstart',function(event){ touchStart=event.changedTouches[0].clientX; },{passive:true});
  document.addEventListener('touchend',function(event){ var delta=event.changedTouches[0].clientX-touchStart; if(Math.abs(delta)>55) show(index+(delta<0?1:-1)); },{passive:true});
  var requested = parseInt(location.hash.replace('#slide-',''),10);
  show(Number.isFinite(requested) ? requested-1 : 0);
})();
