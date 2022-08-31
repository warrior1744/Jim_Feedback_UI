

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import About from './pages/About'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Header/>
                <div className="container">
                <Routes>
                    <Route path='/' exact element={
                        <>
                            <FeedbackForm/>
                            <FeedbackStats />
                            <FeedbackList/>
                        </>
                    }>
                    </Route>  
                    <Route path='/about' element = {<About/>} />
                </Routes>
                <AboutIconLink/>
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App