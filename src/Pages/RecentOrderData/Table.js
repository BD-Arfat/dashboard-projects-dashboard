import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

const Table = ({product}) => {
    // console.log(product)
    return (
        <tbody>
            <tr key={product.id}>
                <td>{product.intensity}</td>
                <td>{product.likelihood}</td>
                <td>{product.country}</td>
                <td>{product.sector}</td>
                <td>{product.topic}</td>
                <td>{product.pestle}</td>
                <td>{product.region}</td>
                <td>{product.source}</td>
                <td>{product.relevance}</td>
                <td>{product.start_year}</td>
                <td>{product.end_year}</td>
            </tr>
        </tbody>
    );
};

export default Table;