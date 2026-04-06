// ServiceCard.jsx
// Props: icon, title, subtitle, description, warm (bool), reverse (bool — alternate card)

const borderGradient = (reverse) => `linear-gradient(
  to ${reverse ? "top" : "bottom"},
  #48179C 0%,
  #48179C 50%,
  #6f3dcc 60%,
  #9b7ee0 70%,
  #c8b6ef 80%,
  #eee8fb 90%,
  transparent 100%
)`;

export default function ServiceCard({
  icon,
  title,
  subtitle,
  description,
  warm = false,
  reverse = false,
}) {
  return (
    <div
      style={{
        borderRadius: 16,
        padding: 2,
        background: borderGradient(reverse),
        margin: "0 10px",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        className="px-5 py-6"
        style={{
          background: warm ? "#fffdf4" : "#f5f6ff",
          borderRadius: 14,

          minHeight: 350,
          display: "flex",
          flexDirection: "column",
          transition: "box-shadow 0.3s ease",
          cursor: "default",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 12px 36px rgba(72,23,156,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div
          style={{
            width: 68,
            height: 89,
            display: "flex",
            justifyContent: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {icon}
        </div>

        <h5 className="text-h5 text-primary font-bold text-center py-5">
          {title}
        </h5>

        {subtitle && (
          <h6 className="text-h6 text-center font-bold pt-2.5">{subtitle}</h6>
        )}
        <p className="text-base font-normal text-center">{description}</p>
      </div>
    </div>
  );
}
