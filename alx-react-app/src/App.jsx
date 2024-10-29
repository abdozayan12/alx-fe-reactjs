import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer';
import './App.css'
import UserProfile from './components/UserProfile'; 

function App() {
  return (
    <>
    <div>
    <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </div>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
