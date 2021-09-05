import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [categorylist, setCategoryList] = useState('');
  const [foodList, setFoodList] = useState('');

  useEffect(() => {
    filteredFoodCategory();
  }, [])

  const foodInventory = [
    {
      foodName: "Tomato Mozzarella Flatbread",
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
      type: "Burrito",
      calories: 975,
      carbs: 93
    },
    {
      foodName: "Steak Burrito",
      type: "Burrito",
      caloris: 945,
      carbs: 103
    },
    {
      foodName: "Carnitas Burrito",
      type: "Burrito",
      calories: 1005,
      carbs: 83
    },
    {
      foodName: "Barbacoa Burrito",
      type: "Burrito",
      calories: 965,
      carbs: 90
    }
  ];

  const filteredFoodCategory = () => {
    const list = foodInventory.map(({type}) => type);
    setCategoryList([...new Set(list)]);
    console.log(categorylist);
  }

  const filterHandler = (item) => {
    const list = foodInventory.filter(food => food.type === item);
    console.log(list);
    setFoodList(list);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Craving for food!</h1>
        <p>Checkout my favourite food list!</p>
        <div>
          {
            categorylist && categorylist.length && categorylist.map((item) => {
              return (
                <span key={item} className="category-list" onClick={() => filterHandler(item)}>
                  {item}
                </span>
              )
            })
          }    
        </div>
        <hr />
        {
          foodList && Array.isArray(foodList) && foodList.map((item, i) => {
            return (
              <div key={i} className="food-list">
                <h4>{item.foodName}</h4>
                <h5>Calories: {item.calories}</h5>
                <h5>Carb: {item.carbs}</h5>
              </div>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
