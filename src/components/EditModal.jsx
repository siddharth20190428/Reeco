import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../redux/productsSlice";

export default function EditModal({ open, setOpen }) {
  const { currentProduct } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});

  let total = (currentProduct.price * currentProduct.quantity).toFixed(2);
  if (formData.price && formData.quantity)
    total = (formData.price * formData.quantity).toFixed(2);
  else if (formData.price)
    total = (formData.price * currentProduct.quantity).toFixed(2);
  else if (formData.quantity)
    total = (formData.quantity * currentProduct.price).toFixed(2);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSend = () => {
    let status = 0;
    if (formData.price && formData.quantity) status = 6;
    else if (formData.price) status = 4;
    else if (formData.quantity) status = 5;
    dispatch(updateProduct({ ...currentProduct, ...formData, status }));
    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900"
                  >
                    {currentProduct ? currentProduct.name : ""}
                  </Dialog.Title>
                  <Dialog.Description>
                    {currentProduct ? currentProduct.brand : ""}
                  </Dialog.Description>
                  <div className="flex my-6">
                    <img src={currentProduct.img} className="w-20 h-20 mx-4" />
                    <div className="flex justify-around w-full">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="price">Price ($)</label>
                        <label htmlFor="quantity">Quantity</label>
                        <label>Total</label>
                      </div>
                      <div className="flex flex-col gap-2">
                        <input
                          type="number"
                          id="price"
                          defaultValue={currentProduct.price}
                          onChange={handleChange}
                          className="w-20 focus:outline-none focus:border-b"
                        />
                        <input
                          type="number"
                          id="quantity"
                          defaultValue={currentProduct.quantity}
                          onChange={handleChange}
                          className="w-20 focus:outline-none focus:border-b"
                        />
                        <span>{"$" + total}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3>Choose Reason (Optional)</h3>
                    <div className="my-4 flex flex-wrap">
                      <span className="px-4 py-1 m-2 rounded-3xl border-2">
                        Missing product
                      </span>
                      <span className="px-4 py-1 m-2 rounded-3xl border-2">
                        Quantity is not the same
                      </span>
                      <span className="px-4 py-1 m-2 rounded-3xl border-2">
                        Price is not the same
                      </span>
                      <span className="px-4 py-1 m-2 rounded-3xl border-2">
                        Other
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-3xl bg-green-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => handleSend()}
                  >
                    Send
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
