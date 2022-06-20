import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <div className={cx('names')}>
                    <span className={cx('name')}>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('name-icon')} icon={faCircleCheck} />}
                </div>
                <span className={cx('userName')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
