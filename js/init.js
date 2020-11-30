
/* function to init reveal.js: */

function initReveal() {
  /* printing / pdf: */
  var link = document.createElement( 'link' );
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = window.location.search.match( /print-pdf/gi ) ? 'css/print/pdf.css' : 'css/print/paper.css';
  document.getElementsByTagName( 'head' )[0].appendChild( link );
  /* init real.js: */
  Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    transition: 'slide',
    dependencies: [
      { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } }
    ]
  });
}

/* add page load listener ... : */
window.addEventListener('load', function() {
  /* ... to init reveal.js: */
  initReveal();
});

