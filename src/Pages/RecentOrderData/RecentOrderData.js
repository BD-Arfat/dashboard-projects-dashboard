import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from './Table';
import Filter from './Filter';
// import Slot from './Slot';
import { fetchproducts } from '../../features/Products/ProductsSlice';

const RecentOrderData = () => {


  const dispatch = useDispatch();
  const { sector, search, sort, region, topic,pestle,source, } = useSelector(state => state.filter);
  const { products, isLoading, isError } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchproducts())
  }, [dispatch]);

  let content;

  if (isLoading) content = <>
    loading.......
  </>
  if (!isLoading && isError) content = <>
    loading.......loading.....
  </>
  if (!isLoading && !isError && products?.length === 0) {
    content = <div>Products no found 😥😥😥</div>
  }
  if (!isLoading && !isError && products?.length > 0) {
    content = products.filter(product => {
      if (sector === 'Energy') {
        return (product.sector === sector)
      }
      else if (sector === 'Environment') {
        return (product.sector === sector)
      }
      else if (sector === 'Government') {
        return (product.sector === sector)
      }
      else if (sector === 'Aerospace & defence') {
        return (product.sector === sector)
      }
      else {
        return product
      }
    })


    .filter(product => {
      if (topic === 'gas') {
        return (product.topic === topic)
      }
      else if (topic === 'oil') {
        return (product.topic === topic)
      }
      else if (topic === 'market') {
        return (product.topic === topic)
      }
      else if (topic === 'market') {
        return (product.topic === topic)
      }
      else if (topic === 'markgdpet') {
        return (product.topic === topic)
      }
      else if (topic === 'battery') {
        return (product.topic === topic)
      }
      else {
        return product
      }
    })

      .filter(product => product.sector.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => {
        if (sort === 'lowToHigh') { return (Number(a.end_year) - Number(b.end_year)) }
        else if (sort === 'highToLow') { return (Number(b.end_year) - Number(a.end_year)) }
        else { return null }
      })
      .filter(product => {
        if (region === 'Northern America') {
          return (product.region === region)
        }
        else if (region === 'World') {
          return (product.region === region)
        }
        else if (region === 'Western Africa') {
          return (product.region === region)
        }
        else if (region === 'Eastern Europe') {
          return (product.region === region)
        }
        else {
          return product
        }
      })

      .filter(product => {
        if (pestle === 'Industries') {
          return (product.pestle === pestle)
        }
        else if (pestle === 'Environmental') {
          return (product.pestle === pestle)
        }
        else if (pestle === 'Economic') {
          return (product.pestle === pestle)
        }
        else if (pestle === 'Political') {
          return (product.pestle === pestle)
        }
        else if (pestle === 'Technological') {
          return (product.pestle === pestle)
        }
        else {
          return product
        }
      })
      .filter(product => {
        if (source === 'EIA') {
          return (product.source === source)
        }
        else if (source === 'sustainablebrands.com') {
          return (product.source === source)
        }
        else if (source === 'SBWire') {
          return (product.source === source)
        }
        else if (source === 'CleanTechnica') {
          return (product.source === source)
        }
        else if (source === 'TRAC News') {
          return (product.source === source)
        }
        else if (source === 'Vanguard News') {
          return (product.source === source)
        }
        else if (source === 'Avi Melamed') {
          return (product.source === source)
        }
        else if (source === 'Reuters') {
          return (product.source === source)
        }
        else if (source === 'Star Tribune') {
          return (product.source === source)
        }
        else if (source === 'Star Tribune') {
          return (product.source === source)
        }
        else if (source === 'EV Obsession') {
          return (product.source === source)
        }
        else {
          return product
        }
      })
      .map(product => <Table product={product} key={product._id} />)
  }

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200">
      <strong className="text-gray-700 font-medium flex items-center justify-between">
        <div className='me-10'>
          <Filter />
        </div>

        <div>
          {/* <Slot /> */}
        </div>
      </strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="max-w-full text-gray-700">
          <thead>
            <tr>
              <th className='text-[12px]'>Intensity</th>
              <th className='text-[12px]'>Likelihood</th>
              <th className='text-[12px]'>sector</th>
              <th className='text-[12px]'>Sector</th>
              <th className='text-[12px]'>topics</th>
              <th className='text-[12px]'>Pestle</th>
              <th className='text-[12px]'>Region</th>
              <th className='text-[12px]'>Source</th>
              <th className='text-[12px]'>Relevance</th>
              <th className='text-[12px]'>Start-Year</th>
              <th className='text-[12px]'>End-Year</th>
            </tr>
          </thead>
          {content}
        </table>
      </div>
    </div>
  );
};

export default RecentOrderData;