import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import { STAFFS, DEPARTMENTS } from './Staffs.jsx'
import Salary from './Components/Salary'
import Staff from './Components/Staff'
import Depart from './Components/Depart'
import './App.css'
import './grid.css'
import alberto from './assets/images/alberto.png'

function App({staffs, departs, img, a}) {
  const [findName, setFindName] = useState('')
  return (
    <div className='grid wide'>
      <div className='row banner'>
        <div>
          <Link to="/staff/*" className='staffButton'>Nhân viên</Link>
        </div>
        <div>
          <Link to="/depart" className='staffButton'>Phòng ban</Link>
        </div>
        <div>
          <Link to="/salary" className='staffButton'>Bảng lương</Link>
        </div>
        
        
      </div>

      <div className='row'>
        <Routes>
          <Route path="/staff/*" element={<Staff staffs={STAFFS} img={alberto} departs={DEPARTMENTS}/>} />
          <Route path="/salary" element={<Salary staffs={STAFFS}/>} />
          <Route path="/depart" element={<Depart staffs={STAFFS} departs={DEPARTMENTS}/>} />
        </Routes>
      </div>
      
      
    </div>
  )
}

export default App