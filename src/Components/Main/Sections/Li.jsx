export default function Li({ classes, text, active }) {
  return (
    <li
      className={
        (active && `${classes.listItem} ${classes.active}`) ||
        `${classes.listItem}`
      }
    >
      <button>{text}</button>
    </li>
  );
}
