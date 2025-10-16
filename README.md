# PassVault-Frontend
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/arnab-git-404/PassVault-Frontend/tree/7dc4c17ec4879d3b129549112ed0f0e24e8409b9)

PassVault is a secure, client-side encrypted password manager designed to protect your digital identity. It provides a robust and user-friendly interface for storing, generating, and managing your passwords, with a strong emphasis on security and user privacy. All encryption and decryption operations happen locally on your device, ensuring that your unencrypted data, including your master password, is never sent to our servers.

## ✨ Key Features

*   **End-to-End Encryption:** Utilizes the browser's native `SubtleCrypto` API for AES-256-GCM encryption, the industry standard for securing data.
*   **Zero-Knowledge Architecture:** Your master password is never stored or transmitted. It is used locally to derive an encryption key.
*   **Secure Password Management:** Securely add, view, edit, and delete your login credentials.
*   **Password Generator:** Create strong, complex, and unique passwords with customizable options (length, uppercase, lowercase, numbers, symbols).
*   **Two-Factor Authentication (2FA):** Add an extra layer of security to your PassVault account using TOTP applications like Google Authenticator.
*   **Google Authentication:** Sign up or sign in quickly and securely using your Google account.
*   **Responsive Dashboard:** A clean and intuitive interface that works seamlessly across devices.
*   **Vault Management:** Easily lock and unlock your vault, with functionality to securely reset your master key and 2FA settings.

## 🛡️ Security Model

PassVault is built with a security-first mindset. The core of its security relies on a strong master password that you create and remember.

1.  **Master Password Creation:** When you set up your vault, you create a master password.
2.  **Key Derivation:** We use PBKDF2 with 100,000 iterations and a unique, randomly generated salt to derive a powerful 256-bit encryption key from your master password. This process happens entirely on your device.
3.  **Verification, Not Storage:** Your master password is *never* stored. Instead, we encrypt a standard verification string ("PASSVAULT_VERIFICATION") with the derived key. This encrypted hash is stored on the server. To unlock your vault, we re-derive the key from your entered password and attempt to decrypt the hash. A successful decryption confirms your password is correct without ever exposing it.
4.  **Client-Side Encryption:** All your passwords and other sensitive data are encrypted locally on your device using the derived key before being sent to the server for storage.
5.  **Client-Side Decryption:** When you unlock your vault, your encrypted data is fetched from the server and decrypted locally on your device.

This model ensures that even in the unlikely event of a server breach, your data remains secure and unreadable without your master password.

## 🛠️ Tech Stack

*   **Frontend:** React, Vite
*   **Styling:** Tailwind CSS
*   **Routing:** React Router
*   **State Management:** React Context API
*   **Animations:** Framer Motion
*   **Authentication:** Firebase (for Google Sign-In)
*   **HTTP Client:** Axios
*   **Cryptography:** Web Crypto API (`SubtleCrypto`) for AES-256-GCM & PBKDF2
*   **Notifications:** React Hot Toast

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (v18 or later)
*   npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/arnab-git-404/PassVault-Frontend.git
    cd PassVault-Frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add the necessary environment variables. You can use the `.Ex-env` file as a template:
    ```env
    VITE_APP_SERVER_URL='<your_backend_server_url>'
    
    # Firebase Configuration
    VITE_FIREBASE_API_KEY='<your_api_key>'
    VITE_FIREBASE_AUTH_DOMAIN='<your_auth_domain>'
    VITE_FIREBASE_PROJECT_ID='<your_project_id>'
    VITE_FIREBASE_STORAGE_BUCKET='<your_storage_bucket>'
    VITE_FIREBASE_MESSAGING_SENDER_ID='<your_sender_id>'
    VITE_FIREBASE_APP_ID='<your_app_id>'
    VITE_FIREBASE_MEASUREMENT_ID='<your_measurement_id>'
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Available Scripts

*   `npm run dev`: Starts the development server with Hot Module Replacement.
*   `npm run build`: Compiles and bundles the app for production.
*   `npm run lint`: Lints the project files using ESLint.
*   `npm run preview`: Starts a local server to preview the production build.

## 📂 Project Structure

The project follows a standard React application structure:

```
src/
├── assets/         # Static assets like images and icons
├── components/     # Reusable UI components (Navbar, PasswordManager, etc.)
├── context/        # React Context for global state management
├── pages/          # Top-level page components for each route
├── utility/        # Helper functions, including cryptography and setup logic
├── App.jsx         # Main application component with routing setup
└── main.jsx        # Entry point of the application
```
## ⚖️ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
