module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    js_render: {
    	options: {},
    	files: {
    		'build/templates.js': ['views/**.html'],
    	},
    },
    uglify: {
   	  options: {
   	  	mangle: true,
   	  },
      build: {
        files: {
        	'build/canvas.min.js': ['config.js',
					'framework/*',
					'js/**/*.js',
					'js/variables/*.js',
					'vendor/*.js'],
        },
      },
    },
    less: {
    	production: {
    		options: {
    			paths: ['build'],
    		},
    		files: {
    			'build/canvas.css': 'less/*.less',
    		},
    	},
    },
    watch: {
    	js: {
    		files: ['config.js', 'framework/*.js', 'js/**/*.js', 'vendor/*.js'],
    		tasks: ['uglify'],
    		options: {
    			spawn: false,
    		},
    	},
    	less: {
    		files: ['less/*.less'],
    		tasks: ['less'],
    		options: {
    			spawn: false,
    		},
    	},
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-js-render');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'less']);
};
