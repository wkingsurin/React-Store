export default function CartAlert({ classesHeader, amount }) {
  return (
    <div className={classesHeader.cartAlert}>
      <span className={classesHeader.amount}>{amount}</span>
    </div>
  );
}
