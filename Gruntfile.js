 module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass:{
            compile:{
                options: {
                    noLineComments: true,
                    sassDir: 'sass',
                    cssDir: 'css',
                    outputStyle: 'compact',
                    fontsDir: 'fonts',
                    javascriptsDir: 'js',
                    imagesDir: 'images',
                    httpPath : '/'
                }
            }
        },
        connect: {
            livereload: {
                options: {
                    hostname : "*",
                    livereload: true,
                    base: '.',
                    port: 3000,
                },
            },
            noLivereload: {
                options: {
                    hostname : "*",
                    livereload: false,
                    base: '.',
                    port: 3000,
                },
            },
            server: {
                options: {
                    hostname : "*",
                    port: 3000,
                    keepalive: true
                }
            }
        },
        watch: {
            sass:{
                files: ['sass/*.{sass,scss}','sass/*/*.{sass,scss}'],
                tasks: ['compass']
            },
            assets: {
                files: ['*.html', 'css/*.css', 'js/*.js','img/*.*'],
                options: {
                    livereload: true,
                },
            }
        }
    }); 

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', [
        'connect:noLivereload',
        'watch'
    ]);
    grunt.registerTask('live-server', [
        'connect:livereload',
        'watch'
    ]);
    grunt.registerTask('server', [
        'connect:server'
    ]);
};