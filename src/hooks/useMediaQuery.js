import { useState, useEffect } from 'react';

/**
 * Hook that watches for a media query to be true or false, works on resize and page load
 *
 * @param {string} query - media query to use
 * @returns {boolean} does the current query match?
 */
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const onMediaChange = () => {
      setMatches(media.matches);
    };
    media.addEventListener('change', onMediaChange);
    return () => media.removeEventListener('change', onMediaChange);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
