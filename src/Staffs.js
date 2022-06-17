import classNames from 'classnames/bind';
import styles from './Staffs.module.scss';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { department, role, staffs } from '~/Data.jsx';

export const DEPARTMENTS = [
  {
    id: 'Dept01',
    name: 'Sale',
    numberOfStaff: 1,
  },
  {
    id: 'Dept02',
    name: 'HR',
    numberOfStaff: 3,
  },
  {
    id: 'Dept03',
    name: 'Marketing',
    numberOfStaff: 2,
  },
  {
    id: 'Dept04',
    name: 'IT',
    numberOfStaff: 1,
  },
  {
    id: 'Dept05',
    name: 'Finance',
    numberOfStaff: 11,
  },
];
export const ROLE = {
  NORMAL_STAFF: 'Nhân viên',
  MANAGER_STAFF: 'Quản lý',
};
export const STAFFS = [...staffs];

const cx = classNames.bind(styles);

function Add() {
  const nameRef = useRef();
  const doBRef = useRef();
  const startDateRef = useRef();
  const departmentRef = useRef();
  const salaryScaleRef = useRef();

  const formik = useFormik({
    initialValues: {
        id: STAFFS.length,
      name: '',
      doB: '',
      startDate: '',
      department: '',
      salaryScale: '',
    },
    validationSchema: Yup.object({
        name: Yup.string().required('Không được để trống trường này').min(4, 'Vui lòng nhập đầy đủ họ tên'),
        doB: Yup.string().required('Không được để trống trường này').matches(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/, "not match"),
        startDate: Yup.string().required('Không được để trống trường này').matches(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/, "not match"),
        department: Yup.string().required('Không được để trống trường này').min(2, 'Phai nhap day du cho nay'),
        salaryScale: Yup.string().required('Không được để trống trường này').min(1, 'Phai nhap day du ho ten')
    }),
    onSubmit:  (values) => {
      STAFFS.push(values);
      departs.numberOfStaff += 1;
      nameRef.current.value = ''
      doBRef.current.value = ''
      startDateRef.current.value = ''
      departmentRef.current.value = ''
      salaryScaleRef.current.value = ''
      nameRef.current.focus()
    }
  });

  console.log(formik.errors.name)

  const departs = DEPARTMENTS.find((depart) => {
    return depart.name === formik.values.department;
  });

//   const handleAdd = (e) => {
//     e.preventDefault();
//       STAFFS.push(formik.values);
//       departs.numberOfStaff += 1;
//       return STAFFS;
//   };

  return (
    <div className={cx('main')}>
      <form action="" onSubmit={formik.handleSubmit}>
        <h3 className={cx('form-head')}>Thêm thành viên </h3>

        <div className={cx('spacer')}></div>

        <div className={cx('form-group')}>
          <label htmlFor="fullname" className={cx('form-label')}>
            Tên đầy đủ:
          </label>
          <input
            id={cx('fullname')}
            name="name"
            type="text"
            placeholder="VD: Nguyễn Văn A"
            ref={nameRef}
            value={formik.values.name}
            onChange={formik.handleChange}
            className={cx('input-staff')}
          />
          {formik.errors.name && (
            <span className={cx('form-message')}>{formik.errors.name}</span>
          )}
        </div>

        <div className={cx('form-group')}>
          <label htmlFor="doB" className={cx('form-label')}>
            Ngày sinh:
          </label>
          <input
            id={cx('doB')}
            name="doB"
            type="text"
            placeholder="VD: 1999-01-01"
            ref={doBRef}
            value={formik.values.doB}
            onChange={formik.handleChange}
            className={cx('input-staff')}
          />
          {formik.errors.doB && (
            <span className={cx('form-message')}>{formik.errors.doB}</span>
          )}
        </div>

        <div className={cx('form-group')}>
          <label htmlFor="startDate" className={cx('form-label')}>
            Ngày vào công ty:
          </label>
          <input
            id={cx('startDate')}
            name="startDate"
            type="text"
            placeholder="VD: 2021-01-01"
            ref={startDateRef}
            value={formik.values.startDate}
            onChange={formik.handleChange}
            className={cx('input-staff')}
          />
          {formik.errors.startDate && (
            <span className={cx('form-message')}>{formik.errors.startDate}</span>
          )}
        </div>

        <div className={cx('form-group')}>
          <label htmlFor="depart" className={cx('form-label')}>
            Phòng ban:
          </label>
          <input
            id={cx('depart')}
            name="department"
            type="text"
            placeholder="VD: Sale"
            ref={departmentRef}
            value={formik.values.department}
            onChange={formik.handleChange}
            className={cx('input-staff')}
          />
          {formik.errors.department && (
            <span className={cx('form-message')}>{formik.errors.department}</span>
          )}
        </div>

        <div className={cx('form-group')}>
          <label htmlFor="salaryScale" className={cx('form-label')}>
            Hệ số lương:{' '}
          </label>
          <input
            id={cx('salaryScale')}
            name="salaryScale"
            type="number"
            min="0"
            step="any"
            placeholder="VD: 1"
            ref={salaryScaleRef}
            value={formik.values.salaryScale}
            onChange={formik.handleChange}
            className={cx('input-staff')}
          />
          {formik.errors.salaryScale && (
            <span className={cx('form-message')}>{formik.errors.salaryScale}</span>
          )}
        </div>

        <button type="submit" className={cx('submit-btn')}>
          <span className={cx('submit-span')}>Submit</span>
        </button>

        <Link to='/staff/details' className={cx('submit-btn')}>
            <span className={cx('submit-span')}>Trở về trang nhân viên</span>
        </Link>
      </form>
    </div>
  );
}

export default Add;
