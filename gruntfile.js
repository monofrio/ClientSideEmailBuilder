/**
 * Created by markonofrio on 2/2/16.
 */
module.exports = function(grunt) {
    // Do grunt-related things in here

    grunt.initConfig({
        // Move Files into dist folder
        copy: {
            main:{
                files:[
                    //HTML
                    {src: 'jade/index.html', dest: 'dist/', flatten: true, expand:true },

                    //JS
                    {src: 'bower_components/angular/angular.min.js', dest: 'dist/js', flatten: true, expand: true },
                    {src: 'bower_components/jquery/dist/jquery.min.js', dest: 'dist/js', flatten: true, expand: true },
                    {src: 'bower_components/bootstrap/dist/js/bootstrap.min.js', dest: 'dist/js', flatten: true, expand: true },
                    {src: 'bower_components/angular-wysiwyg/dist/angular-wysiwyg.min.js', dest: 'dist/js', flatten: true, expand: true },
                    {src: 'bower_components/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.min.js', dest: 'dist/js', flatten: true, expand: true },

                    //CSS
                    {src: 'bower_components/bootstrap/dist/css/bootstrap.min.css', dest: 'dist/css', flatten: true, expand: true },

                    //FONTS
                    {src: 'bower_components/bootstrap/dist/fonts/*', dest: 'dist/fonts', flatten: true, expand: true }

                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['copy']);

    grunt.loadNpmTasks('grunt-readme');
};
