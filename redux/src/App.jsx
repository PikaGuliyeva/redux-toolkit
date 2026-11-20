import {useState} from "react";

import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, reset } from "./redux/counterSlice";

import { changeName } from "./redux/userSlice";

import { changeTheme } from "./redux/themeSlice";

import { increase, decrease, reset } from "./redux/studentSlice";



// Task1
// function App() {

//     const count = useSelector((state) => state.counter.value);

//     const dispatch = useDispatch();

//     return (
//         <div>
//             <h1>Counter: {count}</h1>

//             <button onClick={() => dispatch(increment())}>
//                 Artır
//             </button>

//             <button onClick={() => dispatch(decrement())}>
//                 Azalt
//             </button>

//             <button onClick={() => dispatch(reset())}>
//                 Reset
//             </button>
//         </div>
//     );
// }

// Task2
// function App() {

//     const [newName, setNewName] = useState("");

//     const name = useSelector((state) => state.user.name);

//     const dispatch = useDispatch();

//     const handleChange = () => {
//         dispatch(changeName(newName));
//         setNewName("");
//     };

//     return (
//         <div>
//             <h1>User Profile</h1>

//             <h2>İstifadəçinin adı: {name}</h2>

//             <input
//                 type="text"
//                 placeholder="Yeni ad daxil edin"
//                 value={newName}
//                 onChange={(e) => setNewName(e.target.value)}
//             />

//             <button onClick={handleChange}>
//                 Adı dəyiş
//             </button>
//         </div>
//     );
// }

// Task 3
// function App() {

//     const mode = useSelector((state) => state.theme.mode);

//     const dispatch = useDispatch();

//     return (
//         <div style={{
//             backgroundColor: mode === "light" ? "white" : "black",
//             color: mode === "light" ? "black" : "white",
//             height: "100vh",
//             textAlign: "center",
//             paddingTop: "50px"
//         }}>

//             <h1>
//                 {mode === "light" ? "Light Mode" : "Dark Mode"}
//             </h1>

//             <button onClick={() => dispatch(changeTheme())}>
//                 Mövzunu dəyiş
//             </button>

//         </div>
//     );
// }

// Task 4
function App() {
  const score = useSelector((state) => state.student.score);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Tələbə Balı: {score}</h1>

      <button onClick={() => dispatch(increase())}>
        +10
      </button>

      <button onClick={() => dispatch(decrease())}>
        -10
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}

export default App;