import { HiCheck, HiX } from "react-icons/hi";

const products = [
  {
    id: 1,
    img: "/Avocado Hass.jpg",
    name: "Chicken Breast Fillets, Boneless matuuma Marinated 6 Ounce Raw Invivid",
    brand: "Hormel Black Labelmany",
    price: "60.67",
    quantity: "15",
    status: 6,
  },
];

const status = {
  0: "",
  1: "Approved",
  2: "Missing",
  3: "Missing Urgent",
  4: "Price Updated",
  5: "Quantity Updated",
  6: "Price and Quantity Updated",
};

const colors = {
  0: "",
  1: "bg-green-700",
  2: "bg-orange-700",
  3: "bg-red-700",
  4: "bg-green-700",
  5: "bg-green-700",
  6: "bg-green-700",
};

export default function Table() {
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
                {(product.price * product.quantity).toFixed(2)}
              </td>
              <td className="px-3 py-4 w-[16%]">
                <div
                  className={`border p-3 rounded-3xl ${
                    colors[product.status]
                  } text-white`}
                >
                  {status[product.status]}
                </div>
              </td>
              <td className="px-3 py-4 flex items-center my-auto">
                <button>
                  <HiCheck className="w-8 h-8 mr-5 scale-90 text-green-800" />
                </button>
                <button>
                  <HiX className="w-8 h-8 mr-5 scale-90 text-red-800" />
                </button>
                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
