import classes from "./CartSection.module.scss";

export default function CartSection(props) {
  return (
    <section className={props.classes.section}>
      <div className={props.classContainer}>
        <div className={props.classes.sectionBlock}></div>
      </div>
    </section>
  );
}
