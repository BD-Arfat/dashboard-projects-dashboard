import React from 'react';
import { useDispatch } from 'react-redux';
import { pestletype, productype, regiontype, sourcetype, topictype,  } from '../../features/filter/filterSlice';
// import { AiOutlineCaretDown } from 'react-icons/ai';

const Filter = () => {

    const dispatch = useDispatch()

    return (
        <div className='flex gap-2'>
            <select onChange={(e) => dispatch(productype(e.target.value))} className="select select-bordered w-full">
                <option value='default' selected>sector</option>
                <option value='Energy'>Energy</option>
                <option value='Environment'>Environment</option>
                <option value='Government'>Government</option>
                <option value='Aerospace & defence'>Aerospace & defence</option>
            </select>
            <select onChange={(e) => dispatch(topictype(e.target.value))} className="select select-bordered w-full">
                <option value='default' selected>topics</option>
                <option value='gas'>gas</option>
                <option value='oil'>oil</option>
                <option value='consumption'>consumption</option>
                <option value='market'>market</option>
                <option value='gdp'>gdp</option>
                <option value='battery'>battery</option>
            </select>
            <select onChange={(e) => dispatch(regiontype(e.target.value))} className="select select-bordered w-full">
                <option value='default' selected>Region</option>
                <option value='Northern America'>Northern America	</option>
                <option value='World'>World</option>
                {/* <option value='Western Africa'>Western Africa</option> */}
                <option value='Eastern Europe'>Eastern Europe</option>
            </select>
            <select onChange={(e) => dispatch(pestletype(e.target.value))} className="select select-bordered w-full">
                <option value='default' selected>Pestle</option>
                <option value='Industries'>Industries</option>
                <option value='Environmental'>Environmental</option>
                <option value='Economic'>Economic</option>
                <option value='Political'>Political</option>
                <option value='Technological'>Technological</option>
            </select>
            <select onChange={(e) => dispatch(sourcetype(e.target.value))} className="select select-bordered w-full">
                <option value='default' selected>source</option>
                <option value='EIA'>EIA</option>
                <option value='sustainablebrands.com'>sustainablebrands.com</option>
                <option value='SBWire'>SBWire</option>
                <option value='CleanTechnica'>CleanTechnica</option>
                <option value='TRAC News'>TRAC News</option>
                <option value='Vanguard News'>Vanguard News</option>
                <option value='Avi Melamed'>Avi Melamed</option>
                <option value='Reuters'>Reuters</option>
                <option value='Star Tribune'>Star Tribune</option>
                <option value='EV Obsession'>EV Obsession</option>
            </select>
          

        </div>
    );
};

export default Filter;