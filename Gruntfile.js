module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babel: {
      options: {
        sourceMap: true,
        presets: ['env']
      },
      dist: {
        cwd: 'js',
        files: {
          'dist/app.js': 'js/src/index.js'
        }
      }
    },
    watch: {
      scripts: {
        files: ['./**/src/**/*.js'],
        tasks: ['babel'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('babel', ['babel']);
  grunt.registerTask('default', ['watch']);

};