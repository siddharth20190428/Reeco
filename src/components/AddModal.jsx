import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productsSlice";

export default function AddModal({ open, setOpen }) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    dispatch(addProduct(formData));
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
                  <h1 className="text-xl font-bold">Add New Item</h1>
                  <form
                    onSubmit={handleSend}
                    className="flex flex-col gap-2 my-4"
                  >
                    <input
                      type="text"
                      id="image"
                      placeholder="Image"
                      onChange={handleChange}
                      required
                      className="border-b-2 focus:outline-none p-2"
                    />
                    <input
                      type="text"
                      id="name"
                      placeholder="Product Name"
                      onChange={handleChange}
                      required
                      className="border-b-2 focus:outline-none p-2"
                    />
                    <input
                      type="text"
                      id="brand"
                      placeholder="Brand"
                      onChange={handleChange}
                      required
                      className="border-b-2 focus:outline-none p-2"
                    />
                    <input
                      type="number"
                      id="price"
                      step="0.01"
                      min={1}
                      placeholder="Price"
                      onChange={handleChange}
                      className="border-b-2 focus:outline-none p-2"
                    />
                    <input
                      type="number"
                      id="quantity"
                      min={1}
                      placeholder="Quantity"
                      onChange={handleChange}
                      required
                      className="border-b-2 focus:outline-none p-2"
                    />
                    <div className="bg-gray-50 px-4 pt-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-3xl bg-green-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 sm:ml-3 sm:w-auto"
                      >
                        Add Item
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => setOpen(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
