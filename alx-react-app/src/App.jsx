import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer';
import './App.css'
import UserProfile from './components/UserProfile'; 

function App() {
  return (
    <>
    <div>
      <UserProfile name="Alice" age={25} bio="Frontend developer and cat lover." />
      <UserProfile name="Bob" age={30} bio="Guitarist and photographer." />
    </div>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
