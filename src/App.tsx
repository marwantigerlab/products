import React from "react";
import logo from "./logo.svg";
import "./App.css";

interface Product {
  id: number;
  name: string;
  category: string;
  sales: number;
}
interface TopTwoPerformingItems {
  [category: string]: Product[];
}

const array: Product[] = [
  { id: 1, name: "Product A", category: "Electronics", sales: 100 },
  { id: 2, name: "Product B", category: "Clothing", sales: 50 },
  { id: 3, name: "Product C", category: "Electronics", sales: 200 },
  { id: 4, name: "Product D", category: "Clothing", sales: 150 },
  { id: 5, name: "Product E", category: "Electronics", sales: 50 },
];

function App() {
  const categorizedItems: Record<string, Product[]> = {};

  array.map((item: Product) => {
    const { category } = item;
    if (!categorizedItems[category]) {
      categorizedItems[category] = [];
    }
    categorizedItems[category].push(item);
  }); // O(n)

  // categorizing is O(n)

  const sortCategoryArrayBasedOnSales = (category: string, count: number) => {
    const topPerformingItems: TopTwoPerformingItems = {};

    const sortedCategory = categorizedItems[category].sort(
      (a: Product, b: Product) => {
        return b.sales - a.sales;
      }
    ); //O(log n)

    topPerformingItems[category as keyof TopTwoPerformingItems] = [];

    for (let i = 0; i < count; i++) {
      if (!sortedCategory[i]) return;
      topPerformingItems[category].push(sortedCategory[i]);
    } // O(n)

    return topPerformingItems;
  }; // O(n log n)

  const getTopPerformingItemsOfCategory = (category: string, count: number) => {
    return sortCategoryArrayBasedOnSales(category, count);
  };

  // getting highest sales is O(n log n)

  getTopPerformingItemsOfCategory("Electronics", 2);

  console.log(
    "top performing two electronics",
    getTopPerformingItemsOfCategory("Electronics", 2)
  );
  console.log(
    "top performing three electronics",
    getTopPerformingItemsOfCategory("Electronics", 3)
  );

  console.log(
    "top performing one Clothing",
    getTopPerformingItemsOfCategory("Clothing", 1)
  );

  console.log(
    "top performing two Clothing",
    getTopPerformingItemsOfCategory("Clothing", 2)
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
