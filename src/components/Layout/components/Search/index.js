import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchBtn } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import * as apiServices from '~/apiServices/searchServices';

const cx = classNames.bind(styles);

const Search = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResultSearch, setShowResultSearch] = useState(true);
    const [showLoading, setShowLoading] = useState(false);

    const inputRef = useRef();
    const debounceInput = useDebounce(searchValue, 300);

    useEffect(() => {
        if (!debounceInput.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            setShowLoading(true);
            const result = await apiServices.search(debounceInput, 'less');
            setSearchResult(result);
            setShowLoading(false);
        };
        fetchApi();
    }, [debounceInput]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResultSearch && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper scroll>
                        <h2 className={cx('accounts')}>Accounts</h2>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={() => setShowResultSearch(false)}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    onChange={handChange}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onFocus={() => setShowResultSearch(true)}
                />
                {!!searchValue && !showLoading && (
                    <button onClick={handleClear} className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {showLoading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <SearchBtn />
                </button>
            </div>
        </HeadlessTippy>
    );
};

export default Search;
