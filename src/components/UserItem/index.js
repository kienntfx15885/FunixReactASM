import { Link, Routes, Route } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './UserItem.module.scss';
import image from '~/assets/images/alberto.png'


const cx = classNames.bind(styles);

function UserItem({ data }) {
  
  return (
    <Link className={cx('wrapper')} to={`/staff/${data.id}`}>
      <img className={cx('avatar')} src={image} alt="" />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data.name}</span>
          <FontAwesomeIcon className={cx('icon')} icon={faUser} />
        </h4>
        {/* <span className={cx('username')}>Phòng ban: {data.department.name}</span> */}
      </div>
    </Link>
  );
}

export default UserItem;
