import { Link, Routes, Route } from 'react-router-dom';
import classNames from 'classnames/bind';


import { STAFFS } from '~/Staffs';
import styles from './Staff.module.scss';
import image from '~/assets/images/alberto.png'

const cx = classNames.bind(styles);



function StaffDetails({id}) {
  return (
    <>
      <div>{id}</div>
      <Link to="/staff/details">Nhân viên</Link>
      <div className="row">
        {STAFFS.map((staff) => {
          return (
            <div className="col l-4 wrapper" key={staff.id}>
              <Link to={`/staff/${staff.id}`} className={cx('userName')}>
                <div className={cx('divUser')}>
                  <img src={image} alt="" className={cx('imgStaff')} />
                  <span className={cx('linkUser')}>{staff.name}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default StaffDetails;
