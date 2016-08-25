module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    js_render: {
    	options: {},
    	files: {
    		'templates.js': ['views/**.html'],
    	},
    },
    uglify: {
      build: {
        src: 'js/*.js',
        dest: 'build/canvas.min.js',
      },
    },
    watch: {
    	js: {
    		files: ['js/*.js'],
    		tasks: ['uglify'],
    		options: {
    			spawn: false,
    		},
    	},
    	less: {
    		files: ['less/*.less'],
    		tasks: [''],
    		options: {
    			spawn: false,
    		},
    	},
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-js-render');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
};
