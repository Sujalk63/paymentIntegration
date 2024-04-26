import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from './components/Home'
import { PaymentSuccess } from './components/PaymentSuccess'


function App() {

  return (
    <Router>
        <Routes>
            <Route path='/home' element={ <Home></Home> } ></Route>
            <Route path='/paymentsuccess' element={<PaymentSuccess></PaymentSuccess>} ></Route>
        </Routes>
    </Router>
  )
}

export default App



// set the vite port to 3001 instead of 3000 becuz backend and fornt end where conflicting on same port for which paymentsuccess page what not rendering
