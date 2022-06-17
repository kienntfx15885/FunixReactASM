import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import StaffDetails from './StaffDetails';
import StaffInfo from './StaffInfo';
import { STAFFS } from '~/Staffs';

function Staff() {
  return (
    <div>
      <Link to="/staff/details">Nhân viên</Link>
    </div>
  );
}

export default Staff;
