import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    to,
    href,
    basic = false,
    primary = false,
    outline = false,
    small = false,
    medium = false,
    large = false,
    disabled = false,
    rounded = false,
    className = false,
    leftIcon,
    rightIcon,
    item,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        ...passProps,
    };

    // Remove event listeners when the btn is disabled
    if (disabled) {
        Object.keys(props).map((propKey) => {
            if (propKey.startsWith('on') && typeof props[propKey] === 'function') {
                delete props[propKey];
            }
        });
    }

    // Handle when props are <a></a> or <Link/>
    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }

    // Handle add className into component
    const classes = cx('wrapper', {
        basic,
        primary,
        outline,
        rounded,
        item,
        disabled,
        small,
        medium,
        large,
        [className]: className,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
