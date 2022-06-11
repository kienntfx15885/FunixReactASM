
import styles from './Depart.module.css'

function Depart({staffs, departs}) {
    return (
        <>  
            {departs.map(depart => {
                return (
                    <div className='col l-4 m-6 c-12 wrapDiv'>
                        <div className={styles.departDiv}>
                            <h1>{depart.name}</h1>
                            <p className={styles.departNum}>Số lượng nhân viên: {depart.numberOfStaff}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Depart