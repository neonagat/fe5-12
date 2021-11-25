function BrandList(props) {


    const carsBrand = props.el.brand;
    const carsModel = props.el.model;

    return (

        <div>
            <li>{carsBrand}</li>
            <li>{carsModel}</li>

        </div>

    );
}

export default BrandList;
