import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, fallback: defaultImg = images.noImage, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleNoImage = () => {
        setFallback(defaultImg);
    };

    return (
        <img
            ref={ref}
            className={classNames(className)}
            src={fallback || src}
            alt={alt}
            onError={handleNoImage}
            {...props}
        />
    );
});

export default Image;
