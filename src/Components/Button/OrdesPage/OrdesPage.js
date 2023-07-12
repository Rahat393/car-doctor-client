import React, { useEffect, useState } from 'react';

const OrdesPage = ({order, handleDelete, handleStatusUpdate}) => {
  const { _id, serviceName,   price,   status } = order;
  const [orderService, setOrderService] = useState({})
  console.log(orderService);
console.log(_id);
    useEffect(() => {
        fetch(`http://localhost:5000/services/${_id}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [_id])


  return (
    <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)}  className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                 
                    <div>
                       
                        {serviceName}
                        <td>Purple</td>
                    </div>
                </div>
            </td>
            <td>
               
                <br />
                <span className=" text-lg">${price}</span>
            </td>
            
            <th>
                <button
                    onClick={() => handleStatusUpdate(_id)}
                    className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th>
        </tr>
  );
};

export default OrdesPage;