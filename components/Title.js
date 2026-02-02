export default function Title({ as, children, theme, keys }) {
  return (
    <>
      {as === "h1" ? (
        <h1 title={keys} className={`${theme} lang-based-font-link`}>
          {children}
        </h1>
      ) : (
        <h2 title={keys} className={`${theme} lang-based-font-link`}>
          {children}
        </h2>
      )}
    </>
  );
}
