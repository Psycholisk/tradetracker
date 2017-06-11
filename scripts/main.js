requirejs.config({
    baseUrl: 'scripts/',
    paths: {
        jquery: 'jquery-1.11.1.min',
        bootstrap: 'bootstrap.min',
        helpers: 'helpers'
     //   script: 'script'
    }
});

requirejs(['script']);
