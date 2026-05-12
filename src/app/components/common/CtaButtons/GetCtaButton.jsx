import Link from "next/link";

const GetCtaButton = ({
  text = "Get Your Free Consultation",
  href = "",
  className = "",
  onClick,
}) => {
  return href ? (
    <Link
      href={href}
      className={`inline-flex min-h-11 text-center items-center justify-center rounded-full px-6 p-small font-bold uppercase tracking-[0.08em] bg-secondary text-white transition hover:bg-primary ${className}`}
    >
      {text}
    </Link>
  ) : (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer inline-flex min-h-11 text-center items-center justify-center rounded-full px-6 p-small font-bold uppercase tracking-[0.08em] bg-secondary text-white transition hover:bg-primary ${className}`}
    >
      {text}
    </button>
  );
};

export default GetCtaButton;
