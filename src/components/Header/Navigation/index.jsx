import { Button } from '@mui/material';
import React, { useState } from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { CiDeliveryTruck } from "react-icons/ci";
import { HiOutlineHome } from "react-icons/hi";
import CategoryPanel from './CategoryPanel';
import "../Navigation/style.css"

const Navigation = () => {

  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  }



  return (
    <>
      <nav>
        <div className='container flex items-center justify-end gap-5'>
          <div className='col_1 w-[15%]'>
            <Button className='!text-black gap-2 w-full' onClick={openCategoryPanel}>
              <RiMenu2Fill className='text-[12px] font-[500]' />Shop By Categories
              <LiaAngleDownSolid className='text-[15px] ml-auto font-bold ' />
            </Button>
          </div>

          <div className='col_2 w-[65%]'>
            <ul className='flex items-center gap-5 nav'>
              <li className='list-none'>
                <Link to="/" className=''>
                  <HiOutlineHome className='link transition text-[18px] text-gray-800'/></Link>
              </li>

              <li className='list-none relative'>
                <Link to="/" className='link transition text-[12px] font-[500]'>NEW ARRIVALS</Link>
                <div className='submenu absolute top-[100%] left-[0%] min-w-[700px] bg-white shadow-md opacity-0 transition-all'>
                  <ul>
                    <li className='list-none w-full'>
                      <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Lehenga Choli</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Wedding Saree</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Groom Sherwani</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Party Wear Gown</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Panchvastra Fashion</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Panchvastra Blogs</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Festival Fashion</Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='list-none relative'>
                <Link to="/" className='link transition text-[12px] font-[500]'>KURTA SETS</Link>
                <div className='submenu absolute top-[100%] left-[0%] min-w-[700px] bg-white shadow-md opacity-0 transition-all'>
                  <ul>
                    <li className='list-none w-full'>
                      <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Lehenga Choli</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Wedding Saree</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Groom Sherwani</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Party Wear Gown</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Panchvastra Fashion</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Panchvastra Blogs</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Festival Fashion</Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='list-none relative'>
                <Link to="/" className='link transition text-[12px] font-[500]'>LEHENGAS</Link>
                <div className='submenu absolute top-[100%] left-[0%] min-w-[700px] bg-white shadow-md opacity-0 transition-all'>
                  <ul>
                    <li className='list-none w-full'>
                      <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Lehenga Choli</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Wedding Saree</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Groom Sherwani</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Party Wear Gown</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Panchvastra Fashion</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Panchvastra Blogs</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Festival Fashion</Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='list-none relative'>
                <Link to="/" className='link transition text-[12px] font-[500]'>SAREES</Link>
                <div className='submenu absolute top-[100%] left-[0%] min-w-[700px] bg-white shadow-md opacity-0 transition-all'>
                  <ul>
                    <li className='list-none w-full'>
                      <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Lehenga Choli</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Wedding Saree</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Groom Sherwani</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Party Wear Gown</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Panchvastra Fashion</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Panchvastra Blogs</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Festival Fashion</Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='list-none relative'>
                <Link to="/" className='link transition text-[12px] font-[500]'>MENS WEAR</Link>
                <div className='submenu absolute top-[100%] left-[0%] min-w-[500px] bg-white shadow-md opacity-0 transition-all'>
                  <ul>
                    <li className='list-none w-full'>
                      <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Lehenga Choli</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Wedding Saree</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Groom Sherwani</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Party Wear Gown</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Panchvastra Fashion</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Panchvastra Blogs</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Festival Fashion</Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='list-none relative'>
                <Link to="/" className='link transition text-[12px] font-[500]'>KIDS WEAR</Link>
                <div className='submenu absolute top-[100%] left-[0%] min-w-[700px] bg-white shadow-md opacity-0 transition-all'>
                  <ul>
                    <li className='list-none w-full'>
                      <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Lehenga Choli</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Wedding Saree</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Groom Sherwani</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Party Wear Gown</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Panchvastra Fashion</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Panchvastra Blogs</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Festival Fashion</Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='list-none relative'>
                <Link to="/" className='link transition text-[12px] font-[500]'>WEDDING</Link>
                <div className='submenu absolute top-[100%] left-[0%] min-w-[600px] bg-white shadow-md opacity-0 transition-all'>
                  <ul>
                    <li className='list-none w-full'>
                      <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Lehenga Choli</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Wedding Saree</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Groom Sherwani</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Party Wear Gown</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Panchvastra Fashion</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Panchvastra Blogs</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Festival Fashion</Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='list-none relative'>
                <Link to="/" className='link transition text-[12px] font-[500]'>FOOTWEAR</Link>
                <div className='submenu absolute top-[100%] left-[0%] min-w-[500px] bg-white shadow-md opacity-0 transition-all'>
                  <ul>
                    <li className='list-none w-full'>
                      <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Lehenga Choli</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Wedding Saree</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Groom Sherwani</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Party Wear Gown</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Panchvastra Fashion</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Panchvastra Blogs</Button>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                    <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none !font-sans !text-[12px]'>Festival Fashion</Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

            </ul>
          </div>

          <div className='col_3 w-[20%]'>
            <p className="text-[13px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <CiDeliveryTruck className='text-[18px]' />100% Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      {/* Category panel component */}
      <CategoryPanel isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel} />
    </>
  )
}

export default Navigation;
