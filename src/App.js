import {useState} from "react";
import BrandList from "./BrandList";
import CarsPrice from "./CarsPrice";

function App() {

    const [counter, setCounter] = useState(10);
    const [newCounter, newSetCounter] = useState(100);

    const carsList = [
        {brand: 'Honda', model: 'CRV', year: 2015, price: 21000, id: 'sd45tg'},
        {brand: 'Toyota', model: 'Corolla', year: 2012, price: 15000, id: 'df666hn'},
        {brand: 'Tesla', model: 's3', year: 2020, price: 32000, id: '567hfh6'}
    ];

    const buttonPlus = () => {
        setCounter(counter + 1);
    }

    const buttonMinus = () => {
        setCounter(counter - 1)
    };

    const buttonMultiply = () => {
        setCounter(counter * 2);
    }

    const buttonDivide = () => {
        setCounter(counter / 2);
    }

    const newButtonPlus = () => {
        newSetCounter(newCounter + 10);
    }

    const newButtonMinus = () => {
        newSetCounter(newCounter - 10);
    }

    const newButtonMultiply = () => {
        newSetCounter(newCounter * 5);
    }

    const newButtonDivide = () => {
        newSetCounter(newCounter / 5);
    }

    return (
        <div>
            <button onClick={buttonMultiply}>*2</button>
            <button onClick={buttonPlus}>+1</button>
            {counter}
            <button onClick={buttonMinus}>-1</button>
            <button onClick={buttonDivide}>/2</button>
            <hr/>
            <button onClick={newButtonMultiply}>*5</button>
            <button onClick={newButtonPlus}>+10</button>
            {newCounter}
            <button onClick={newButtonMinus}>-10</button>
            <button onClick={newButtonDivide}>/5</button>
            <hr/>
            {carsList.map(el => <BrandList el={el}/>)}
            <hr/>
            {carsList.map(el => <CarsPrice el={el}/>)}
        </div>
    );
}

export default App;
