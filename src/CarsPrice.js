function CarsPrice(props) {

    const carsYear = props.el.year;
    const carsPrice = props.el.price;

    return (
        <div>
            {carsYear}
            {carsPrice}
        </div>

    );
}

export default CarsPrice;
