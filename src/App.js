import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ContactPage from './pages/ContactPage/ContactPage'
import "./app.css";

export default function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="contact" element={<ContactPage />} />
    </Routes>
  )
}
