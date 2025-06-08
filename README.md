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

### 1️⃣ Uruchomienie backendu z Docker Compose

- Przejdź do repozytorium backendu:  
  [https://github.com/jaqba98/vet-server](https://github.com/jaqba98/vet-server)

- W katalogu projektu uruchom Docker Compose, który uruchomi wszystkie niezbędne usługi (np. bazę danych PostgreSQL):
  ```bash
  docker-compose up -d
  ```

- Sprawdź, czy usługi działają poprawnie (np. `docker ps`).

---

### 2️⃣ Uruchomienie serwera Spring Boot

- W tym samym repozytorium, po uruchomieniu Docker Compose, uruchom backend Spring Boot:
  ```bash
  ./mvnw spring-boot:run
  ```

- Backend powinien nasłuchiwać pod domyślnym portem (np. 8080).

---

### 3️⃣ Uruchomienie frontendu Angular

- Przejdź do repozytorium frontendu:  
  [https://github.com/jaqba98/vet-client](https://github.com/jaqba98/vet-client)

- Zainstaluj zależności:
  ```bash
  npm install
  ```

- Skonfiguruj URL API w pliku `environment.ts` (domyślnie `http://localhost:8080/api`).

- Uruchom aplikację frontendową:
  ```bash
  ng serve
  ```

- Frontend będzie dostępny pod adresem `http://localhost:4200`.

---

**Teraz możesz korzystać z aplikacji, która komunikuje się z backendem i wykorzystuje inteligentne usługi Azure.**

---

## ☁️ Integracja z Azure

Aby poprawnie uruchomić backend z integracją usług Azure, należy skonfigurować plik `application.yml` lub `application.properties` z następującymi ustawieniami:

```properties
spring.application.name=vet-server

spring.datasource.url=jdbc:postgresql://localhost:5432/vet_db
spring.datasource.username=postgres
spring.datasource.password=postgres

spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.properties.hibernate.format_sql=true

# Klucz i region usługi Azure Speech to Text
azure.speech.key=YOUR_AZURE_SPEECH_KEY
azure.speech.region=YOUR_AZURE_REGION

# Endpoint i klucz usługi Azure Language (np. do analiz i chatbotów)
azure.language.endpoint=YOUR_AZURE_LANGUAGE_ENDPOINT
azure.language.key=YOUR_AZURE_LANGUAGE_KEY
```

---

## 🔗 API REST ---

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
