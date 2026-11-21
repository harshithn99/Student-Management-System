export default function Button({
  children,
  onClick,
  type = 'button',
  href,
  variant = 'primary',
  className = '',
}) {
  const classes = `button ${variant}-button ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}