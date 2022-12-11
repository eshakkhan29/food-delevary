import LunchFood from './LunchFood/LunchFood';
const lunch = [
  {
    "id": "1",
    "name": "Healthy meal plan",
    "body": "this is the best food for ever",
    "img": "https://i.ibb.co/qmMqbN9/lunch1.png",
    "price": "56"
  },
  {
    "id": "2",
    "name": "Healthy meal plan",
    "body": "this is the best food for ever",
    "img": "https://i.ibb.co/pjGdKFX/lunch2.png",
    "price": "984"
  },
  {
    "id": "3",
    "name": "Healthy meal plan",
    "body": "this is the best food for ever",
    "img": "https://i.ibb.co/TKnqttw/lunch3.png",
    "price": "654"
  },
  {
    "id": "4",
    "name": "Healthy meal plan",
    "body": "this is the best food for ever",
    "img": "https://i.ibb.co/hZk6dz2/lunch4.png",
    "price": "58"
  },
  {
    "id": "5",
    "name": "Healthy meal plan",
    "body": "this is the best food for ever",
    "img": "https://i.ibb.co/1LKGQhK/lunch5.png",
    "price": "196"
  },
  {
    "id": "6",
    "name": "Healthy meal plan",
    "body": "this is the best food for ever",
    "img": "https://i.ibb.co/XV92STq/lunch6.png",
    "price": "58"
  }
]
const Lunch = () => {

  return (
    <div className="container">
      <div className="row mt-5 g-5">
        {
          lunch.map(lunch => <LunchFood key={lunch.id} lunch={lunch}></LunchFood>)
        }
      </div>
    </div>
  );
};

export default Lunch;