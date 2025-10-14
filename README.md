# 🧪 Playwright API Testing – The Internet HerokuApp

This project uses **Playwright** with **TypeScript** to automate API and UI testing for the [Internet HerokuApp](https://the-internet.herokuapp.com/).  
The goal is to validate all key endpoints and interactions while maintaining a clean, modular test structure.

---

## 🚀 Project Overview

This project was bootstrapped using **pnpm** and Playwright’s official test runner.  
It focuses on **end-to-end API testing** and includes reusable **Page Object Models (POMs)** for web pages.

You’ll find examples of:
- Base and derived page classes
- Lazy-loaded page object instances
- API request validations
- Parallel test execution

---

## 🧱 Project Structure

```

.
├── playwright.config.ts       # Global Playwright configuration
├── package.json               # Project dependencies and scripts
├── tests/                     # All test specs go here
│   ├── api/                   # API test files
│   ├── ui/                    # UI test files
│   └── utils/                 # Helper functions or data files
├── pages/                     # Page Object Models (POMs)
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   ├── SecurePage.ts
│   ├── CheckboxesPage.ts
│   └── ManagePage.ts
└── README.md

````

---

## 🧩 Setup & Installation

```bash
# 1. Clone this repository
git clone https://github.com/<your-username>/playwright-internet-herokuapp.git

# 2. Navigate into the project directory
cd playwright-internet-herokuapp

# 3. Install dependencies using pnpm
pnpm install
````

---

## 🧠 Useful Commands

These scripts are defined in your `package.json` file:

```json
"scripts": {
  "test": "playwright test",
  "test:headed": "playwright test --headed",
  "test:ui": "playwright test --ui",
  "test:report": "playwright show-report",
  "test:debug": "playwright test --debug",
  "test:chromium": "playwright test --project=chromium",
  "test:firefox": "playwright test --project=firefox",
  "test:webkit": "playwright test --project=webkit"
}
```

### Run commands

```bash
pnpm test             # Run all tests in headless mode
pnpm test:headed      # Run tests with visible browser
pnpm test:ui          # Run tests using Playwright UI mode
pnpm test:report      # View last HTML test report
pnpm test:debug       # Debug failing tests interactively
```

---

## 🌐 Target Application

All tests target:
**[The Internet HerokuApp](https://the-internet.herokuapp.com/)**

Endpoints include:

* `/login` – authentication
* `/secure` – post-login protected area
* `/checkboxes` – checkbox interactions
* `/status_codes` – API status verification
* `/upload` – file uploads

---

## 🧩 Example Base Page

```ts
import { Page } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  protected async goToUrl(path: string) {
    await this.page.goto(path);
  }
}
```

---

## 🧭 ManagePage (Lazy Loading Example)

```ts
export default class ManagePage {
  constructor(private readonly page: Page) {}

  private _loginPage?: LoginPage;
  private _securePage?: SecurePage;
  private _checkboxesPage?: CheckboxesPage;

  get loginPage(): LoginPage {
    return this._loginPage ??= new LoginPage(this.page);
  }

  get securePage(): SecurePage {
    return this._securePage ??= new SecurePage(this.page);
  }

  get checkboxesPage(): CheckboxesPage {
    return this._checkboxesPage ??= new CheckboxesPage(this.page);
  }
}
```

---

## 🧾 Reports

After a test run, Playwright automatically generates an HTML report in the `playwright-report/` folder.

To view it:

```bash
pnpm test:report
```

---

## 🧰 Tech Stack

* **Playwright** – Test automation framework
* **TypeScript** – Static typing and better tooling
* **pnpm** – Fast package manager
* **Page Object Model (POM)** – Scalable test structure

---

## 🧑‍💻 Author

**[M-b-a-s]**
QA Engineer | Test Automation | Playwright Enthusiast
📧 [mbasernest@outlook.com](mailto:mbasernest@outlook.com)
🌐 [LinkedIn Profile](https://linkedin.com/in/ifechimenim)

---

## 🏁 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

```