import {Link, Route, Routes } from "react-router-dom";

import classNames from "classnames/bind";
import styles from './Staff.module.scss';
import dateFormat from 'dateformat'
import { STAFFS } from "~/Staffs";
import image from '../../assets/images/alberto.png'

const cx = classNames.bind(styles)
function StaffInfo({id}) {
  console.log(id)
  return (
    <div className='grid wide'>
        <Link to="/staff/details">Nhân viên / {STAFFS[id].name}</Link>
        <div className='row wrapper'>
            <img src={image} className={cx('bigImg')}/>
            <div className={cx('objDiv')}>
                <h1 className={cx('objName')}>{STAFFS[id].name}</h1>
                <h3>Ngày sinh: {dateFormat(STAFFS[id].doB, 'dd/mm/yyyy')}</h3>
                <h3>Ngày vào công ty: {dateFormat(STAFFS[id].startDate, 'dd/mm/yyyy')}</h3>
                <h3>Phòng ban: {STAFFS[id].department.name || STAFFS[id].department || STAFFS[id].department.name}</h3>
                <h3>Số ngày nghỉ còn lại: {STAFFS[id].annualLeave || 'Không có'}</h3>
                <h3>Số ngày đã làm thêm: {STAFFS[id].overTime || 'Không có'}</h3>
            </div>
        </div>
    </div>
  );
}

export default StaffInfo;
