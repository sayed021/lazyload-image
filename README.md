# Lazy loading image 

*This demo link only work using BS VPN not allow outside/publik*
Normal Image: http://a-reza.aem23.net/content/abbvie-sitegenerator-ous/arzneimittelsuche/nonlazyimage.html?wcmmode=disabled
Lazy Image: http://a-reza.aem23.net/content/abbvie-sitegenerator-ous/arzneimittelsuche/lazyimage.html?wcmmode=disabled


Dam link for large Image: http://a-reza.aem23.net/assets.html/content/dam/abbvie-sitegenerator-ous/largeimage

Project Link: https://github.com/sayed021/lazyload-image
Git link for js: https://github.com/sayed021/lazyload-image/blob/main/src/js/app.js

// HTML for lazy image only needed to add ```data-src="your image sources"``` and remove src or add a minimul placeholder image for before load actual image 
```<img data-src="src/img/large-image.jpeg" alt="Trulli" style="width:100%" width="1920" height="1080">```


Scripts for lazy: 
-----------------------------
```
// start lazy script

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

// end lazy script
```