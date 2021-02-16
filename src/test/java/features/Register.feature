Feature: RegisterFunctionality

@Register
Scenario: Register with invalid details
Given I open JavaTpoint website
When I enter invalid data on the page
| Fields                 | Values               |
| First Name             | nilima               |
| email                  | nilimam@yahoo.co.in  |  
| password               | password1            |  
Then Registration is successful
   
   
  