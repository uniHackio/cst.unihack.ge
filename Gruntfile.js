 var DESTINATION = "sass";
 module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                // noCache: true,
                // debugInfo: true,
                style: 'expanded'
            },
            compile: {
                files: {
                    'css/screen.css': ['sass/screen.scss']
                }
                ////https://github.com/gruntjs/grunt-contrib-sass/blob/master/docs/sass-examples.md
                // files:[{
                //     expand: true,
                //     cwd: 'sass',
                //     src: ['*.s{c|a}ss'],
                //     dest: '.css/',
                //     ext: '.css'
                // }]
            }/*,
            dev: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css'
                }
            }*/
        },
        
        connect: {
            livereload: {
                options: {
                    hostname : "*",
                    livereload: true,
                    base: '.',
                    port: 8000,
                },
            },
            server: {
                options: {
                    hostname : "*",
                    base: DESTINATION,
                    port: 8000,
                    keepalive: true
                }
            }
        },
        watch: {
            sass:{
                files: 'sass/*.{sass,scss}',
                tasks: ['sass:compile']
            },
            assets: {
                files: ['*.html', 'css/*.css', 'js/*.js','img/*.{gif,jpeg,jpg,png,svg,webp}'],
                options: {
                    livereload: true,
                },
            }
        }
    }); 

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', [
        'connect:livereload',
        'watch'
    ]);
    grunt.registerTask('server', [
        'connect:server'
    ]);
};