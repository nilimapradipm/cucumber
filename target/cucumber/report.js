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
  "duration": 3170676900,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.enterData(DataTable)"
});
formatter.result({
  "duration": 521376700,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.registration_is_successful()"
});
formatter.result({
  "duration": 94200,
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
  "duration": 2570312700,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginButton()"
});
formatter.result({
  "duration": 99200,
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
  "duration": 2361901900,
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
  "duration": 1271017200,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.measage_displayed_login_unsuccessful()"
});
formatter.result({
  "duration": 75200,
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
  "duration": 2472871600,
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
  "duration": 1271098100,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.measage_displayed_login_unsuccessful()"
});
formatter.result({
  "duration": 70100,
  "status": "passed"
});
});