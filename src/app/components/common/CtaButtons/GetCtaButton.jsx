import Link from "next/link";

const GetCtaButton = ({
  text = "Get Your Free Consultation",
  href = "",
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-6 p-small font-bold uppercase tracking-[0.08em] bg-secondary text-white transition hover:bg-primary ${className}`}
    >
      {text}
    </Link>
  );
};

export default GetCtaButton;
