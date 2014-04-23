// Leaving the unused watch task here in case
// we need it again a near-future version.
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'lib/simpleslideview.js',
        dest: 'lib/simpleslideview.min.js'
      }
    },
    watch: {
      scripts: {
        files: ['lib/simpleslideview.js'],
        tasks: ['uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'watch']);

};