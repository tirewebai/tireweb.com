import { useState } from 'react';

export default function WDropdown({ title, children, isOpen: controlledIsOpen, onToggle }) {
  const [internalOpen, setInternalOpen] = useState(false);

  // Support both controlled (from WDropdownGroup) and uncontrolled (standalone) usage
  const isControlled = controlledIsOpen !== undefined;
  const open = isControlled ? controlledIsOpen : internalOpen;
  const toggle = isControlled ? onToggle : () => setInternalOpen((v) => !v);

  return (
    <div className={`tireweb-library-faq-box w-dropdown${open ? ' w--open' : ''}`}>
      <div
        className={`tireweb-library-faq-wraper w-dropdown-toggle${open ? ' w--open' : ''}`}
        onClick={toggle}
        style={{ cursor: 'pointer' }}
      >
        <div className="tireweb-library-faq-icon w-icon-dropdown-toggle"></div>
        <div className="tireweb-library-faq-heading heading-three">{title}</div>
        <div className="icon-wraper">
          <img
            src="/images/Group-527.svg"
            loading="lazy"
            alt=""
            className="minus-icon"
            style={{ display: open ? 'block' : 'none' }}
          />
          <img
            src="/images/Group-527-1.svg"
            loading="lazy"
            alt=""
            className="plus-icon"
            style={{ display: open ? 'none' : 'block' }}
          />
        </div>
      </div>
      <nav
        className={`tireweb-library-faq-list w-dropdown-list${open ? ' w--open' : ''}`}
        style={{ display: open ? 'block' : 'none' }}
      >
        {children}
      </nav>
    </div>
  );
}
