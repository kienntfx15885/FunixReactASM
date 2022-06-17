import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import UserItem from '~/components/UserItem';
import styles from './Search.module.scss';
import { STAFFS } from '~/Staffs';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [findId, setFindId] = useState();

  const inputRef = useRef();

  useEffect(() => {
    {
      if (searchValue.length > 0) {
        const c = STAFFS.filter((staff) => {
          const a = staff.name;
          const b = a.indexOf(`${searchValue}`, 0);

          return b > -1;
        });
        setSearchResult([...c]);
      }
    }
  }, [searchValue]);

  useEffect(() => {
    searchResult.map((oke) => {
      setFindId(oke.id);
    });
  }, [searchResult]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper onClick={handleHideResult}>
            <h4 className={cx('search-title')} >Staffs</h4>
            {searchResult.map((result) => (
              <UserItem key={result.id} data={result}/>
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Nhập tên nhân viên"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />

        {!!searchValue && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        <Link to={`/staff/find/${findId}`}>
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </Link>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
