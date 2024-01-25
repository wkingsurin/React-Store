export default function Li({ classes, text, active, id }) {
  return (
    <li
      className={
        (active && `${classes.listItem} ${classes.active}`) ||
        `${classes.listItem}`
      }
      id={id}
    >
      <button>{text}</button>
    </li>
  );
}
