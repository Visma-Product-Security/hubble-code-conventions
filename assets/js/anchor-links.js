document.addEventListener('DOMContentLoaded', function() {
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  
  headings.forEach(function(heading) {
    if (!heading.id) return;
    
    const anchor = document.createElement('a');
    anchor.className = 'header-anchor';
    anchor.href = '#' + heading.id;
    anchor.innerHTML = '<span class="anchor-icon">#</span>';
    anchor.title = 'Click to copy link to this section';
    
    anchor.addEventListener('click', function(e) {
      history.pushState(null, null, anchor.href);
      
      const url = window.location.href;
      
      try {
        navigator.clipboard.writeText(url).then(function() {
          const tooltip = document.createElement('span');
          tooltip.className = 'copied-tooltip';
          tooltip.textContent = 'Link copied!';
          anchor.appendChild(tooltip);
          
          setTimeout(function() {
            tooltip.remove();
          }, 2000);
        });
      } catch (err) {
        console.log('URL updated: ' + url);
      }
      
      e.preventDefault();
    });
    
    heading.appendChild(anchor);
  });
}); 