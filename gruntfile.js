/**
 * Created by markonofrio on 2/2/16.
 */
module.exports = function(grunt) {
    // Do grunt-related things in here

    grunt.initConfig({
        // Move Files into dist folder
        copy: {
            main: {
                files: [
                        //HTML
                        {src: 'jade/index.html', dest: 'dist/', flatten: true, expand: true},

                        //JS
                        {src: 'bower_components/angular/angular.min.js', dest: 'dist/js', flatten: true, expand: true},
                        {src: 'bower_components/jquery/dist/jquery.min.js', dest: 'dist/js', flatten: true, expand: true},
                        {
                            src: 'bower_components/bootstrap/dist/js/bootstrap.min.js',
                            dest: 'dist/js',
                            flatten: true,
                            expand: true
                        },
                        {
                            src: 'bower_components/angular-wysiwyg/dist/angular-wysiwyg.min.js',
                            dest: 'dist/js',
                            flatten: true,
                            expand: true
                        },
                        {
                            src: 'bower_components/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.min.js',
                            dest: 'dist/js',
                            flatten: true,
                            expand: true
                        },

                        //CSS
                        {
                            src: 'bower_components/bootstrap/dist/css/bootstrap.min.css',
                            dest: 'dist/css',
                            flatten: true,
                            expand: true
                        },

                        //FONTS
                        {src: 'bower_components/bootstrap/dist/fonts/*', dest: 'dist/fonts', flatten: true, expand: true}

                    ]
            },
            emailDev: {
                files: [
                    {src: 'jade/templates/email-temp.html', dest: 'dist/templates', flatten: true, expand: true},
                    {src: 'bower_components/ink/css/ink.css', dest: 'dist/templates/css', flatten: true, expand: true},
                    {src: 'sass/temp-style.css', dest: 'dist/templates/css', flatten: true, expand: true}
                ]
            }
        },

        // Remove CSS that is not being used
        uncss: {
            dist: {
                 src: ['dist/templates/email-temp.html'],
                 dest: 'dist/templates/css/tidy.css',
                 options: {
                     report: 'min' // optional: include to report savings
                }
            }
        },

        // Replace all the development CSS files with the distribution
        processhtml: {
            dist: {
                files: {
                    'dist/templates/email-temp.html': ['dist/templates/email-temp.html']
                }
            }
        },

        // Inlines CSS while leaving the media queries
        premailer: {
            main: {
                options: {
                    verbose: true
                },
                files: {
                    'dist/templates/email-temp-inline.html': ['dist/templates/email-temp.html']
                }
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-premailer');

    var target = grunt.option('target') || 'main';

    grunt.registerTask('email', ['copy']);
    grunt.registerTask('body', ['copy:' + target]);
    grunt.registerTask('inline', ['uncss', 'processhtml', 'premailer']);

};
