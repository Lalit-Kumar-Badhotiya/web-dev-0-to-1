import { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent
let item;
let price;

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);

    // Your code starts here
    const totalValue = useMemo(()=>{
        let ans =0;
        for(let i =0;i<items.length;i++){
            ans+=items[i].value;
        }
        return ans;
    },[items]);
    // Your code ends here
    return (
        <div>
            <div>
                <input type="text" placeholder='Item' onChange={(e)=>{
                    item=e.target.value;
                }}/>
                <input type="number" placeholder='price' onChange={(e)=>{
                    price=Number(e.target.value);
                }}/>
                <button onClick={()=>{
                    setItems([...items,{
                        name:item,
                        value:price
                    }])
                }}>add item</button>
            </div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};
