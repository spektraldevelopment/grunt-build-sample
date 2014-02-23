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
        }
    });

    //Copies files from src folder to build folder - command: grunt copy
    grunt.loadNpmTasks("grunt-contrib-copy");

    //Wipes the build folder clean of files - command: grunt clean
    grunt.loadNpmTasks("grunt-contrib-clean");

    //Minifies files - command: grunt uglify
    grunt.loadNpmTasks("grunt-contrib-uglify");

    // define the tasks
    grunt.registerTask(
        "build",
        "Compiles all of the assets and copies the files to the build directory.",
        ["clean", "copy", "uglify", "clean:scripts"]
    );
};

//Based on http://www.sitepoint.com/writing-awesome-build-script-grunt/