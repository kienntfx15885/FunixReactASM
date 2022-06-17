import classNames from 'classnames/bind';

import { DEPARTMENTS } from '~/Staffs';
import styles from './Depart.module.scss';

const cx = classNames.bind(styles);

function Depart() {
  return (
    <div className="grid wide">
      <div className="row">
        {DEPARTMENTS.map((depart) => {
          return (
            <div className='col l-6'>
                <div className={(cx('departDiv'))}>
                  <h1>{depart.name}</h1>
                  <p className={cx('departNum')}>Số lượng nhân viên: {depart.numberOfStaff}</p>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Depart;
