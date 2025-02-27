// import logo from './logo.svg';
// import './App.css';
// import { motion } from "framer-motion";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <div className="flex justify-center items-center h-screen bg-gray-900">
//       <motion.h1
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         className="text-7xl font-extrabold text-white tracking-wider relative"
//       >
//         {["S", "O", "R", "R", "Y", " ", "B", "R", "O"].map((char, index) => (
//           <motion.span
//             key={index}
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
//             className="inline-block"
//           >
//             {char}
//           </motion.span>
//         ))}
//         <span className="absolute left-0 top-0 w-full h-full blur-xl opacity-30 animate-pulse">
//           SORRY BRO
//         </span>
//       </motion.h1>
//     </div>
//       </header>
//     </div>
//   );
// }

// export default App;



// import logo from './logo.svg';
// import './App.css';
// import { motion } from "framer-motion";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* Animated Heart Background */}
//         <motion.div
//           className="heart"
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
//         />

//         {/* Animated "SORRY BRO" Text */}
//         <motion.h1
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="text"
//         >
//           {["S", "O", "R", "R", "Y", " ", "B", "R", "O"].map((char, index) => (
//             <motion.span
//               key={index}
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
//               className="letter"
//             >
//               {char}
//             </motion.span>
//           ))}
//         </motion.h1>
//       </header>
//     </div>
//   );
// }

// export default App;



import logo from './logo.svg';
import './App.css';
import { motion } from "framer-motion";
function App() {
  return (
    <div className="App">
    <header className="App-header">
      {/* Beating Heart Above Text */}
      <motion.div
        className="heart"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      />

      {/* Crying Emoji */}
      <motion.div
        className="crying-emoji"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      >
        😭
      </motion.div>

      {/* Animated "SORRY BRO" Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text"
      >
        {["S", "O", "R", "R", "Y", " "," ", "B", "R", "O"].map((char, index) => (
          <motion.span
            key={index}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            className="letter"
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Floating Heart Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="floating-heart"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: [-10, 10, -10], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
          style={{ left: `${Math.random() * 100}%`, animationDuration: `${2 + Math.random() * 3}s` }}
        />
      ))}
    </header>
  </div>
  );
}

export default App;