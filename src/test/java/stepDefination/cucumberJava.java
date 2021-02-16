package stepDefination;

import cucumber.annotation.After;
import cucumber.annotation.Before;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import cucumber.table.DataTable;

import java.io.IOException;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.WebElement;

public class cucumberJava {
	WebDriver driver = null;

	@Before
	public void setUp() {
		// System.setProperty("webdriver.gecko.driver","C:/Users/nilimapradipm/eclipse-workspace/CucumberTest/src/main/resources/geckodriver.exe");
		System.setProperty("webdriver.chrome.driver",
				"./src/main/resources/chromedriver.exe");
		// driver = new FirefoxDriver();
		driver = new ChromeDriver();
		System.out.println("This will run before the every Scenario");
	}
	
    


	@Given("^I open Facebook website$")
	public void goToFacebook() {
		driver.navigate().to("https://www.facebook.com/");
		// driver.navigate().to("https://www.javatpoint.com/register.jsp");

	}

	@Given("^I open JavaTpoint website$")
	public void goToJavaTpoint() {

		driver.navigate().to("https://www.javatpoint.com/register.jsp");

	}

	@Then("^Login button should exists$")
	public void loginButton() {

		// driver.findElement(By.cssSelector("button#u_0_b")).isDisplayed();
		System.out.println("Login Button exists");

	}

	@When("^User enters (\\w+) and (\\w+)$")
	public void user_enters_UserName_and_Password(String username, String password) throws Throwable {
		System.out.println(username);
		System.out.println(password);
		Thread.sleep(500);
		driver.findElement(By.cssSelector("input#email")).sendKeys(username);
		Thread.sleep(500);
		driver.findElement(By.cssSelector("input#pass")).sendKeys(password);
		// Thread.sleep(500);
		// driver.findElement(By.cssSelector("button#u_0_b")).click();
		// Thread.sleep(100000);
	}

	@When("^I enter invalid data on the page$")
	public void enterData(DataTable table) throws Throwable {
		// Initialize data table
		List<List<String>> data = table.raw();

		driver.findElement(By.id("cname")).sendKeys(data.get(1).get(1));
		driver.findElement(By.id("cemail")).sendKeys(data.get(2).get(1));
		driver.findElement(By.id("cpass")).sendKeys(data.get(3).get(1));

		// Add code for selecting button from dropdown

		// Add code for submit button
	}

	@Then("^Registration is successful$")
	public void registration_is_successful() throws Throwable {
		
		//assert 
		System.out.println("Registration successful Message");
	}

	@Then("^Message displayed incorrect$")
	public void measage_displayed_login_unsuccessful() throws Throwable {
		System.out.println("Error Message");
	}

	@After
	public void cleanUp() {
		driver.close();
		System.out.println("This will run after every Scenario");

	}

}