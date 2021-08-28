import { useState, useEffect } from 'react';

const useAccordion = (accordionContent, expandableContainer) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let newHeight = 0;
    if (expanded && !!accordionContent) {
      newHeight = accordionContent?.getBoundingClientRect()?.height ?? 0;
    }

    if (!expandableContainer) return;

    expandableContainer.style.height = `${newHeight}px`;
  }, [expanded, accordionContent, expandableContainer]);

  return {
    expanded,
    setExpanded
  };
};

export default useAccordion;
