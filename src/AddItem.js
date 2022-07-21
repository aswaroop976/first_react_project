import { useState } from "react";



function AddItem(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const addItemButtonPressed= () =>{
        props.addItem({ name:name, price:price, type:type, brand:brand})
        setName("");
        setPrice(0);
        setType("");
        

        setBrand("");

    }

    return (
        <div className="container">
            <div className="row">
                <h2>Add an item</h2>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="name-field">Name:</label>
                    <input  className="form-control" id="name-field" type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className="col">
                    <label htmlFor="price-field">Price:</label>
                    <input  className="form-control" id="name-field" type="number" value={price}onChange={(e)=> setPrice(e.target.value)}/>
                </div>
                <div className="col">
                    <label htmlFor="type-field">type:</label>
                    <input  className="form-control" id="type-field" type="text" value={type} onChange={(e)=> setType(e.target.value)}/>
                </div>
                <div className="col">
                    <label htmlFor="brand-field">brand:</label>
                    <input  className="form-control" id="brand-field" type="text" value={brand} onChange={(e)=> setBrand(e.target.value)}/>
                </div>
            </div>
            
            <div className="row mt-3">
                <div className="col-5" />
                 <button type="button" className="col-2 btn btn-outline-info" onClick={addItemButtonPressed}>Add item</button>
            </div>
            
            

        </div>
    );    
}
export default AddItem;