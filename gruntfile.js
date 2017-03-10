module.exports = function(grunt){
    var NODE_DIR = 'node_modules';
    grunt.initConfig({
        concat:{
            internal:{
              src:[
                  `${NODE_DIR}/jquery/dist/jquery.js`,
                  `${NODE_DIR}/bootstrap/dist/js/bootstrap.js`,
                  `${NODE_DIR}/plupload/js/plupload.full.min.js`,
                  `${NODE_DIR}/angular/angular.js`,
                  `${NODE_DIR}/angular-plupload/dist/angular-plupload.min.js`,
                  `${NODE_DIR}/angular-route/angular-route.js`,
                  `${NODE_DIR}/angular-resource/angular-resource.js`
              ],
                dest:'dist/internal.js'
            },
            dist:{
                src:['app/*.js','app/**/*.js'],
                dest:'dist/build.js'
            }
        },
        watch:{
            scripts:{
                files:['app/**/*.js'],
                tasks:['concat'],
                livereload:true
            },
            less:{
                files:['app/**/*.less'],
                tasks:['less'],
                livereload:true

            },
            html:{
                files:['app/**/*.js'],
                livereload:true
            }
        },
        less:{
            development:{
                files:{
                    'dist/styles.css':'app/all.less'
                }
            }

        },
        copy:{
            main:{
                files:[
                    {expand:true, src:['photon/css/*'], dest:'dist/', filter:'isFile'}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', ['concat','less', 'copy']);
    grunt.registerTask('watch', ['concat', 'less', 'copy', 'watch']);
};