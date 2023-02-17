import './App.css'
import { Routes, Route } from 'react-router-dom'
import UsersGridPage from './UsersGridPage/UsersGridPage'
import UserDetailsPage from './UserDetailsPage/UserDetailsPage'

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<UsersGridPage />} />
        <Route path="/details/:user_id" element={<UserDetailsPage />} />
      </Routes>
    </main>
  )
}

export default App