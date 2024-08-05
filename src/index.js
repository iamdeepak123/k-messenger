import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from "./Context/UserContext.jsx"
import AuthContextProvider from './Context/AuthContext.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>



    <AuthContextProvider>
      <UserContextProvider>

        <BrowserRouter>
          <App />
        </BrowserRouter>

      </UserContextProvider>
    </AuthContextProvider>







  </React.StrictMode>
);

reportWebVitals();
