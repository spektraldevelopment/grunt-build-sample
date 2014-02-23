module.exports = function(grunt) {

    // configure the tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: {
                src: ["build"]
            },
            scripts: {
                src: ["build/*.js", "!build/NodeMaker-min.js"]
                //You can add multiple ignore files
                //"build/*.js", "!build/NodeMaker-min.js", "!build/Files.js"
            }
        },
        copy: {
            build: {
                cwd: "src",
                src: ["**"],
                dest: "build",
                expand: true
            }
        },
        uglify: {
            build: {
                options: {
                    mangle: true
                },
                files: {
                    'build/NodeMaker-min.js': [ 'build/NodeMaker.js' ]
                }
            }
        },
        watch: {
            scripts: {
                files: "src/*.js",
                tasks: ["scripts"]
            },
            copy: {
                files:{
                    files: ["src/**", "!src/*.js"],
                    tasks: ["copy"]
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 4000,
                    base: "build",
                    hostname: "*"
                }
            }
        }
    });

    //Copies files from src folder to build folder - command: grunt copy
    grunt.loadNpmTasks("grunt-contrib-copy");

    //Wipes the build folder clean of files - command: grunt clean
    grunt.loadNpmTasks("grunt-contrib-clean");

    //Minifies files - command: grunt uglify
    grunt.loadNpmTasks("grunt-contrib-uglify");

    //Watch files for changes - command: grunt watch
    grunt.loadNpmTasks("grunt-contrib-watch");

    //Development server - command: grunt connect
    grunt.loadNpmTasks("grunt-contrib-connect");

    //Build
    grunt.registerTask(
        "build",
        "Compiles all of the assets and copies the files to the build directory.",
        ["clean", "copy", "uglify", "clean:scripts"]
    );

    //Scripts
    grunt.registerTask(
        "scripts",
        "Compiles the Javascript files.",
        ["uglify", "clean:scripts"]
    );

    //Default - command: grunt default
    grunt.registerTask(
        "default",
        "Watches the project for changes, automatically builds them and runs a server.",
        ["build", "connect", "watch"]
    );
};

//Based on http://www.sitepoint.com/writing-awesome-build-script-grunt/