const { useState, useEffect } = require('react');

function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const timerId = setTimeout(() => setDebounce(value), delay);
        return () => clearTimeout(timerId);
    }, [value]);

    return debounce;
}

export default useDebounce;
