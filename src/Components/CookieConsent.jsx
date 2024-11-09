import CookieConsent from 'react-cookie-consent';

export default function CookieConsentComp() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Setuju"
      style={{
        background: "#ffffff",
        color: "#f06e24",
        padding: "1rem 2rem",
        fontSize: "14px",
        boxShadow: "0 4px 20px rgba(240, 110, 36, 0.5)",
        textAlign: "center",
      }}
      buttonStyle={{
        backgroundColor: "#f06e24",
        color: "#FFFFFF",
        fontSize: "14px",
        padding: "8px 16px",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.1s ease-in-out",
        border: "none",
      }}
      containerClasses="cookie-container"
      contentClasses="cookie-content"
      buttonClasses="cookie-button"
      expires={150}
    >
      Kami menggunakan cookie untuk meningkatkan pengalaman Anda di situs ini. Dengan melanjutkan, Anda menyetujui kebijakan privasi kami.{" "}
      <a
        href="/privacy-policy"
        style={{
          color: "#000",
          textDecoration: "underline",
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => (e.target.style.color = "#FF6666")}
        onMouseLeave={(e) => (e.target.style.color = "#000")}
      >
        Pelajari lebih lanjut
      </a>
    </CookieConsent>
  );
}
