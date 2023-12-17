# React LinkedIn Clone

<img src="https://github.com/Shaban-Eissa/React-LinkedIn-Clone/assets/49924090/3e568ac1-7172-4e2d-a273-775a08bd26b7" width="400" height="100" />

A React project aiming to replicate the features and design of the LinkedIn platform.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)


## Features

- **User Authentication:** Allows users to sign up, log in.
- **News Feed:** Displays a dynamic news feed with user posts and updates.


## Demo

<img src="https://github.com/Shaban-Eissa/React-LinkedIn-Clone/assets/49924090/aec3baeb-337e-4e8a-98f8-0825a4296fcf" width="900" height="380" />

Check out the live demo https://react-linked-in-clone-sage.vercel.app

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Shaban-Eissa/React-LinkedIn-Clone.git
   ```

2. **Install dependencies:**
    
    ```bash
    cd React-LinkedIn-Clone
    npm install
    ```
    
3. **Firebase Configuration:**
    
    In the `src/app/firebase.js` file, replace the placeholder values with your actual Firebase configuration:
    
    ```javascript  
    const firebaseConfig = {
      apiKey: 'your_api_key',
      authDomain: 'your_auth_domain',
      projectId: 'your_project_id',
      storageBucket: 'your_storage_bucket',
      messagingSenderId: 'your_messaging_sender_id',
      appId: 'your_app_id',
    };
    
    ```
    
    Replace `'your_api_key'`, `'your_auth_domain'`, etc., with your actual Firebase configuration values.
    
4. **Run the development server:**
    
    ```bash
    npm start
    ```
    
    Open your browser and navigate to `http://localhost:3000` to view the LinkedIn clone.
    

## Usage

* **User Authentication:**
    
    Users can sign up, log in.
    
* **Create Posts:**
    
    Users create posts.
    

## Technologies

- React
- Redux
- React-redux
- Redux-toolkit
- Firebase
- Material-ui

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Your feedback and contributions are highly appreciated.
