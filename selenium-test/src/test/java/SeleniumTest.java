import io.github.bonigarcia.wdm.WebDriverManager;
import org.assertj.core.api.SoftAssertions;
import org.junit.jupiter.api.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

@DisplayName("Testes com Selenium para o site Test-a-Pet")
public class SeleniumTest {

  private WebDriver driver;
  private final String BASE_URL = "https://test-a-pet.vercel.app/";

  @BeforeEach
  void setUp() {
    WebDriverManager.chromedriver().setup();
    ChromeOptions options = new ChromeOptions();
    options.addArguments("--remote-allow-origins=*");
    driver = new ChromeDriver(options);
  }

  @AfterEach
  void tearDown() {
    if (driver != null) {
      driver.quit();
    }
  }

  @Nested
  @DisplayName("Testes básicos do site")
  class BasicTests {

    @Test
    @DisplayName("Verificar se o site está online")
    void testSiteIsOnline() {
      final var softly = new SoftAssertions();
      driver.get(BASE_URL);
      String currentUrl = driver.getCurrentUrl();
      System.out.println("URL carregada: " + currentUrl);
      softly.assertThat(currentUrl).isEqualTo(BASE_URL);
      softly.assertAll();
    }

    @Test
    @DisplayName("Validar o título da página")
    void testPageTitle() {
      final var softly = new SoftAssertions();
      driver.get(BASE_URL);
      String pageTitle = driver.getTitle();
      System.out.println("Page Title: " + pageTitle);
      softly.assertThat(pageTitle).isEqualTo("Home | Test a pet");
      softly.assertAll();
    }
  }

  @Nested
  @DisplayName("Testes de agendamento")
  class AppointmentTests {

    @Test
    @DisplayName("Abrir modal ao clicar no botão 'Adicionar Novo Agendamento'")
    void testOpenModal() throws InterruptedException {
      final var softly = new SoftAssertions();
      driver.get(BASE_URL);
      WebElement botaoAdicionar = driver.findElement(By.cssSelector(".sc-cHqXqK.kZzwzX"));
      botaoAdicionar.click();
      Thread.sleep(3000);
      WebElement modal = driver.findElement(By.cssSelector(".sc-hJRrWL.iBpHYd"));
      softly.assertThat(modal.isDisplayed()).isTrue();
      softly.assertAll();
    }

    @Test
    @DisplayName("Validar campos obrigatórios")
    void testValidateRequiredFields() throws InterruptedException {
      final var softly = new SoftAssertions();
      driver.get(BASE_URL);
      WebElement botaoAdicionar = driver.findElement(By.cssSelector(".sc-cHqXqK.kZzwzX"));
      botaoAdicionar.click();
      Thread.sleep(3000);
      WebElement botaoConfirmar = driver.findElement(By.cssSelector(".sc-jtQUzJ.jTycSN"));
      botaoConfirmar.click();
      Thread.sleep(3000);
      WebElement errorMessage = driver.findElement(By.xpath("//*[contains(text(), 'Campo Obrigatório')]"));
      softly.assertThat(errorMessage.isDisplayed()).isTrue();
      softly.assertAll();
    }
  }

  @Nested
  @DisplayName("Testes de preenchimento de formulário")
  class FormTests {

    @Test
    @DisplayName("Inserir data")
    void testInsertDate() throws InterruptedException {
      final var softly = new SoftAssertions();
      driver.get(BASE_URL);
      WebElement botaoAdicionar = driver.findElement(By.cssSelector(".sc-cHqXqK.kZzwzX"));
      botaoAdicionar.click();
      Thread.sleep(3000);
      WebElement campoData = driver.findElement(By.cssSelector("input[type='date']"));
      campoData.sendKeys("10/10/2030");
      softly.assertThat(campoData.getAttribute("value")).isEqualTo("10/10/2030");
      softly.assertAll();
    }

    @Test
    @DisplayName("Inserir hora")
    void testInsertTime() throws InterruptedException {
      final var softly = new SoftAssertions();
      driver.get(BASE_URL);
      WebElement botaoAdicionar = driver.findElement(By.cssSelector(".sc-cHqXqK.kZzwzX"));
      botaoAdicionar.click();
      Thread.sleep(3000);
      WebElement campoHora = driver.findElement(By.cssSelector("input[type='hour']"));
      campoHora.sendKeys("10:30");
      softly.assertThat(campoHora.getAttribute("value")).isEqualTo("10:30");
      softly.assertAll();
    }

    @Test
    @DisplayName("Inserir nome do pet")
    void testInsertPetName() throws InterruptedException {
      final var softly = new SoftAssertions();
      driver.get(BASE_URL);
      WebElement botaoAdicionar = driver.findElement(By.cssSelector(".sc-cHqXqK.kZzwzX"));
      botaoAdicionar.click();
      Thread.sleep(3000);
      WebElement campoNomePet = driver.findElement(By.cssSelector("input[placeholder='Digite o nome do pet aqui']"));
      campoNomePet.sendKeys("Rex");
      softly.assertThat(campoNomePet.getAttribute("value")).isEqualTo("Rex");
      softly.assertAll();
    }

    @Test
    @DisplayName("Selecionar espécie do pet")
    void testSelectPetSpecies() throws InterruptedException {
      final var softly = new SoftAssertions();
      driver.get(BASE_URL);
      WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
      WebElement botaoAdicionar = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".sc-cHqXqK.kZzwzX")));
      botaoAdicionar.click();
      WebElement dropdownEspecie = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".css-19bb58m")));
      dropdownEspecie.click();
      WebElement opcaoCachorro = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//div[text()='Cachorro']")));
      opcaoCachorro.click();
      WebElement valorSelecionado = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[text()='Cachorro']")));
      System.out.println("Valor selecionado: " + valorSelecionado.getText());
      softly.assertThat(valorSelecionado.getText()).isEqualTo("Cachorro");
      softly.assertAll();
    }
  }
}
