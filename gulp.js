const report = require('multiple-cucumber-html-reporter');
 
report.generate({
    jsonDir: './reports/multiple-cucumber-json-report.json',
    reportPath: './reports/multiple-cucumber-html-report.html',
    metadata:{
        browser: {
            name: 'chrome',
            version: '74.0.3729.169'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows',
            version: '10'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'}
        ]
    }
});

gulp.task('cucumberReports', function() {
    report.generate();
})
