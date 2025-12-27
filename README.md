<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Elite Portfolio AI

A futuristic personal portfolio website featuring a "Digital Twin" AI chat powered by Google Gemini, built with React, Vite, and Tailwind CSS v4.

## 🚀 Key Features

* **Digital Twin Chat**: Interactive AI assistant powered by Google Gemini (1.5 Flash), capable of answering questions about your professional background in Markdown.
* **Modern Styling**: High-performance styling using **Tailwind CSS v4** (via `@tailwindcss/vite`).
* **Bilingual Support**: Seamless English and Chinese language switching.
* **Responsive Design**: Mobile-first approach ensuring a premium experience on all devices.
* **Automated Deployment**: Integrated GitHub Actions for continuous deployment to Cloudflare Pages.

## 🛠️ Tech Stack

* **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **AI**: [Google Gemini API](https://deepmind.google/technologies/gemini/) (`@google/genai` SDK)
* **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)

## 🏃 Run Locally

**Prerequisites:** Node.js (v18+)

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Jascenn/elite-portfolio-ai.git
    cd elite-portfolio-ai
    ```

2. **Install dependencies**:

    ```bash
    npm install
    # or
    npm ci
    ```

3. **Configure Environment Variables**:
    Create a `.env.local` file in the root directory and add your Gemini API Key:

    ```env
    VITE_GEMINI_API_KEY=your_gemini_api_key_here
    ```

    > **Note**: You can get an API key from [Google AI Studio](https://aistudio.google.com/).

4. **Start the development server**:

    ```bash
    npm run dev
    ```

## 🌐 Deployment

This project is configured for automated deployment to **Cloudflare Pages** via GitHub Actions.

### Setup (First Time)

1. **Cloudflare Credentials**:
    Ensure you have your `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN`.

2. **GitHub Secrets**:
    Go to your GitHub repository -> **Settings** -> **Secrets and variables** -> **Actions**, and add the following repository secrets:
    * `CLOUDFLARE_ACCOUNT_ID`
    * `CLOUDFLARE_API_TOKEN`

3. **Cloudflare Pages Config**:
    In your Cloudflare Pages project settings, manually set the production environment variable:
    * `VITE_GEMINI_API_KEY`: Your real Gemini API Key.

### Automated Workflow

Every time you push to the `main` branch, the [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) workflow will automatically build and deploy the latest version to Cloudflare Pages.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
