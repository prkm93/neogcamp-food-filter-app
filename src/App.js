import './App.css';

function App() {

  const foodInventory = [
    {
      name: "Tomato Mozzarella Flatbread",
      type: "sandwich",
      calories: 350,
      carbs: 35
    },
    {
      foodName: "Turkey Cranberry Flatbread",
      type: "sandwich",
      calories: 310,
      carbs: 36
    },
    {
      foodName: "Veggie Sandwich",
      type: "sandwich",
      calories: 440,
      carbs: 65
    },
    {
      foodName: "Whopper with Cheese",
      type: "burger",
      calories: 740,
      carbs: 75
    },
    {
      foodName: "Crispy Chicken Junior",
      type: "burger",
      calories: 450,
      carbs: 75
    },
    {
      foodName: "12 inch Black Forest Ham",
      type: "burger",
      calories: 580,
      carbs: 60
    },
    {
      foodName: "Chicken Burrito",
      foodType: "Burrito",
      calories: 975,
      carbs: 93
    },
    {
      foodName: "Steak Burrito",
      foodType: "Burrito",
      caloris: 945,
      carbs: 103
    },
    {
      foodName: "Carnitas Burrito",
      foodType: "Burrito",
      calories: 1005,
      carbs: 83
    },
    {
      foodName: "Barbacoa Burrito",
      foodType: "Burrito",
      calories: 965,
      carbs: 90
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Craving for food!</h1>
        <p>Checkout my favourite food list!</p>
        <hr />
      </header>
    </div>
  );
}

export default App;
