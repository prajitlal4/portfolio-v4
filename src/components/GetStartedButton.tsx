'use client';

interface GetStartedButtonProps {
  formId?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function GetStartedButton({
  formId = 'contact-form',
  className = '',
  variant = 'primary',
}: GetStartedButtonProps) {
  const handleClick = () => {
    const element = document.getElementById(formId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-colors duration-200';

  const variantStyles = {
    primary: 'bg-accent text-white hover:bg-accent-dark',
    secondary: 'bg-light border-2 border-accent text-accent hover:bg-accent/5',
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      Get Started Now
    </button>
  );
}
