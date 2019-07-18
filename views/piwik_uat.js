var piwikURL = 'https://test.analytics.allianz.co.id/piwik/';
var piwikID  = '9';
var _paq = _paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  _paq.push(['setTrackerUrl', piwikURL + 'piwik.php']);
  _paq.push(['setSiteId', piwikID]);
  var d = document,
      g = d.createElement('script'),
      s = d.getElementsByTagName('script')[0];
  g.type  = 'text/javascript';
  g.async = true;
  g.defer = true;
  g.src   = piwikURL + 'piwik.js';
  s.parentNode.insertBefore(g, s);
})();
