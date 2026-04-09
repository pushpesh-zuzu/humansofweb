import Link from "next/link";

const TalkToOurExpertsButton = ({
  text = "Talk To Our Experts",
  href = "",
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-full border border-primary bg-white px-6 p-small font-bold uppercase tracking-[0.08em] text-primary transition hover:bg-primary hover:text-white ${className}`}
    >
      {text}
    </Link>
  );
};

export default TalkToOurExpertsButton;
