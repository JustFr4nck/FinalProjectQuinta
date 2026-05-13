# 🏦 FranckBank - Cyber-Banking Terminal v3.0 🚀

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PHP Slim](https://img.shields.io/badge/PHP_Slim-8892BF?style=for-the-badge&logo=php&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![OAuth2](https://img.shields.io/badge/Security-OAuth2.0-green?style=for-the-badge&logo=json-web-tokens)
![Bitcoin](https://img.shields.io/badge/Crypto-Bitcoin-orange?style=for-the-badge&logo=bitcoin)

> **FranckBank** è un ecosistema bancario digitale completo. Un'interfaccia futuristica gestisce un potente motore finanziario capace di elaborare transazioni in tempo reale, conversioni valutarie e asset digitali con standard di sicurezza bancari.

---

## ⚡ Funzionalità Core (Business Logic)

### 💸 Gestione Finanziaria & Asset
*   **Visualizzazione Lista Movimenti**: Elenco cronologico dettagliato di tutte le attività del conto con filtri dinamici.
*   **Deposito & Prelievo**: Funzioni di versamento e prelievo fondi con aggiornamento istantaneo del bilancio.
*   **Modifica & Eliminazione**: Gestione flessibile dei movimenti (rettifica causali o rimozione transazioni).
*   **Multicurrency Engine**: Conversione istantanea del saldo e dei movimenti in **USD ($)**.
*   **Crypto Dashboard**: Sistema di conversione in tempo reale del capitale in **Bitcoin (BTC)**, integrando tassi di cambio aggiornati.

### 🔐 Sicurezza & Accesso
*   **Login Sicuro OAuth2**: Implementazione dello standard OAuth2 per l'autenticazione delegata.
*   **Token-Based Auth**: Utilizzo di JWT (JSON Web Tokens) per sessioni stateless sicure tra Angular e PHP Slim.
*   **Access Control**: Protezione delle rotte lato client (Guards) e validazione degli scope lato server.

---

## 📱 User Experience & Design
*   **Adaptive Responsive Navbar**: Fix `100dvh` per una navigazione perfetta su tutti i dispositivi mobile.
*   **Account Terminal**: Menu popup desktop e sidebar mobile per la gestione profilo e impostazioni.
*   **Cyber-Design System**: Estetica neon-noir, glassmorphism e animazioni micro-interattive in JetBrains Mono.

---

## 🛠️ Stack Tecnologico

| Layer | Tecnologia |
| :--- | :--- |
| **Frontend** | Angular 17+ (Signals & Standalone Components) |
| **Styling** | Tailwind CSS (JIT Engine) |
| **Backend** | PHP Slim Framework 4 |
| **Database** | MySQL (InnoDb) |
| **Auth** | OAuth 2.0 / JWT |
| **APIs** | Exchange Rates & Crypto Price Feeds |

---

## 📂 Schema Database Esteso (SQL)

```sql
-- Tabella Account Utenti
CREATE TABLE `accounts` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `owner_name` VARCHAR(255) NOT NULL,
  `nickname` VARCHAR(50) NOT NULL UNIQUE,
  `profile_image` VARCHAR(500),
  `currency` CHAR(3) NOT NULL DEFAULT 'EUR',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `key_log` VARCHAR(255),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

-- Tabella Movimenti
CREATE TABLE `movements` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `account_id` INT(11) NOT NULL,
  `type` ENUM('DEPOSIT', 'WITHDRAW') NOT NULL,
  `amount` DECIMAL(15,2) NOT NULL,
  `description` TEXT,
  `date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`account_id`) REFERENCES `accounts`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB;
