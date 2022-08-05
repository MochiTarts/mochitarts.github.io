import React from "react";

const useMediaQuery = (query) => {
    const [matches, setMatches] = React.useState(false);

    React.useEffect(() => {
        const matchQuery = window.matchMedia(query);
        const onChange = (e) => {
            setMatches(e.matches);
        }
        matchQuery.addEventListener("change", onChange);

        return () => matchQuery.removeEventListener("change", onChange);
    }, [query]);

    return matches;
}

export default useMediaQuery;