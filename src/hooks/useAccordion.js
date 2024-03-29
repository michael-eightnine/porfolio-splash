import { useState, useEffect } from 'react';

/**
 * Helper hook for animating dynamic height accordion content
 * You pass in the content + container refs and the hook calculates the content height on expansion
 *
 * @param {HtmlElement} accordionContent - ref for the accordion inner content
 * @param {HtmlElement} expandableContainer - ref for the accordion container
 * @returns {object} - object with expanded state value, and expanded state updater function
 */
const useAccordion = (accordionContent, expandableContainer) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let newHeight = 0;
    if (expanded && !!accordionContent) {
      newHeight = accordionContent?.getBoundingClientRect()?.height ?? 0;
    }

    if (!expandableContainer) return;

    expandableContainer.style.height = `${newHeight}px`;

    // Ensure child content can still scroll if needed in flex layouts
    // 100ms timeout helps this flow better with the expand/collapse transition
    setTimeout(() => {
      accordionContent.style.maxHeight = expanded ? '100%' : 'none';
    }, 100);
  }, [expanded, accordionContent, expandableContainer]);

  return {
    expanded,
    setExpanded
  };
};

export default useAccordion;
