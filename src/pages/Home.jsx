import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../slice/ProductAction";
import Loading from "../components/Loading";

import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import Pagination from "../components/Pagination";


export default function Home() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const limit = 10;
  const { items, categories, loading, error } = useSelector((state) => state.products);
  //console.log(items);  //[0:{},1:{}]gives an array of all products
  useEffect(() => {
    dispatch(fetchAllProducts(page,limit))
  }, [dispatch,page,limit]);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <div className="flex min-h-screen w-full px-0 ">
    <Sidebar/>
    <div className="h-screen flex-1 overflow-y-auto px-2 py-4 sm:px-4 md:px-10">
      <h1 className="text-lg sm:text-2xl md:text-3xl font-bold mb-4 border-b-1 pb-3">All Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-auto border-b-1 pb-5 gap-4">
        {items.map((product) => (
          
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
      <Pagination page={page} setPage={setPage}/>
    </div>
    </div>
    </>
  );
}
