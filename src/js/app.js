// threshold allow 0 to 1, and this mean 0% to 100% element on viewport 
// rootMargin mean the container section make it larger rootMargin value or make smaller using Negetive mergin ( ex: -50px )
var config = { rootMargin: '20px 0px 20px 0px', threshold: 0 };

var preloadImage = function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.classList.add('loaded')
    return img 
};

var observer = new IntersectionObserver(function(entries, self) {
    entries.forEach(function(entry) {
        if(entry.isIntersecting) {
            preloadImage(entry.target);
            self.unobserve(entry.target);
        }
    });
}, config);

window.addEventListener('load', function() {
    document.querySelectorAll('[data-src]').forEach(function(img) {
        observer.observe(img);
    });
});