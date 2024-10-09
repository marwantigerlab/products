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
  const topTwoPerformingItem: TopTwoPerformingItems = {};

  array.map((item: Product) => {
    const { category } = item;
    if (!categorizedItems[category]) {
      categorizedItems[category] = [];
    }
    categorizedItems[category].push(item);
  });

  const sortCategoryArrayBasedOnSales = (category: string) => {
    const sortedCategory = categorizedItems[category].sort(
      (a: Product, b: Product) => {
        return b.sales - a.sales;
      }
    );
    topTwoPerformingItem[category as keyof TopTwoPerformingItems] = [];

    topTwoPerformingItem[category].push(sortedCategory[0]);
    topTwoPerformingItem[category].push(sortedCategory[1]);
  };

  const getTopPerformingItemsOfCategory = (category: string) => {
    return sortCategoryArrayBasedOnSales(category);
  };

  getTopPerformingItemsOfCategory("Clothing");

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
