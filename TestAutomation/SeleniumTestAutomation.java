package web;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SeleniumTestAutomation {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		int count = 0;
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://localhost:3000/");
		System.out.println("Launching Application: Passed!");
		count++;
		
		//Sign in interface
	    //driver.findElement(By.xpath("//*[@id=\"root\"]/header/nav/div/button")).click();
	    Thread.sleep(1000);
	    driver.findElement(By.xpath("//*[@id=\"basic-navbar-nav\"]/div/a[2]")).click();
	    Thread.sleep(1000);
	    driver.findElement(By.xpath("//*[@id=\"root\"]/main/div/div/div/div/form/button")).click();
	    Thread.sleep(3000);
	    
	    //Register
	    driver.findElement(By.xpath("//*[@id=\"root\"]/main/div/div/div/div/div/div/a")).click();
	    Thread.sleep(1000);
	    driver.findElement(By.xpath("//*[@id=\"name\"]")).sendKeys("Sushil");
	    Thread.sleep(3000);
	    driver.findElement(By.xpath("//*[@id=\"email\"]")).sendKeys("sushil@gmail.com");
	    Thread.sleep(3000);
	    driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys("12345");
	    Thread.sleep(3000);
	    driver.findElement(By.xpath("//*[@id=\"confirmPassword\"]")).sendKeys("12345");
	    Thread.sleep(3000);
	    driver.findElement(By.xpath("//*[@id=\"root\"]/main/div/div/div/div/form/button")).click();
	    Thread.sleep(1000);
	    driver.findElement(By.xpath("//*[@id=\"username\"]")).click();
	    Thread.sleep(1000);
	    driver.findElement(By.xpath("//*[@id=\"basic-navbar-nav\"]/div/div/div/a[2]")).click();
	    Thread.sleep(1000);
	    System.out.println("Create a new account: Passed!");
	    count++;
	    
	    //Log in
	    driver.findElement(By.xpath("//*[@id=\"basic-navbar-nav\"]/div/a[2]")).click();
	    Thread.sleep(1000);
	    driver.findElement(By.xpath("//*[@id=\"email\"]")).sendKeys("sushil@gmail.com");
	    Thread.sleep(3000);
	    driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys("12345");
	    Thread.sleep(3000);
	    driver.findElement(By.xpath("//*[@id=\"root\"]/main/div/div/div/div/form/button")).click();
	    Thread.sleep(1000);
	    System.out.println("Account Log In: Passed!");
	    count++;
	    
	    //Select Car
	    driver.findElement(By.xpath("//*[@id=\"root\"]/main/div/div/div[3]")).click();
	    Thread.sleep(1000);
	    driver.findElement(By.xpath("//*[@id=\"root\"]/main/div/div/div[3]/div/div/div[3]/div/div[2]/select")).click();
	    Thread.sleep(1000);
	    driver.findElement(By.xpath("//*[@id=\"root\"]/main/div/div/div[3]/div/div/div[3]/div/div[2]/select")).sendKeys("15");
	    driver.findElement(By.xpath("//*[@id=\"root\"]/header/nav")).click();
	    Thread.sleep(3000);
	    System.out.println("Selecting a Car: Passed!");
	    count++;
	    //driver.findElement(By.xpath("//*[@id=\"root\"]/main/div/div/div[3]/div/div/div[3]/div/div[2]/select/option[10]")).click();
	    //Thread.sleep(1000);
	    driver.findElement(By.xpath("//*[@id=\"root\"]/main/div/div/div[3]/div/div/div[4]/button")).click();
	    Thread.sleep(3000);
	    driver.findElement(By.xpath("//*[@id=\"root\"]/main/div/div/div[1]/div/div/div/div[5]/button")).click();
	    Thread.sleep(1000);
	    System.out.println("Delete the Selected Car: Passed!");
	    count++;
	    //driver.findElement(By.xpath("//*[@id=\"root\"]/header/nav/div/button")).click();
	   // Thread.sleep(1000);
	    driver.findElement(By.xpath("//*[@id=\"username\"]")).click();
	    Thread.sleep(1000);
	    driver.findElement(By.xpath("//*[@id=\"basic-navbar-nav\"]/div/div/div/a[2]")).click();
	    Thread.sleep(1000);
	    System.out.println("Log out: Passed!");
	    count++;
		
	    //Shut down the app
	    driver.quit();
	    System.out.println("Test Case 1 Shut down: Passed!");
	    count++;
	    System.out.printf("Test Case Passed: %d of 7", count);
	}
}
