# 🐾 VetApp – Aplikacja Weterynarza – Dokumentacja Techniczna

# Wykonał:
Jakub Olejarczyk - s086748

## 📚 Spis treści
1. [Opis projektu](#opis-projektu)
2. [Technologie](#technologie)
3. [Instalacja i uruchomienie](#instalacja-i-uruchomienie)
    - [Backend (Spring Boot)](#backend-spring-boot)
    - [Frontend (Angular)](#frontend-angular)
4. [Integracja z Azure](#integracja-z-azure)
5. [API REST](#api-rest)
6. [Baza danych](#baza-danych)
7. [Przykładowe dane testowe](#przykładowe-dane-testowe)
8. [Autorzy i licencja](#autorzy-i-licencja)

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

## 🔗 API REST

## 1. Analiza tekstu (Azure Language Service)

* **Endpoint:** `POST /api/analyze`
* **Opis:** Analizuje tekst przy pomocy usługi Azure Language.
* **Request Body:** JSON z polem `text`, np.:

## 2. Obsługa nagrań (Recording)

* `POST /api/recordings` – Zapisuje nowe nagranie, zwraca zapisany obiekt.
* `GET /api/recordings` – Pobiera listę wszystkich nagrań.
* `GET /api/recordings/{id}` – Pobiera nagranie po id.
* `PUT /api/recordings/{id}` – Aktualizuje nagranie.
* `DELETE /api/recordings/{id}` – Usuwa nagranie.

## 3. Transkrypcja mowy (Speech to Text)

* **Endpoint:** `POST /api/speech-to-text`
* **Opis:** Przesyła plik audio (format webm), konwertuje go do wav, a następnie wysyła do Azure Speech to Text w celu rozpoznania mowy.

## 4. Zarządzanie użytkownikami

* **Endpoint:** `POST /api/v1/create-user`
* **Opis:** Tworzy nowego użytkownika lub informuje o jego istnieniu.

---

## 🗃️ Baza danych

```sql
# 💾 Struktura Bazy Danych

---

Poniżej przedstawiono schemat tabel bazy danych, które odpowiadają modelom encji używanym w aplikacji.

---

## Tabela: `recordings`

Ta tabela przechowuje informacje o nagraniach audio.

| Kolumna       | Typ danych SQL | Opis                                             | Ograniczenia            |
| :------------ | :------------- | :----------------------------------------------- | :---------------------- |
| `id`          | `UUID`         | **Klucz główny**. Unikalny identyfikator nagrania. | `NOT NULL`, `PRIMARY KEY` |
| `file_name`   | `VARCHAR(...)` | Nazwa pliku nagrania.                            | `NOT NULL`              |
| `created_at`  | `DATETIME`     | Data i czas utworzenia nagrania.                 | `NOT NULL`              |
| `transcript`  | `TEXT`         | Transkrypcja nagrania. Może być pusta.           | `NULL` (domyślnie)      |

---

## Tabela: `recording_analysis`

Tabela ta jest przeznaczona do przechowywania wyników analizy nagrań.

| Kolumna | Typ danych SQL   | Opis                                     | Ograniczenia            |
| :------ | :--------------- | :--------------------------------------- | :---------------------- |
| `id`    | `BIGINT`         | **Klucz główny**. Unikalny identyfikator analizy. | `NOT NULL`, `PRIMARY KEY` |
| `data`  | *Brak bezpośredniego mapowania* | Lista par klucz-wartość (szczegóły mogą zależeć od implementacji `KeyValuePair` i specyfiki bazy danych). |                        |

*Uwaga: W kontekście relacyjnej bazy danych, `List<KeyValuePair>` często jest implementowany jako osobna tabela, np. `recording_analysis_data`, z kolumnami takimi jak `analysis_id`, `key` i `value`, gdzie `analysis_id` byłoby kluczem obcym do tabeli `recording_analysis`.*

---

## Tabela: `users`

Ta tabela przechowuje informacje o użytkownikach systemu.

| Kolumna           | Typ danych SQL | Opis                                       | Ograniczenia                                                                    |
| :---------------- | :------------- | :----------------------------------------- | :------------------------------------------------------------------------------ |
| `id`              | `BIGINT`       | **Klucz główny**. Unikalny identyfikator użytkownika. | `NOT NULL`, `PRIMARY KEY`, `AUTO_INCREMENT` (lub sekwencja)                      |
| `home_account_id` | `VARCHAR(...)` | Unikalny identyfikator konta domowego użytkownika. | `NOT NULL`, `UNIQUE` (ograniczenie: `users_home_account_id_unique`) |
| `name`            | `VARCHAR(...)` | Pełne imię i nazwisko użytkownika.         | `NOT NULL`                                                                      |
| `username`        | `VARCHAR(...)` | Nazwa użytkownika (login).                 | `NOT NULL`                                                                      |
```
