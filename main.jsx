import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//mport './index.css'
import App from './App.jsx'

import Button from "./assets/WarmUp/Button.jsx";
import Input from "./assets/Ex1/Input.jsx";
import Table from "./assets/Ex2/Table.jsx";
import ContactForm from "./assets/Ex3/ContactForm.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactForm />
  </StrictMode>,
)
