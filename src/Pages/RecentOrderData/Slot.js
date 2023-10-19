import React from 'react';
import { useDispatch } from 'react-redux';
import { sortType } from '../../features/filter/filterSlice';

const Slot = () => {
    const dispatch = useDispatch()
    return (
        <div>
             <select onChange={(e)=> dispatch(sortType(e.target.value))} className="select select-bordered w-full">
                <option value='default' selected>Default</option>
                <option value='highToLow'>From previous year to current year</option>
                <option value='lowToHigh'></option>
            </select>
        </div>
    );
};

export default Slot;