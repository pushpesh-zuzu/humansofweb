const Loader = ({ className = "", label = "Loading" }) => {
  return (
    <span className={`inline-flex items-center justify-center gap-2 ${className}`}>
      <span
        className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
        aria-hidden="true"
      />
      <span>{label}</span>
    </span>
  );
};

export default Loader;
