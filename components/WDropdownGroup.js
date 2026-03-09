import React, { useState } from 'react';
import WDropdown from './WDropdown';

/**
 * WDropdownGroup — wraps WDropdown items so that opening one closes the others.
 * Non-WDropdown children (headings, divs, etc.) are passed through untouched.
 */
export default function WDropdownGroup({ children }) {
  const [openIndex, setOpenIndex] = useState(null);

  let accordionIndex = 0;

  return (
    <>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child) || child.type !== WDropdown) {
          return child;
        }
        const myIndex = accordionIndex++;
        return React.cloneElement(child, {
          isOpen: openIndex === myIndex,
          onToggle: () => setOpenIndex(openIndex === myIndex ? null : myIndex),
        });
      })}
    </>
  );
}
