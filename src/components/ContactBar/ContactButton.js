import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Re-usable button and link component for use in the ContactBar link list
 * Presence of an `href` prop triggers this component rendering an `a` tag
 *
 * @property {node} children - react children
 * @property {boolean} isActive - should active styling be applied?
 * @property {boolean} isHidden - should hidden styling be applied?
 * @property {string} href - optional href, makes this a link
 * @property {function} onClick - optional onClick, makes this a button
 *
 * @returns {JSX}
 */
const ContactButton = ({
  children,
  isActive,
  isHidden,
  href,
  onClick,
  ...rest
}) => {
  const classes = classnames('contact-button', {
    'contact-button--active': isActive,
    'contact-button--hidden': isHidden
  });

  if (href) {
    return (
      <a
        className={classes}
        target="_blank"
        aria-hidden={isHidden}
        rel="noopener noreferrer"
        {...{ href, ...rest }}
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
      className={classes}
      {...{ onClick, ...rest }}
    >
      {children}
    </div>
  );
};

ContactButton.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  isHidden: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func
};

export default ContactButton;
