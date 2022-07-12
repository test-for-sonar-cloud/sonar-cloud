const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
    {
        serverUrl: "https://sonarcloud.io",
        options: {
            "sonar.sources": "./src",
            "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
            "sonar.testExecutionReportPaths": "reports/test-report.xml",
        },
    },
    () => {},
);
