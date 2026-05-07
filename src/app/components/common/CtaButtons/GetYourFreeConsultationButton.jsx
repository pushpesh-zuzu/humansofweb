import Link from "next/link";

const GetYourFreeConsultationButton = ({
  text = "Get Your Free Consultation",
  href = "",
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`text-center inline-flex min-h-11 items-center justify-center rounded-full bg-secondary px-6 p-small font-bold uppercase tracking-[0.08em] text-white transition hover:bg-primary ${className}`}
    >
      {text}
    </Link>
  );
};

export default GetYourFreeConsultationButton;
