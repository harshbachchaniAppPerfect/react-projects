function List({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && "✔"}
    </li>
  );
}

export default function Item() {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <List name="Bottle " isPacked={true} />
        <List name="Bag " isPacked={true} />
        <List name="Lunch" isPacked={false} />
      </ul>
    </section>
  );
}
