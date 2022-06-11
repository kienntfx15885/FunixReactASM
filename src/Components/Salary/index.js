
import styles from './Salary.module.css'

function Salary({staffs}) {
    console.log(staffs)
    return (
        <>
            {staffs.map(staff => {
                const salary = staff.salaryScale*3000000 + staff.overTime*200000
                return (
                    <div className='col l-4 m-6 c-12 wrapDiv'>
                        <div className={styles.salaryDiv}>
                            <h1>{staff.name}</h1>
                            <p className={styles.staffId}>Mã nhân viên: {staff.id}</p>
                            <p>Hệ số lương: {staff.salaryScale}</p>
                            <p>Số ngày làm thêm: {staff.overTime}</p>
                            <p>Lương: {parseInt(salary)}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Salary