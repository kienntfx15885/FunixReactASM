import {Link} from 'react-router-dom'

import {useState} from 'react'
import clsx from 'clsx'
import styles from './Staff.module.css'

function StaffDetails({staffs, img}) {
    return (
        <div className={styles.userWrapper}>
            {staffs.map(staff => {
                return (
                        <Link to={`/staff/${staff.id}`} className={clsx(styles.userName, 'col l-4')}>
                            <div className={styles.divUser}>
                                <img src={img} alt='' className={styles.imgStaff}/>
                                <span className={styles.linkUser}>{staff.name}</span>
                            </div>
                        </Link>
                
                );

            })}


        </div>
    )
}

export default StaffDetails