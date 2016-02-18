/**
 * Created by markonofrio on 2/2/16.
 */
module.exports = function(grunt) {
    // Do grunt-related things in here

    grunt.initConfig({
        // Move Files into dist folder
        copy: {
            start: {
                files: [
                //JS
                    //{src: 'bower_components/jquery/dist/jquery.min.js', dest: 'dev/js', flatten: true, expand: true},
                    //{src: 'bower_components/bootstrap/dist/js/bootstrap.min.js', dest: 'dev/js', flatten: true, expand: true},
                //CSS
                    //{src: 'bower_components/bootstrap/dist/css/bootstrap.min.css', dest: 'dev/css', flatten: true, expand: true },
                    {src: 'bower_components/ink/css/ink.css', dest: 'dev/templates/css', flatten: true, expand: true},
                //FONTS
                    //{src: 'bower_components/bootstrap/dist/fonts/*', dest: 'dev/fonts', flatten: true, expand: true}
                ]
            },
            dev: {
                files: [
                    {src: 'jade/email-temp.html', dest: 'dev/templates/', flatten: true, expand: true},
                    {src: 'sass/email-temp-style.css', dest: 'dev/templates/css', flatten: true, expand: true},
                    {src: 'jade/email-temp.html', dest: 'dev/templates/', flatten: true, expand: true}
                ]
            }
        },

        // Remove CSS that is not being used
        uncss: {
            dev: {
                src: ['dev/templates/email-temp.html'],
                dest: 'dev/templates/css/tidy.css',
                options: {
                    report: 'min' // optional: include to report savings
                }
            }
        },

        // Replace all the development CSS files with the distribution
        processhtml: {
            // 'dist/email.html': ['source_file.html']
           dev: {
                files: [
                   // {'dev/templates/email-temp.html': ['dev/templates/email-temp.html']},
                    {'dev/index.html': ['dev/index.html']}
                ]
            }
        },

        // Inlines CSS while leaving the media queries
        premailer: {
           dev: {
                options: {
                    verbose: true
                },
                files: {
                    'dev/templates/email-temp-inline.html': ['dev/templates/email-temp.html']
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-premailer');

    var start = grunt.option('target') || 'start';
    var dev = grunt.option('target') || 'dev';

    // Pulls all Bower components to distribution folder
    grunt.registerTask('start', ['copy:' + start ]);

    // Inline email to Dev
    grunt.registerTask('dev', ['copy:' + dev, 'processhtml:' + dev, 'premailer:' + dev]);

};