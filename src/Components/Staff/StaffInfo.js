import dateFormat from 'dateformat'
import clsx from 'clsx'
import { useState, useEffect } from "react"
import styles from './Staff.module.css'

function StaffInfo({staffs, id, img, departs}) {
    const obj = staffs[id]
    const DEPARTMENTS = departs;
    console.log(DEPARTMENTS)
    
    useEffect(() => {
        {staffs.find(staff => {
            return id === staff.id
        })}
    }, [id])
    console.log(obj.department)
    return (
        <div className={clsx(styles.wrapDiv, 'row')}>
            <img src={img} className={clsx(styles.bigImg, 'col l-4')}/>
            <div className={styles.objDiv}>
                <h1 className={styles.objName}>{obj.name}</h1>
                <h3>Ngày sinh: {dateFormat(obj.doB, 'dd/mm/yyyy')}</h3>
                <h3>Ngày vào công ty: {dateFormat(obj.startDate, 'dd/mm/yyyy')}</h3>
                <h3>Phòng ban: {obj.department.name}</h3>
                <h3>Số ngày nghỉ còn lại: {dateFormat(obj.annualLeave, 'dd/mm/yyyy')}</h3>
                <h3>Số ngày đã làm thêm: {dateFormat(obj.overTime, 'dd/mm/yyyy')}</h3>
            </div>
            
        </div>
        
    )
}

export default StaffInfo