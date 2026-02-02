export default function Description({
  children,
  theme,
  dangerousContent,
  keys,
}) {
  return (
    <>
      {dangerousContent ? (
        <div
          title={keys}
          className={`${theme} lang-based-font`}
          dangerouslySetInnerHTML={dangerousContent}
        />
      ) : (
        <div title={keys} className={`${theme} lang-based-font`}>
          {children}
        </div>
      )}
    </>
  );
}
