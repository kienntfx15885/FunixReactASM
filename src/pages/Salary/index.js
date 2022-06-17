import classNames from 'classnames/bind';
import styles from './Salary.module.scss';
import { STAFFS } from '~/Staffs';


const cx = classNames.bind(styles)
function Salary() {
  return (
    <div className="grid wide">
      <div className="row">
        {STAFFS.map((staff) => {
          const salary = staff.salaryScale * 3000000 + staff.overTime * 200000;
          return (
            <div className="col l-4 m-6 c-12">
              <div className={cx('salaryDiv')}>
                <h1>{staff.name}</h1>
                <p className={cx('staffId')}>Mã nhân viên: {staff.id}</p>
                <p>Hệ số lương: {staff.salaryScale}</p>
                <p>Số ngày làm thêm: {staff.overTime || 'Không có'}</p>
                <p>Lương: {parseInt(salary) || 'chưa có'}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Salary;
