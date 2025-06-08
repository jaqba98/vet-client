# 🐾 VetApp – Aplikacja Weterynarza – Dokumentacja Techniczna

## 📚 Spis treści
1. [Opis projektu](#opis-projektu)
2. [Technologie](#technologie)
3. [Instalacja i uruchomienie](#instalacja-i-uruchomienie)
    - [Backend (Spring Boot)](#backend-spring-boot)
    - [Frontend (Angular)](#frontend-angular)
4. [Integracja z Azure](#integracja-z-azure)
5. [API REST](#api-rest)
6. [Bezpieczeństwo](#bezpieczeństwo)
7. [Baza danych](#baza-danych)
8. [Przykładowe dane testowe](#przykładowe-dane-testowe)
9. [Autorzy i licencja](#autorzy-i-licencja)

---

## 🐶 Opis projektu

**VetApp** to nowoczesna aplikacja internetowa wspierająca codzienną pracę weterynarzy poprzez integrację z inteligentnymi usługami chmurowymi Microsoft Azure. Jej głównym celem jest automatyzacja i usprawnienie procesów diagnostycznych oraz komunikacyjnych w gabinecie weterynaryjnym.

System oferuje szereg funkcji klasycznych (zarządzanie pacjentami, wizytami, personelem), ale jego wyróżnikiem są **inteligentne usługi oparte na AI**, takie jak:

- 🎙️ **Głosowy wywiad z właścicielem zwierzęcia**  
  Aplikacja umożliwia przeprowadzenie wywiadu medycznego za pomocą mowy – wypowiedzi są automatycznie przekształcane na tekst (usługa Azure Speech to Text), a następnie analizowane pod kątem istotnych objawów lub słów kluczowych.

- 🤖 **Chatbot diagnostyczny oparty na Azure AI**  
  Użytkownicy (np. właściciele zwierząt lub recepcjoniści) mogą skorzystać z wbudowanego chatbota, który na podstawie kilku pytań potrafi wstępnie ocenić, czy dane zwierzę wymaga natychmiastowej konsultacji weterynaryjnej.

- 📈 **Analiza danych i raportowanie**  
  Dzięki integracji z usługami Azure możliwe jest zbieranie danych o wizytach, objawach i diagnozach w celu generowania statystyk oraz wniosków diagnostycznych w czasie rzeczywistym.

VetApp łączy klasyczne rozwiązania aplikacji medycznej z nowoczesną, konwersacyjną i inteligentną obsługą, stając się narzędziem przyszłości w pracy każdego weterynarza.

---

## 🧰 Technologie

- **Frontend:** Angular
- **Backend:** Spring Boot
- **Baza danych:** PostgreSQL
- **Inteligentne usługi:** Microsoft Azure (Speech to Text, Chatbot, AI)
- **Autoryzacja i logowanie:** Microsoft Entra (Azure AD)

---

## ⚙️ Instalacja i uruchomienie

### 📦 Backend (Spring Boot)

#### Wymagania:
- Java 17+
- Maven
- PostgreSQL

#### Instalacja:

```bash
git clone https://github.com/twoj-uzytkownik/vet-app-backend.git
cd vet-app-backend
```

Skonfiguruj `application.yml`:

```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/vet_db
    username: postgres
    password: postgres
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
```

Uruchom:

```bash
./mvnw spring-boot:run
```

---

### 🌐 Frontend (Angular)

#### Wymagania:
- Node.js 18+
- Angular CLI

#### Instalacja:

```bash
git clone https://github.com/twoj-uzytkownik/vet-app-frontend.git
cd vet-app-frontend
npm install
```

Konfiguracja API URL w `environment.ts`:

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

Uruchom:

```bash
ng serve
```

---

## ☁️ Integracja z Azure

### Backend
1. Utwórz **Azure App Service** (Java 17, Linux).
2. Skonfiguruj **Azure Database for PostgreSQL**.
3. Wdróż backend przez GitHub Actions lub FTP.
4. Skonfiguruj zmienne środowiskowe (`SPRING_DATASOURCE_URL`, itp.) w App Service.

### Frontend
1. Utwórz **Azure Static Web App**.
2. Wdróż kod z GitHub.
3. Ustaw `apiUrl` w `environment.prod.ts` do produkcyjnego backendu.

---

## 🔗 API REST

Przykładowe endpointy:

| Metoda | Endpoint | Opis |
|--------|----------|------|
| `GET` | `/api/pets` | Lista zwierząt |
| `POST` | `/api/appointments` | Dodaj wizytę |
| `GET` | `/api/owners/{id}` | Szczegóły właściciela |
| `POST` | `/api/auth/login` | Logowanie |

**Autoryzacja:** `Authorization: Bearer <token>`

---

## 🔐 Bezpieczeństwo

- JWT dla autoryzacji
- Role użytkowników: `ADMIN`, `VET`, `RECEPCJONISTA`
- Hashowanie haseł za pomocą BCrypt

---

## 🗃️ Baza danych

Struktura tabel (skrót):

- `users(id, username, password, role)`
- `owners(id, name, phone)`
- `pets(id, name, species, owner_id)`
- `appointments(id, date, pet_id, vet_id)`

---

## 🧪 Przykładowe dane testowe

```sql
INSERT INTO users (username, password, role)
VALUES ('admin', '$2a$10$xyz...', 'ADMIN');

INSERT INTO owners (name, phone) VALUES ('Jan Kowalski', '123456789');
INSERT INTO pets (name, species, owner_id) VALUES ('Burek', 'Pies', 1);
```

---

## 👨‍💻 Autorzy i licencja

- **Autor:** [Twoje imię i nazwisko]
- **Uczelnia:** [Nazwa uczelni]
- **Przedmiot:** Inteligentne Usługi Internetowe
- **Licencja:** MIT
