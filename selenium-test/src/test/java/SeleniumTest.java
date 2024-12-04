import io.github.bonigarcia.wdm.WebDriverManager;
import org.assertj.core.api.SoftAssertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class SeleniumTest {
  private WebDriver driver;
  private String BASE_URL = "https://test-a-pet.vercel.app/";

  @BeforeEach
  void setUp() {
    WebDriverManager.chromedriver().setup();
    ChromeOptions options = new ChromeOptions();
    options.addArguments("--remote-allow-origins=*");
    driver = new ChromeDriver(options);
  }

  @Test
  void testSiteIsOnline() {
    final var softly = new SoftAssertions();
    driver.get(BASE_URL);
    String currentUrl = driver.getCurrentUrl();
    System.out.println("URL carregada: " + currentUrl);
    softly.assertThat(currentUrl).isEqualTo(BASE_URL);;
    driver.quit();

  }

  @Test
  @DisplayName("Testando nome da página")
  void openProject() throws InterruptedException {
    final var softly = new SoftAssertions();
    driver.get(BASE_URL);
    Thread.sleep(1000);
    String pageTitle = driver.getTitle();
    System.out.println("Page Title: " + pageTitle);
    softly.assertThat(pageTitle).isEqualTo("Home | Test a pet");
    driver.quit();
    softly.assertAll();
  }
  @Test
  @DisplayName("Testando clique no botão 'Adicionar Novo Agendamento")
  void testAdicionarNovoAgendamento() throws InterruptedException {
    final var softly = new SoftAssertions();
    driver.get(BASE_URL);
    WebElement botaoAdicionar = driver.findElement(By.cssSelector(".sc-cHqXqK.kZzwzX"));
    botaoAdicionar.click();
    Thread.sleep(3000);
    WebElement modal = driver.findElement(By.cssSelector(".sc-hJRrWL.iBpHYd"));
    softly.assertThat(modal.isDisplayed()).isTrue();
    softly.assertAll();
    driver.quit();
  }
}
