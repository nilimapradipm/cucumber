$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('features\Register.feature');
formatter.feature({
  "line": 1,
  "name": "RegisterFunctionality",
  "description": "",
  "id": "registerfunctionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Register with invalid details",
  "description": "",
  "id": "registerfunctionality;register-with-invalid-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open JavaTpoint website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter invalid data on the page",
  "rows": [
    {
      "cells": [
        "Fields",
        "Values"
      ],
      "line": 7
    },
    {
      "cells": [
        "First Name",
        "nilima"
      ],
      "line": 8
    },
    {
      "cells": [
        "email",
        "nilimam@yahoo.co.in"
      ],
      "line": 9
    },
    {
      "cells": [
        "password",
        "password1"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Registration is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.goToJavaTpoint()"
});
formatter.result({
  "duration": 5502512700,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.enterData(DataTable)"
});
formatter.result({
  "duration": 221007000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.registration_is_successful()"
});
formatter.result({
  "duration": 38600,
  "status": "passed"
});
formatter.uri('features\login.feature');
formatter.feature({
  "line": 1,
  "name": "LoginFunctionality",
  "description": "",
  "id": "loginfunctionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Login button exists",
  "description": "",
  "id": "loginfunctionality;login-button-exists",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Login1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open Facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Login button should exists",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.goToFacebook()"
});
formatter.result({
  "duration": 3125114500,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginButton()"
});
formatter.result({
  "duration": 28800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "loginfunctionality;login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Login2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I open Facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User enters username1 and password1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Message displayed incorrect",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.goToFacebook()"
});
formatter.result({
  "duration": 2236470300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username1",
      "offset": 12
    },
    {
      "val": "password1",
      "offset": 26
    }
  ],
  "location": "cucumberJava.user_enters_UserName_and_Password(String,String)"
});
formatter.result({
  "duration": 1150820100,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.measage_displayed_login_unsuccessful()"
});
formatter.result({
  "duration": 33600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "loginfunctionality;login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Login2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I open Facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User enters username2 and password2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Message displayed incorrect",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.goToFacebook()"
});
formatter.result({
  "duration": 2606762300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username2",
      "offset": 12
    },
    {
      "val": "password2",
      "offset": 26
    }
  ],
  "location": "cucumberJava.user_enters_UserName_and_Password(String,String)"
});
formatter.result({
  "duration": 13216253200,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d88.0.4324.182)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MAVHP122009\u0027, ip: \u0027192.168.1.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\NILIMA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52362}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 909121ffda0e844c084b5ade3707b868\n*** Element info: {Using\u003dcss selector, value\u003dinput#pass}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefination.cucumberJava.user_enters_UserName_and_Password(cucumberJava.java:65)\r\n\tat ✽.When User enters username2 and password2(features\\login.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "cucumberJava.measage_displayed_login_unsuccessful()"
});
formatter.result({
  "status": "skipped"
});
});