import { useState } from "react";
import { HiCheck, HiX } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentProduct, updateProduct } from "../redux/productsSlice";
import { colors, status } from "../utils";
import MissingModal from "./MissingModal";
import EditModal from "./EditModal";

export default function Table() {
  const [missingOpen, setMissingOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const handleApprove = (id) => {
    dispatch(updateProduct({ id, status: 1 }));
  };

  const handleMissing = (prod) => {
    setMissingOpen(true);
    dispatch(setCurrentProduct(prod));
  };
  const handleEdit = (prod) => {
    setEditOpen(true);
    dispatch(setCurrentProduct(prod));
  };
  return (
    <div className="my-8 shadow overflow-hidden border border-gray-400 sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-400 table-fixed">
        <thead className="bg-gray-200 text-xs font-medium text-gray-800 uppercase tracking-wider">
          <tr className="text-left ">
            <th scope="col" className="relative px-3 py-3"></th>
            <th scope="col" className="px-3 py-3">
              Product Name
            </th>
            <th scope="col" className="px-3 py-3">
              Brand
            </th>
            <th scope="col" className="px-3 py-3">
              Price
            </th>
            <th scope="col" className="px-3 py-3">
              Quantity
            </th>
            <th scope="col" className="px-3 py-3">
              Total
            </th>
            <th scope="col" className="px-3 py-3">
              Status
            </th>
            <th scope="col" className="relative px-3 py-3"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id} className="text-sm">
              <td className="px-3 py-4 w-[7%]">
                <img src={product.img} className="w-16 h-16" />
              </td>
              <td className="px-3 py-4 w-1/3">{product.name}</td>
              <td className="px-3 py-4 w-[10%]">{product.brand}</td>
              <td className="px-3 py-4 w-[8%]">{`$${product.price}`}</td>
              <td className="px-3 py-4 w-[8%]">{product.quantity}</td>
              <td className="px-3 py-4 w-[8%]">
                {"$" + (product.price * product.quantity).toFixed(2)}
              </td>
              <td className="px-3 py-4 w-[16%]">
                <div
                  className={`border p-3 rounded-3xl w-fit ${
                    colors[product.status]
                  } text-white`}
                >
                  {status[product.status]}
                </div>
              </td>
              <td className="px-3 py-4">
                <div className="flex">
                  <button onClick={() => handleApprove(product.id)}>
                    <HiCheck
                      className={`w-8 h-8 mr-5 scale-90 ${
                        product.status == 1 ? "text-green-600" : ""
                      }`}
                    />
                  </button>
                  <button onClick={() => handleMissing(product)}>
                    <HiX
                      className={`w-8 h-8 mr-5 scale-90 ${
                        product.status == 2 || product.status == 3
                          ? "text-red-600"
                          : ""
                      }`}
                    />
                  </button>
                  <button
                    onClick={() => handleEdit(product)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <MissingModal open={missingOpen} setOpen={setMissingOpen} />
      <EditModal open={editOpen} setOpen={setEditOpen} />
    </div>
  );
}
