# 🧸 Toy Universe: Secure Online Toy Marketplace

> A modern, secure, and fully responsive toy marketplace built using React and Firebase. This application provides a seamless experience for users to explore toys, manage personal listings, and securely handle user authentication.

## 🔗 Live URL

[**🌐 Toy Universe**](https://toy-universe-bd.web.app/)

---

## 🖼️ Project Showcase

<img src="https://i.ibb.co.com/BHCF1z0P/image.png" alt="Toy Universe Marketplace Screenshot" />

---

## 🎯 Project Overview & Purpose

Toy Universe is designed to deliver a modern online toy store experience where users are empowered to manage their own content. The core objectives are:

* Browse and view detailed information for various toy listings.
* **Securely authenticate** (Log in/Register) using Firebase Authentication.
* **CRUD Operations:** Add, edit, and delete their self-created toy listings.
* Dynamically update personal profile information.
* Ensure **responsive UI** across all devices for an optimal user experience.

---

## 🚀 Key Features

### ✅ Authentication System
* Complete Firebase-based login, registration, and logout functionalities.
* **Security:** Implemented password reset capability via email.
* **Protected Routes:** Ensures only authorized and authenticated users can access specific pages (e.g., adding a toy, viewing own listings).

### ✅ User Profile Management
* Displays critical user information (name, email, and profile photo).
* Allows dynamic editing and updating of user information via the Firebase `updateProfile()` method.

### ✅ Toy Management
* **Data Handling:** Functions to add, update, and remove toy data.
* **Display:** Toys are presented in organized categories, alongside dedicated detailed toy pages.

### ✅ User Experience (UX)
* **Responsive UI:** Optimized for mobile, tablet, and desktop viewing using **Tailwind CSS**.
* **Error Handling:** Utilizes `react-hot-toast` for clear and non-intrusive toast notifications for success actions and errors.
* **Navigation:** Features a custom **404 error page** with helpful navigation options.

---

## 🧠 Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Core** | React | Primary JavaScript library for building the UI. |
| **Styling** | Tailwind CSS & DaisyUI | Utility-first CSS framework and component library for rapid, responsive design. |
| **Authentication** | Firebase | Robust service handling user sign-up, sign-in, and profile updates. |
| **Routing** | React Router | Declarative routing for navigation and protected routes. |
| **Deployment** | Netlify / Firebase Hosting | Platform used for hosting the live application. |

### 🧩 npm Packages Used

| Package | Purpose |
| :--- | :--- |
| **react-router-dom** | Handling routing and navigation within the app. |
| **firebase** | Core library for Authentication and data persistence. |
| **react-hot-toast** | Providing clean and interactive toast notification alerts. |
| **react-icons** | Access to a wide collection of modern icons for UI enhancement. |
| **prop-types** | For JavaScript type checking, ensuring prop validity in components. |

---

## 💻 Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/toy-universe.git
   ```

   
2.  Install Dependencies
  ```bash
   npm install
   ```

3. Run Development Server
    ```bash
   npm run dev
   ```

4. Open Browser
      ```bash
   http://localhost:5173
   ```

      ## 🧑‍💻 Connect with the Developer

Thank you for checking out Toy Universe! Feel free to connect with me.

| Platform | Link |
| :--- | :--- |
| **GitHub** | [GitHub](https://github.com/siddikur-dev) |
| **LinkedIn** | [LinkedIn](https://www.linkedin.com/in/dev-siddikur/) |
| **Portfolio** | [Portfolio](http://siddikur-dev.web.app/) |
