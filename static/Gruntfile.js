module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		coffee: {
			glob_to_multiple: {
				expand: true,
				flatten: false,
				cwd: 'coffee/',
				src: ['**/*.coffee'],
				dest: 'js/',
				ext: '.js'
			}
		},
		concat: {
			js: {
				src: [
					'js/app/app.js',
					'js/app/modules/*.js',
					'js/app/controllers/*.js',
					'js/app/services/*.js',
					'js/app/directives/*.js',
					'js/main.js'
				],
				dest: 'build/app.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			js: {
				src: ['build/app.js'],
				dest: 'build/drafter.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('compile', ['coffee', 'concat', 'uglify']);

}
