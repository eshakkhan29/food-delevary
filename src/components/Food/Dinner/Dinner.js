import DinnerFood from "./DinnerFood/DinnerFood";
const dinner = [
  {
    "id": "1",
    "name": "Healthy meal plan",
    "body": "this is the best food for ever",
    "img": "https://i.ibb.co/cxVNzN8/dinner1.png",
    "price": "694"
  },
  {
    "id": "2",
    "name": "Healthy meal plan",
    "body": "this is the best food for ever",
    "img": "https://i.ibb.co/LZwSLkC/dinner2.png",
    "price": "478"
  },
  {
    "id": "3",
    "name": "Healthy meal plan",
    "body": "this is the best food for ever",
    "img": "https://i.ibb.co/PcDk2Hb/dinner3.png",
    "price": "321"
  },
  {
    "id": "4",
    "name": "Healthy meal plan",
    "body": "this is the best food for ever",
    "img": "https://i.ibb.co/ZVsq52w/dinner4.png",
    "price": "158"
  },
  {
    "id": "5",
    "name": "Healthy meal plan",
    "body": "this is the best food for ever",
    "img": "https://i.ibb.co/hYM1km1/dinner5.png",
    "price": "69"
  },
  {
    "id": "6",
    "name": "Healthy meal plan",
    "body": "this is the best food for ever",
    "img": "https://i.ibb.co/5BY4LXt/dinner6.png",
    "price": "135"
  }
]
const Dinner = () => {
  return (
    <div className="container">
      <div className="row mt-5 g-5">
        {dinner.map((dinner) => (
          <DinnerFood key={dinner.id} dinner={dinner}></DinnerFood>
        ))}
      </div>
    </div>
  );
};

export default Dinner;
