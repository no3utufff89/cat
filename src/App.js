
import './App.css';
import Item from "./components/Item";

function App(props) {

  return (
    <div className="App">
        <div className="container">
            <span className="page_title">
                Ты сегодня покормил кота?
            </span>
            <ul className="cardsList">

                {props.products.map((obj,id)=>(

                        <Item  {...obj} />


                ))}


            </ul>
        </div>


    </div>
  );
}

export default App;
