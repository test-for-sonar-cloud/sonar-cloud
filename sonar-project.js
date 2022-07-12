const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
    {
        serverUrl: "https://sonarcloud.io",
        token: "YOUR-TOKEN-HERE",
        options: {
            "sonar.sources": "./src",
            "sonar.exclusions": "**/__tests__/**",
            "sonar.tests": "./src/__tests__",
            "sonar.test.inclusions": "./src/__tests__/**/*.test.tsx,./src/__tests__/**/*.test.ts",
            "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
            "sonar.testExecutionReportPaths": "reports/test-report.xml",
        },
    },
    () => {},
);
