import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from './Staff.module.scss'
import { STAFFS } from "~/Staffs";
import image from '~/assets/images/alberto.png'

const cx = classNames.bind(styles)

function StaffFind({ id }) {
  return (
    <div className="row">
          <div className="col l-4 wrapper" key={STAFFS[id].id}>
            <Link to={`/staff/${STAFFS[id].id}`} className={cx('userName')}>
              <div className={cx('divUser')}>
                <img src={image} alt="" className={cx('imgStaff')} />
                <span className={cx('linkUser')}>{STAFFS[id].name}</span>
              </div>
            </Link>
          </div>
    </div>
  );
}

export default StaffFind;
