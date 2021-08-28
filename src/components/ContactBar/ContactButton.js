import classnames from 'classnames';

const ContactButton = ({ children, isActive, isHidden, href, onClick, ...rest }) => {
  const classes = classnames('contact-button', {
    'contact-button--active': isActive,
    'contact-button--hidden': isHidden
  });

  if (href) {
    return (
      <a
        {...{ href, ...rest }}
        className={classes}
        target="_blank"
        aria-hidden={isHidden}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <div
      role="button"
      aria-hidden={isHidden}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onClick();
        }
      }}
      aria-pressed={isActive}
      tabIndex={0}
      {...{ onClick, ...rest }}
      className={classes}
    >
      {children}
    </div>
  );
};

export default ContactButton;
