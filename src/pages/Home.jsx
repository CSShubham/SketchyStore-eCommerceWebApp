import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../slice/ProductAction";
import Loading from "../components/Loading";
// import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import Pagination from "../components/Pagination";


export default function Home() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
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
    <Sidebar/>
    <div className="h-screen w-full overflow-auto p-10">
      <h1 className="text-3xl font-bold mb-4 border-b-1 pb-3">All Products</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] overflow-auto border-b-1 pb-5 gap-4">
        {items.map((product) => (
          // <div key={product.id} onClick={() => navigate(`/${product.id}`)} className="border-0 p-2 rounded shadow">
          //   <img
          //     src={product.thumbnail}
          //     alt={product.title}
          //     className="w-full h-40 object-contain"
          //   />

          //   <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
          //   <p className="text-green-600 font-bold">${product.price}</p>
          //   <div className="flex justify-between items-center mt-2 ">
          //     <p className="text-sm text-gray-500 capitalize">
          //       {product.category}
          //     </p>
          //     <button
          //       className="border-1 px-2 py-1 cursor-pointer"
          //       onClick={() => dispatch(addToCart(product))}
          //     >
          //       Add To Cart
          //     </button>
          //   </div>
          // </div>
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
      <Pagination page={page} setPage={setPage}/>
    </div>
    </>
  );
}
