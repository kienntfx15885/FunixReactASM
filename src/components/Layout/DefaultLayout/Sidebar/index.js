import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Link, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Staff from '~/pages/Staff';
import Salary from '~/pages/Salary';
import Depart from '~/pages/Depart';


const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <div className={cx('staff')}>
        <Link to="/staff" className={cx('staff-btn')}>
          Nhân viên
        </Link>
      </div>
      <div className={cx('staff')}>
        <Link to="/depart" className={cx('staff-btn')}>
          Phòng ban
        </Link>
      </div>
      <div className={cx('staff')}>
        <Link to="/salary" className={cx('staff-btn')}>
          Bảng lương
        </Link>
      </div>
      <div className="row">
        <Routes>
          <Route path="/staff" element={<Staff />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/depart" element={<Depart />} />
        </Routes>
      </div>
    </aside>
  );
}

export default Sidebar;
