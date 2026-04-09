import Link from "next/link";

const GetYourFreeProposalButton = ({
  text = "Get Your Free Proposal",
  href = "",
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 p-small font-bold uppercase tracking-[0.08em] text-white transition hover:bg-secondary ${className}`}
    >
      {text}
    </Link>
  );
};

export default GetYourFreeProposalButton;
