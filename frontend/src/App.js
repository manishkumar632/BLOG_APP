// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios
			.get("http://127.0.0.1:8000/api/items/")
			.then(response => setItems(response.data))
			.catch(error => console.error("Error fetching data:", error));
	}, []);

	return (
		<div className="App">
			<h1>Items List</h1>
			<ul>
				{items.map(item =>
					<li key={item.id}>
						{item.name}: {item.description}
					</li>
				)}
			</ul>
		</div>
	);
}

export default App;
