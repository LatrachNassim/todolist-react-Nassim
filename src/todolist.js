import React, { useState } from 'react';


const todo = []
const MyContext = React.createContext(data);

const [data, setData] = useState (true);

const addData = (e, index) => {
    todo.push(index);
    setData(data)
}

const delateData = (e, index) => {
    todo.slice(index);
    setData(!data)
}

retrun (
<div>
<span className={(data == true ? '' : -1 )}></span>
<button onClick = {(e) => addData('')}>add</button>
<button onClick = {(e) => addData(-1)}>delete</button>
</div>
);

export default todolist;
