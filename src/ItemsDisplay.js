function ItemsDisplay({items, deleteItem}){
    const showItem = (item)=>{
        return (
        <tr>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.type}</td>
            <td>{item.brand}</td>
            <td><button className="btn btn-danger" onClick={()=>deleteItem(item)}>Delete</button></td>
        </tr>);
    }
    return (
        <div className="container">
            <div className="row">
                <h2>Items</h2>
            </div>
            <div className="row">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">price</th>
                            <th scope="col">type</th>
                            <th scope="col">brand</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>{items.map(showItem)}</tbody>
                </table>
            </div>
        </div>
    );
}

export default ItemsDisplay;