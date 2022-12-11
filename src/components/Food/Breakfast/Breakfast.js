import BreakFood from "./BreakFood/BreakFood";
const breakfast = [
  {
    "id": "1",
    "name": "Healthy meal plan",
    "body": "this is the best food for ever",
    "img": "https://i.ibb.co/TrPc6K4/breakfast1.png",
    "price": "354"
  },
  {
    "id": "2",
    "name": "Healthy meal plan",
    "body": "this is the best food for ever",
    "img": "https://i.ibb.co/H4NBxRj/breakfast2.png",
    "price": "685"
  },
  {
    "id": "3",
    "name": "Healthy meal plan",
    "body": "this is the best food for ever",
    "img": "https://i.ibb.co/VHr79XG/breakfast3.png",
    "price": "792"
  },
  {
    "id": "4",
    "name": "Healthy meal plan",
    "body": "this is the best food for ever",
    "img": "https://i.ibb.co/PwsXSzG/breakfast4.png",
    "price": "216"
  },
  {
    "id": "5",
    "name": "Healthy meal plan",
    "body": "this is the best food for ever",
    "img": "https://i.ibb.co/vjWh9M8/breakfast5.png",
    "price": "354"
  },
  {
    "id": "6",
    "name": "Healthy meal plan",
    "body": "this is the best food for ever",
    "img": "https://i.ibb.co/gSTPQWx/breakfast6.png",
    "price": "168"
  }
]
const Breakfast = () => {
  return (
    <div className="container">
      <div className="row mt-5 g-5">
        {breakfast.map((breakfast) => (
          <BreakFood key={breakfast.id} breakfast={breakfast}></BreakFood>
        ))}
      </div>
    </div>
  );
};

export default Breakfast;
