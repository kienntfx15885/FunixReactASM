import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';


import styles from './Header.module.scss';

import Button from '~/components/Button';
import Search from '../../components/Search';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div>Logo</div>

        <Search />

        <div className={cx('action')}>
          <Link to='/add'><Button primary>Thêm nhân viên</Button></Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
