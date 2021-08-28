import classnames from "classnames";

const ContactButton = ({ children, isActive, href, onClick, ...rest }) =>
  !!onClick ? (
    <div
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onClick();
        }
      }}
      tabIndex={0}
      {...{ onClick, ...rest }}
      className={classnames("contact-button", {
        'contact-button--active': isActive
      })}
    >
      {children}
    </div>
  ) : (
    <a {...{ href, ...rest }} className="contact-button" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );

export default ContactButton;
