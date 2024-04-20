function List(props){
    const category=props.category;
    const Listitem= props.items;
   

    const itemList = Listitem.map(item =>
        <li key={item.id}>
            {item.name}: &nbsp; 
            <b>{item.calorise}</b>
        </li>
    )
    return(
       <>
         <h2>{category}</h2>
         <ol>{itemList}</ol>
       </>
    );
}

export default List