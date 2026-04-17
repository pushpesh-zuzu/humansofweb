import Link from "next/link";

const TalkToOurExpertsButton = ({
  text = "Talk To Our Experts",
  href = "",
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-6 p-small font-bold uppercase tracking-[0.08em] bg-primary text-white transition hover:bg-secondary ${className}`}
    >
      {text}
    </Link>
  );
};

export default TalkToOurExpertsButton;
