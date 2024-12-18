import com.github.javafaker.Faker;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.assertj.core.api.SoftAssertions;
import org.junit.jupiter.api.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;
import java.util.concurrent.TimeUnit;

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
  Faker faker = new Faker();

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

    @Test
    @DisplayName("Verify 'Cancelar' button is present")
    void testCancelarButtonIsPresent() {
      final var softly = new SoftAssertions();
      driver.get(BASE_URL);

      WebElement botaoAdicionar = new WebDriverWait(driver, Duration.ofSeconds(10))
        .until(ExpectedConditions.elementToBeClickable(By.cssSelector(".sc-cHqXqK.kZzwzX")));
      botaoAdicionar.click();

      WebElement botaoCancelar = new WebDriverWait(driver, Duration.ofSeconds(10))
        .until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(".sc-jtQUzJ.kMjZHz")));
      softly.assertThat(botaoCancelar.isDisplayed()).isTrue();

      softly.assertAll();
    }

    @Test
    @DisplayName("Verify 'Enviar' button is present")
    void testEnviarButtonIsPresent() {
      final var softly = new SoftAssertions();
      driver.get(BASE_URL);

      WebElement botaoAdicionar = new WebDriverWait(driver, Duration.ofSeconds(10))
        .until(ExpectedConditions.elementToBeClickable(By.cssSelector(".sc-cHqXqK.kZzwzX")));
      botaoAdicionar.click();
      WebElement botaoEnviar = new WebDriverWait(driver, Duration.ofSeconds(10))
        .until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(".sc-jtQUzJ.jTycSN")));

      softly.assertThat(botaoEnviar.isDisplayed()).isTrue();

      softly.assertAll();
    }

    @Test
    @DisplayName("Verify 'Adicionar Novo Agendamento' button is present")
    void testBotaoAdicionarNovoAgendamentoPresente() {
      driver.get(BASE_URL);

      WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
      WebElement botaoAdicionar = wait.until(ExpectedConditions.presenceOfElementLocated(
        By.cssSelector(".sc-cHqXqK.kZzwzX")));
    }

    @Test
    @DisplayName("Verificar se todos os campos do formulário possuem labels ou placeholders")
    void testCamposFormularioPossuemLabelsOuPlaceholders() {
      driver.get(BASE_URL);
      WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
      WebElement botaoAdicionar = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".sc-cHqXqK.kZzwzX")));
      botaoAdicionar.click();

      WebElement campoNomePet = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("input[placeholder='Digite o nome do pet aqui']")));
      WebElement campoNomeProprietario = driver.findElement(By.cssSelector("input[placeholder='Insira o nome do proprietário']"));
      WebElement campoTelefone = driver.findElement(By.cssSelector("input[placeholder='Insira o telefone de contato']"));
      WebElement campoEspecie = driver.findElement(By.cssSelector("#react-select-2-input"));
      WebElement campoRaca = driver.findElement(By.cssSelector("input[placeholder='Digite a raça do pet aqui']"));
      WebElement campoNascimento = driver.findElement(By.cssSelector("input[type='date']"));
      WebElement campoVeterinario = driver.findElement(By.cssSelector("#react-select-3-input"));

      Assertions.assertTrue(
        campoNomePet.getAttribute("placeholder") != null || campoNomePet.getAttribute("aria-labelledby") != null,
        "O campo 'Nome do Pet' não possui label ou placeholder associado."
      );
      Assertions.assertTrue(
        campoNomeProprietario.getAttribute("placeholder") != null || campoNomeProprietario.getAttribute("aria-labelledby") != null,
        "O campo 'Nome do Proprietário' não possui label ou placeholder associado."
      );
      Assertions.assertTrue(
        campoTelefone.getAttribute("placeholder") != null || campoTelefone.getAttribute("aria-labelledby") != null,
        "O campo 'Telefone' não possui label ou placeholder associado."
      );
      Assertions.assertTrue(
        campoEspecie.getAttribute("aria-labelledby") != null || campoEspecie.getText() != null,
        "O campo 'Espécie do Pet' não possui label ou texto associado."
      );
      Assertions.assertTrue(
        campoRaca.getAttribute("placeholder") != null || campoRaca.getAttribute("aria-labelledby") != null,
        "O campo 'Raça do Pet' não possui label ou placeholder associado."
      );
      Assertions.assertTrue(
        campoNascimento.getAttribute("aria-labelledby") != null || campoNascimento.getAttribute("placeholder") != null,
        "O campo 'Data de Nascimento' não possui label ou placeholder associado."
      );
      Assertions.assertTrue(
        campoVeterinario.getAttribute("aria-labelledby") != null || campoVeterinario.getText() != null,
        "O campo 'Veterinário' não possui label ou texto associado."
      );
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
    @DisplayName("Fechar modal ao pressionar o botão 'Cancelar'")
    void testFecharModalAoPressionarCancelar() throws InterruptedException {
      driver.get(BASE_URL);
      WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
      WebElement botaoAdicionar = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".sc-cHqXqK.kZzwzX")));
      WebElement botaoCancelar = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".sc-jtQUzJ.kMjZHz")));
      botaoCancelar.click();
      boolean modalFechado = driver.findElements(By.cssSelector(".modal-agendamento")).isEmpty();
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
      softly.assertThat(campoData.getAttribute("value")).isEqualTo("2030-10-10");
      softly.assertAll();
    }

    @Test
    @DisplayName("Inserir data passada")
    void testInsertPastDate() throws InterruptedException {
      final var softly = new SoftAssertions();
      driver.get(BASE_URL);

      String pastDate = faker.date().past(10, TimeUnit.DAYS).toString();
      WebElement botaoAdicionar = driver.findElement(By.cssSelector(".sc-cHqXqK.kZzwzX"));
      botaoAdicionar.click();
      Thread.sleep(3000);
      WebElement campoData = driver.findElement(By.cssSelector("input[type='date']"));
      campoData.sendKeys(pastDate);

      softly.assertThat(campoData.getAttribute("value")).isEqualTo("");

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

    @Test
    @DisplayName("Testando inserção do telefone de contato do proprietário")
    void testAdicionarTelefoneProprietario() throws InterruptedException {
      final var softly = new SoftAssertions();
      driver.get(BASE_URL);
      WebElement botaoAdicionar = driver.findElement(By.cssSelector(".sc-cHqXqK.kZzwzX"));
      botaoAdicionar.click();
      Thread.sleep(3000);
      WebElement modal = driver.findElement(By.cssSelector(".sc-hJRrWL.iBpHYd"));
      WebElement campoTelefoneProprietario = driver.findElement(By.cssSelector("input[placeholder='Insira o telefone de contato']"));
      String fakePhone = faker.phoneNumber().cellPhone();
      campoTelefoneProprietario.sendKeys(fakePhone);
      softly.assertThat(campoTelefoneProprietario.getAttribute("value")).isEqualTo(fakePhone);
      softly.assertAll();
    }

    @Test
    @DisplayName("Testando inserção do nome do proprietário")
    void testAdicionarNomeProprietario() throws InterruptedException {
      final var softly = new SoftAssertions();
      driver.get(BASE_URL);
      WebElement botaoAdicionar = driver.findElement(By.cssSelector(".sc-cHqXqK.kZzwzX"));
      botaoAdicionar.click();
      Thread.sleep(3000);
      WebElement modal = driver.findElement(By.cssSelector(".sc-hJRrWL.iBpHYd"));
      WebElement campoNomeProprietario = driver.findElement(By.cssSelector("input[placeholder='Insira o nome do proprietário']"));
      String fakeOwnerName = faker.name().fullName();
      campoNomeProprietario.sendKeys(fakeOwnerName);
      softly.assertThat(campoNomeProprietario.getAttribute("value")).isEqualTo(fakeOwnerName);
      softly.assertAll();
    }

    @Test
    @DisplayName("Testando inserção da raça do pet")
    void testAdicionarRacaPet() throws InterruptedException {
      final var softly = new SoftAssertions();
      driver.get(BASE_URL);
      WebElement botaoAdicionar = driver.findElement(By.cssSelector(".sc-cHqXqK.kZzwzX"));
      botaoAdicionar.click();
      Thread.sleep(3000);
      WebElement modal = driver.findElement(By.cssSelector(".sc-hJRrWL.iBpHYd"));
      WebElement campoRacaPet = driver.findElement(By.cssSelector("input[placeholder='Digite a raça do pet aqui']"));
      String fakeBreed = faker.animal().name();
      campoRacaPet.sendKeys(fakeBreed);
      softly.assertThat(campoRacaPet.getAttribute("value")).isEqualTo(fakeBreed);
      softly.assertAll();
    }

    @Test
    @DisplayName("Testando seleção de opções no campo 'Veterinário'")
    void testSelecaoVeterinario() {
      final var softly = new SoftAssertions();
      driver.get(BASE_URL);
      WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(20));
      WebElement botaoAdicionar = wait.until(ExpectedConditions.elementToBeClickable(
        By.cssSelector(".sc-cHqXqK.kZzwzX")));
      botaoAdicionar.click();
      WebElement dropdownVeterinario = wait.until(ExpectedConditions.elementToBeClickable(
        By.cssSelector("#react-select-3-input")));
      dropdownVeterinario.click();
      WebElement opcaoVeterinario = wait.until(ExpectedConditions.elementToBeClickable(
        By.xpath("//div[text()='Dr. Maria']")));
      opcaoVeterinario.click();
      WebElement valorSelecionado = wait.until(ExpectedConditions.visibilityOfElementLocated(
        By.xpath("//*[text()='Dr. Maria']")));
      System.out.println("Valor selecionado no dropdown: " + valorSelecionado.getText());
      softly.assertThat(valorSelecionado.getText()).isEqualTo("Dr. Maria");
      softly.assertAll();
    }

    @Test
    @DisplayName("Testar inserção de telefone com formato inválido")
    void testInserirTelefoneInvalido() throws InterruptedException {
      final var softly = new SoftAssertions();
      driver.get(BASE_URL);

      WebElement botaoAdicionar = driver.findElement(By.cssSelector(".sc-cHqXqK.kZzwzX"));
      botaoAdicionar.click();
      Thread.sleep(3000);

      WebElement campoTelefone = driver.findElement(By.cssSelector("input[placeholder='Insira o telefone de contato']"));
      String invalidPhone = "1234-ABCD";
      campoTelefone.sendKeys(invalidPhone);
      WebElement botaoEnviar = driver.findElement(By.cssSelector(".sc-jtQUzJ.jTycSN"));
      botaoEnviar.click();
      WebElement campoTelefoneValor = driver.findElement(By.cssSelector("input[placeholder='Insira o telefone de contato']"));
      softly.assertThat(campoTelefoneValor.getAttribute("value")).isEqualTo(invalidPhone);

      softly.assertAll();
    }

    @Test
    @DisplayName("Validação de texto muito longo no campo 'Nome do Pet'")
    void testValidarTextoLongoNomePet() throws InterruptedException {
      final var softly = new SoftAssertions();
      driver.get(BASE_URL);
      WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
      WebElement botaoAdicionar = wait.until(ExpectedConditions.elementToBeClickable(
        By.cssSelector(".sc-cHqXqK.kZzwzX")));
      botaoAdicionar.click();
      WebElement campoNomePet = wait.until(ExpectedConditions.elementToBeClickable(
        By.cssSelector("input[placeholder='Digite o nome do pet aqui']")));
      campoNomePet.sendKeys("Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga");
      softly.assertThat(campoNomePet.getAttribute("value").length()).isLessThanOrEqualTo(128);
      softly.assertAll();
    }

    @Test
    @DisplayName("Validação de texto muito longo no campo 'Nome do Proprietario'")
    void testValidarTextoLongoNomeDono() throws InterruptedException {
      final var softly = new SoftAssertions();
      driver.get(BASE_URL);
      WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
      WebElement botaoAdicionar = wait.until(ExpectedConditions.elementToBeClickable(
        By.cssSelector(".sc-cHqXqK.kZzwzX")));
      botaoAdicionar.click();
      WebElement campoNomeProprietario = wait.until(ExpectedConditions.elementToBeClickable(
        By.cssSelector("input[placeholder='Insira o nome do proprietário']")));
      campoNomeProprietario.sendKeys("Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga");
      softly.assertThat(campoNomeProprietario.getAttribute("value").length()).isLessThanOrEqualTo(128);
      softly.assertAll();
    }

    @Test
    @DisplayName("Testar se o campo 'Nome do Proprietário' aceita números")
    void testNomeProprietarioAceitaNumeros() throws InterruptedException {
      final var softly = new SoftAssertions();
      driver.get(BASE_URL);
      WebElement botaoAdicionar = driver.findElement(By.cssSelector(".sc-cHqXqK.kZzwzX"));
      botaoAdicionar.click();
      Thread.sleep(3000);

      WebElement campoNomeProprietario = driver.findElement(By.cssSelector("input[placeholder='Insira o nome do proprietário']"));
      String nomeProprietarioComNumeros = "Carlos123 Silva";
      campoNomeProprietario.sendKeys(nomeProprietarioComNumeros);

      softly.assertThat(campoNomeProprietario.getAttribute("value")).isEqualTo(nomeProprietarioComNumeros);
      softly.assertAll();
    }

    @Test
    @DisplayName("Testar se o campo 'Nome do Pet' aceita números")
    void testNomePetAceitaNumeros() throws InterruptedException {
      final var softly = new SoftAssertions();
      driver.get(BASE_URL);
      WebElement botaoAdicionar = driver.findElement(By.cssSelector(".sc-cHqXqK.kZzwzX"));
      botaoAdicionar.click();
      Thread.sleep(3000);

      WebElement campoNomePet = driver.findElement(By.cssSelector("input[placeholder='Digite o nome do pet aqui']"));
      String nomePetComNumeros = "Rex123";
      campoNomePet.sendKeys(nomePetComNumeros);

      softly.assertThat(campoNomePet.getAttribute("value")).isEqualTo(nomePetComNumeros);
      softly.assertAll();
    }

    @Test
    @DisplayName("Validar mensagem de erro ao pressionar 'Adicionar' com campos vazios")
    void testMensagemErroAoPressionarAdicionar() {
      driver.get(BASE_URL);
      WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
      WebElement botaoAdicionarModal = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".sc-cHqXqK.kZzwzX")));
      botaoAdicionarModal.click();
      WebElement botaoAdicionar = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("button[type='submit']")));
      botaoAdicionar.click();
      WebElement mensagemErro = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(".sc-eauhAA.cknIPT")));
      Assertions.assertTrue(mensagemErro.isDisplayed(), "A mensagem de erro não foi exibida ao pressionar 'Adicionar' com campos obrigatórios vazios.");
    }
    @Test
    @DisplayName("Verificar se botão Adicionar está desabilitado com campos vazios")
    void testBotaoAdicionarDesabilitadoComCamposVazios() {
      driver.get(BASE_URL);

      WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

      // Abrir o modal
      WebElement botaoAdicionarModal = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".sc-cHqXqK.kZzwzX")));
      botaoAdicionarModal.click();
      System.out.println("Modal aberto.");

      // Verificar se o botão "Adicionar" está desabilitado
      WebElement botaoAdicionar = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("button[type='submit']")));
      boolean isDesabilitado = !botaoAdicionar.isEnabled();
      Assertions.assertTrue(isDesabilitado, "O botão 'Adicionar' deveria estar desabilitado com campos vazios.");
    }

  }
}
