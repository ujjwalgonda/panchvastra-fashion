import React, { useState } from "react";
import AccountSidebar from "../../components/AccountSidebar";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import Badge from "../../components/Badge";
import { FaAngleUp } from "react-icons/fa6";

const Orders = () => {
  const [isOpenOrderdProduct, setIsOpenOrderdProduct] = useState(null);

  const isShowOrderdProduct = (index) => {
    if (isOpenOrderdProduct === index) {
      setIsOpenOrderdProduct(null);
    } else {
      setIsOpenOrderdProduct(index);
    }
  };

  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar />
        </div>

        <div className="col2 w-[80%]">
          <div className="shadow-md rounded-md bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>My Orders</h2>
              <p className="mt-0 mb-0">
                There are <span className="font-bold text-primary">2 </span>
                Orders
              </p>

              <div class="relative overflow-x-auto mt-5">
                <table class="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-500">
                  <thead class="text-xs text-gray-600 uppercase bg-gray-100">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        &nbsp;
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Order Id
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Payment Id
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Phone Number
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Pincode
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Total Amount
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        User Id
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Order Status
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-slate-100 border-b">
                      <td className="px-6 py-4 font-[500]">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                          onClick={() => isShowOrderdProduct(0)}
                        >
                          {isOpenOrderdProduct === 0 ? (
                            <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          ) : (
                            <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          )}
                        </Button>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary">P73980001</span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary">
                          HDFCN52024011404734278
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500] whitespace-nowrap">
                        Payal Verma{" "}
                      </td>
                      <td className="px-6 py-4 font-[500]">7905680759</td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="block w-[400px]">
                          240 Mankapur Rd. Kahoba Motiganj Gonda Uttar Pradesh
                          India
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">271305</td>
                      <td className="px-6 py-4 font-[500]">4595</td>
                      <td className="px-6 py-4 font-[500]">
                        panchvastra@gmail.com
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary">payal014042025</span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <Badge status="pending" />
                      </td>
                      <td className="px-6 py-4 font-[500] whitespace-nowrap">
                        14.04.2025
                      </td>
                    </tr>

                    {isOpenOrderdProduct === 0 && (
                      <tr>
                        <td className="pl-20" colSpan="6">
                          <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-500">
                              <thead class="text-xs text-gray-600 uppercase bg-gray-100">
                                <tr>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Product Id
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Product Title
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Image
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Quantity
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Price
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Sub Total
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr class="bg-white border-b">
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                      P73980001
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    Blue Sequins Lehenga Choli...
                                  </td>
                                  <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                    <img
                                      src="https://assets0.mirraw.com/images/13155483/GC_1431_%281%29_zoom.jpg?1742461111"
                                      className="w-[50px] h-50px] object-cover rounded-md"
                                    />
                                  </td>
                                  <td className="px-6 py-4 font-[500]">9</td>
                                  <td className="px-6 py-4 font-[500]">4595</td>
                                  <td className="px-6 py-4 font-[500]">
                                    41355
                                  </td>
                                </tr>
                                <tr class="bg-white border-b">
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                      P73980001
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    Blue Sequins Lehenga Choli...
                                  </td>
                                  <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                    <img
                                      src="https://assets0.mirraw.com/images/13155483/GC_1431_%281%29_zoom.jpg?1742461111"
                                      className="w-[50px] h-50px] object-cover rounded-md"
                                    />
                                  </td>
                                  <td className="px-6 py-4 font-[500]">9</td>
                                  <td className="px-6 py-4 font-[500]">4595</td>
                                  <td className="px-6 py-4 font-[500]">
                                    41355
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}

                    <tr class="bg-slate-100 border-b">
                      <td className="px-6 py-4 font-[500]">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                          onClick={() => isShowOrderdProduct(1)}
                        >
                          {isOpenOrderdProduct === 1 ? (
                            <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          ) : (
                            <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          )}
                        </Button>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary">P73980001</span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary">
                          HDFCN52024011404734278
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500] whitespace-nowrap">
                        Payal Verma{" "}
                      </td>
                      <td className="px-6 py-4 font-[500]">7905680759</td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="block w-[400px]">
                          240 Mankapur Rd. Kahoba Motiganj Gonda Uttar Pradesh
                          India
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">271305</td>
                      <td className="px-6 py-4 font-[500]">4595</td>
                      <td className="px-6 py-4 font-[500]">
                        panchvastra@gmail.com
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary">payal014042025</span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <Badge status="pending" />
                      </td>
                      <td className="px-6 py-4 font-[500] whitespace-nowrap">
                        14.04.2025
                      </td>
                    </tr>

                    {isOpenOrderdProduct === 1 && (
                      <tr>
                        <td className="pl-20" colSpan="6">
                          <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-500">
                              <thead class="text-xs text-gray-600 uppercase bg-gray-100">
                                <tr>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Product Id
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Product Title
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Image
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Quantity
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Price
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Sub Total
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr class="bg-white border-b">
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                      P73980001
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    Blue Sequins Lehenga Choli...
                                  </td>
                                  <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                    <img
                                      src="https://assets0.mirraw.com/images/13155483/GC_1431_%281%29_zoom.jpg?1742461111"
                                      className="w-[50px] h-50px] object-cover rounded-md"
                                    />
                                  </td>
                                  <td className="px-6 py-4 font-[500]">9</td>
                                  <td className="px-6 py-4 font-[500]">4595</td>
                                  <td className="px-6 py-4 font-[500]">
                                    41355
                                  </td>
                                </tr>
                                <tr class="bg-white border-b">
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                      P73980001
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    Blue Sequins Lehenga Choli...
                                  </td>
                                  <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                    <img
                                      src="https://assets0.mirraw.com/images/13155483/GC_1431_%281%29_zoom.jpg?1742461111"
                                      className="w-[50px] h-50px] object-cover rounded-md"
                                    />
                                  </td>
                                  <td className="px-6 py-4 font-[500]">9</td>
                                  <td className="px-6 py-4 font-[500]">4595</td>
                                  <td className="px-6 py-4 font-[500]">
                                    41355
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
