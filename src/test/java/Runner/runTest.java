package Runner;
 
import org.junit.runner.RunWith; 
import cucumber.junit.Cucumber; 

@RunWith(Cucumber.class) 
//@Cucumber.Options(format = {"pretty", "html:target/cucumber"}) 
//@Cucumber.Options( format={"json:target/cucumber/cucumber.json"}) 
//@Cucumber.Options(format = {"pretty", "html:target/cucumber"}, tags = {"@login2"}) 
@Cucumber.Options(
  features = "features"
 ,glue={"stepDefination"}
 ,dryRun = false
 ,monochrome=true
 ,format = {"pretty", "html:target/cucumber"}

 )

public class runTest { }