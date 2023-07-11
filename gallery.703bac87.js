(new class{fetchPhotos(){return fetch("https://jsonplaceholder.typicode.com/photos?_limit=12&_page=1").then((o=>{if(!o.ok)throw new Error(o.status);return o.json()}))}}).fetchPhotos().then((o=>{console.log(o)})).catch((o=>{console.warn(o)}));
//# sourceMappingURL=gallery.703bac87.js.map
