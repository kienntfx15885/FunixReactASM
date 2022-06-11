import {useState} from 'react'

import { Routes, Route, Link} from 'react-router-dom'
import styles from './Staff.module.css'
import StaffDetails from './StaffDetails'
import StaffInfo from './StaffInfo'


function Staff({staffs, img, departs}) {
  

  return (
    <div className='divWrapper col l-12'>
      <Link className={styles.link} to='/staff/as'>
        {`Nhân viên`}
      </Link>
      <Routes>
        <Route path="/as" element={<StaffDetails staffs={staffs} img={img}/>}/>
        {staffs.map(staff => {
            return (
              <Route path={`/${staff.id}`} element={<StaffInfo key={staff.id} staffs={staffs} id={staff.id} img={img} departs={departs}/>}/>
            ) 
        })}
      </Routes>
      
    </div>
  )
}

export default Staff