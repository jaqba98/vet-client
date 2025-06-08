# 🐾 Aplikacja Weterynarza – Dokumentacja Techniczna

## 📚 Spis treści
1. [Opis projektu](#opis-projektu)
2. [Architektura systemu](#architektura-systemu)
3. [Technologie](#technologie)
4. [Instalacja i uruchomienie](#instalacja-i-uruchomienie)
    - [Backend (Spring Boot)](#backend-spring-boot)
    - [Frontend (Angular)](#frontend-angular)
5. [Integracja z Azure](#integracja-z-azure)
6. [API REST](#api-rest)
7. [Bezpieczeństwo](#bezpieczeństwo)
8. [Baza danych](#baza-danych)
9. [Przykładowe dane testowe](#przykładowe-dane-testowe)
10. [Autorzy i licencja](#autorzy-i-licencja)

---

## 🐶 Opis projektu

Aplikacja Weterynarza to platforma internetowa umożliwiająca zarządzanie wizytami, pacjentami (zwierzętami), właścicielami oraz personelem weterynaryjnym. Projekt służy do celów edukacyjnych w ramach kursu **"Inteligentne Usługi Internetowe"**.

---

## 🏗 Architektura systemu

- **Frontend:** Angular 17
- **Backend:** Spring Boot 3.x
- **Baza danych:** PostgreSQL
- **Hosting:** Azure App Services (BE), Azure Static Web Apps (FE)
- **CI/CD:** GitHub Actions (opcjonalnie)

---

## 🧰 Technologie

| Komponent | Technologia |
|----------|-------------|
| Frontend | Angular, TypeScript, Angular Material |
| Backend | Java 17, Spring Boot, Spring Security, Spring Data JPA |
| Baza danych | PostgreSQL |
| Hosting | Microsoft Azure |
| Autoryzacja | JWT (JSON Web Tokens) |

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
