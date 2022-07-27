// create config object: rootMargin and threshold
// are two properties exposed by the interface
const config = {
    rootMargin: '5px 0px 50px 0px',
    threshold: 0
};

let preloadImage = function(img) {
    img.setAttribute('src', img.getAttribute('data-src')).addClass('loaded');
    return img 
}

// register the config object with an instance
// of intersectionObserver
let observer = new IntersectionObserver(function(entries, self) {
    // iterate over each entry
    entries.forEach(function(entry) {
        // process just the images that are intersecting.
        // isIntersecting is a property exposed by the interface
        if(entry.isIntersecting) {
            // custom function that copies the path to the img
            // from data-lazy to src
            preloadImage(entry.target);
            // the image is now in place, stop watching
            self.unobserve(entry.target);
        }
    });
}, config);



window.addEventListener('load', (event) => {
    const imgs = document.querySelectorAll('[data-src]');
    imgs.forEach(img => {
        observer.observe(img);
    });
});