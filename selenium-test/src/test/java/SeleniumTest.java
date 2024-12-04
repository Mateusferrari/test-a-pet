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

  @Test
  @DisplayName("Testando inserção de data")
  void testAdicionarNovoAgendamentoComData() throws InterruptedException {
    final var softly = new SoftAssertions();
    driver.get(BASE_URL);
    WebElement botaoAdicionar = driver.findElement(By.cssSelector(".sc-cHqXqK.kZzwzX"));
    botaoAdicionar.click();
    Thread.sleep(3000);
    WebElement modal = driver.findElement(By.cssSelector(".sc-hJRrWL.iBpHYd"));
    System.out.println("passou");
    WebElement campoData = driver.findElement(By.cssSelector("input[type='date']"));
    System.out.println("passou 2");
    campoData.sendKeys("10/10/2030");
    System.out.println("passou 3");
    softly.assertThat(campoData.getAttribute("value")).isEqualTo("10/10/2030");
    softly.assertAll();
    driver.quit();
  }
  @Test
  @DisplayName("Testando inserção de hora")
  void testAdicionarHora() throws InterruptedException {
    final var softly = new SoftAssertions();
    driver.get(BASE_URL);
    WebElement botaoAdicionar = driver.findElement(By.cssSelector(".sc-cHqXqK.kZzwzX"));
    botaoAdicionar.click();
    Thread.sleep(3000);
    WebElement modal = driver.findElement(By.cssSelector(".sc-hJRrWL.iBpHYd"));
    WebElement campoHora = driver.findElement(By.cssSelector("input[type='hour']"));
    campoHora.sendKeys("10:30");
    softly.assertThat(campoHora.getAttribute("value")).isEqualTo("10:30");
    softly.assertAll();
    driver.quit();
  }

}
