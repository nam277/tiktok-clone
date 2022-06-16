import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/3f0bcf4e56dfab5fb00d3b4721f20227~c5_100x100.jpeg?x-expires=1655524800&x-signature=smdNJpI0ZaU2Z2jt2aTfzhfZR5E%3D"
                alt=""
            />
            <div className={cx('info')}>
                <div className={cx('names')}>
                    <span className={cx('name')}>Thuy Tien</span>
                    <FontAwesomeIcon className={cx('name-icon')} icon={faCircleCheck} />
                </div>
                <span className={cx('userName')}>Thuy_Tien98</span>
            </div>
        </div>
    );
}

export default AccountItem;
