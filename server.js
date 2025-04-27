const browserSync = require('browser-sync').create();

browserSync.init({
    server: "./public",
    files: ["public/**/*.*"],
    port: 3000,
    open: false
});

console.log("Szerver elindult: http://localhost:3000");