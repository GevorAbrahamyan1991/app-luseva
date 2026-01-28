export default function Container({ children, theme, boxTheme }) {
  return (
    <div className={`${boxTheme} px-6`}>
      <div className={`${theme} container mx-auto`}>{children}</div>
    </div>
  );
}
