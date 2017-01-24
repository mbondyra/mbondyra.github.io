var src = './app/',
    dist = './web/';

module.exports = {
    server: {
        root: dist + '',
        watch: dist + '**/*.*'
    },
    views: {
        src: src + 'views/**/*.*',
        dist: dist + '',
        task: 'pages'
    },
    scripts: {
        src: src + 'assets/scripts/**/*.*',
        entry: src + 'assets/scripts/app.js',
        dist: dist + 'resources/scripts/',
        task: 'scripts'
    },
    styles: {
        src: src + 'assets/styles/**/*.*',
        dist: dist + 'resources/styles/',
        task: 'styles'
    },
    images: {
        src: src + 'assets/images/**/*.*',
        dist: dist + 'resources/images/',
        task: 'images'
    }
};
