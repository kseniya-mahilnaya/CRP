function logCRP(){var a=window.performance.timing,b=a.domContentLoadedEventStart-a.domLoading,c=a.domComplete-a.domLoading,d=document.getElementById("crp-stats");d.textContent="DCL: "+b+"ms, onload: "+c+"ms"}window.addEventListener("load",function(a){logCRP()}),function(a,b){a.GoogleAnalyticsObject=b,a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)},a[b].l=1*new Date}(window,"ga"),ga("create","UA-XXXX-Y"),ga("send","pageview");