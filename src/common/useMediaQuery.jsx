import React from "react";

const useMediaQuery = (query) => {
    const [matches, setMatches] = React.useState(false);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        if (mediaQuery.matches !== matches) {
            setMatches(mediaQuery.matches);
        }
        const onChange = () => setMatches(mediaQuery.matches);
        window.addEventListener('resize', onChange);

        return () => window.removeEventListener('resize', onChange);
    }, [query]);

    return matches;
}

export default useMediaQuery;