import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ scroll, children }) {
    const classes = cx('wrapper', {
        scroll,
    });

    return <div className={classes}>{children}</div>;
}

export default Wrapper;
