$(document).ready(function(){
  $('head').prepend('<style>.gloader{position:relative}.gloaderinner{position:absolute;top:50%;left:50%;width:100px;height:100px;transform:translate(-50px,-50px);pointer-events:none}.gloaderinner>.gcircular{animation:gload 1s linear infinite;height:100px;width:100px}.gloaderinner>.gcircular>.gpath{animation:gash 1.5s ease-in-out infinite;stroke:#000;stroke-width:3;stroke-dasharray:1,200;stroke-dashoffset:0;stroke-linecap:square}@keyframes gload{100%{transform:rotate(360deg)}}@keyframes gash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}100%{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style>');
  $('.gloader').each(function(){
    $(this).append('<div class="gloaderinner"><svg class="gcircular"><circle class="gpath" cx="50" cy="50" r="20" fill="none"/></svg></div>');
  });
});