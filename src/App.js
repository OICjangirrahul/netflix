import './App.css';

function App() {
  let name = 'i love you programing';
  document.addEventListener('click',function(){
   let a = document.querySelector('h1').innerText;
   console.log(a);
  });
  console.log('helllo');
  return (
    <div className="App">
     <h1>{name}</h1>
    </div>
  );
}

export default App;
