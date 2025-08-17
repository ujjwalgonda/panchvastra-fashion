import React, { useState } from 'react'
import { Link } from '@mui/material'
import Button from "@mui/material/Button";
import { FiMinusSquare } from "react-icons/fi";
import { FaRegPlusSquare } from "react-icons/fa";


const CategoryCollapse = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const openSubmenu = (index) => {
    if(submenuIndex===index){
      setSubmenuIndex(null);
    }else{
      setSubmenuIndex(index);
    }
  };
  
  const openInnerSubmenu = (index) => {
    if(innerSubmenuIndex===index){
      setInnerSubmenuIndex(null);
    }else{
      setInnerSubmenuIndex(index);
    }
  };
  return (
    <>
    <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                KIDS WEAR
              </Button>
            </Link>

            {submenuIndex === 0 ? (
              <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>openSubmenu(0)}/>
            ):(

              <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>openSubmenu(0)}/>

            )}
              {
                submenuIndex===0 && 
                <ul className="submenu w-full pl-3">
              <li className="list-none relative">
                <Link to="/" className="w-full">
                  <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                    BOYS WEAR
                  </Button>
                </Link>
                {innerSubmenuIndex === 0 ? (
              <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>openInnerSubmenu(0)}/>
            ):(

              <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>openInnerSubmenu(0)}/>

            )}

                  {
                    innerSubmenuIndex===0 && 
                    <ul className="inner_submenu w-full pl-3">
                  <li className="list-none relative">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      Dhoti Kurta
                    </Link>
                  </li>

                  <li className="list-none relative">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      Kurta Churidar
                    </Link>
                  </li>

                  <li className="list-none relative">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      Kurta Patiyala
                    </Link>
                  </li>

                  <li className="list-none relative">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      Sherwani
                    </Link>
                  </li>

                </ul>
                  }

                
              </li>
              <li className="list-none relative">
                <Link to="/" className="w-full">
                  <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                    GIRLS WEAR
                  </Button>
                </Link>
                {innerSubmenuIndex === 1 ? (
              <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>openInnerSubmenu(1)}/>
            ):(

              <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>openInnerSubmenu(1)}/>

            )}

                  {
                    innerSubmenuIndex=== 1 && 
                    <ul className="inner_submenu w-full pl-3">
                  <li className="list-none relative">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      Lehenga Choli
                    </Link>
                  </li>

                  <li className="list-none relative">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      Kurta Sets
                    </Link>
                  </li>

                  <li className="list-none relative">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      Gowns
                    </Link>
                  </li>

                  <li className="list-none relative">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      Sleepwear
                    </Link>
                  </li>

                </ul>
                  }

                
              </li>
            </ul>
              }
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                WOMENS WEAR
              </Button>
            </Link>

            {submenuIndex === 1 ? (
              <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>openSubmenu(1)}/>
            ):(

              <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>openSubmenu(1)}/>

            )}
              {
                submenuIndex=== 1 && 
                <ul className="submenu w-full pl-3">
              <li className="list-none relative">
                <Link to="/" className="w-full">
                  <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                    WEDDING SEASION
                  </Button>
                </Link>
                {innerSubmenuIndex === 1 ? (
              <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>openInnerSubmenu(1)}/>
            ):(

              <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>openInnerSubmenu(1)}/>

            )}

                  {
                    innerSubmenuIndex=== 1 && 
                    <ul className="inner_submenu w-full pl-3">
                  <li className="list-none relative">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      SANGEET
                    </Link>
                  </li>

                  <li className="list-none relative">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      RECEPTION & COCKTAIL
                    </Link>
                  </li>

                  <li className="list-none relative">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      MEHENDI
                    </Link>
                  </li>

                  <li className="list-none relative">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      BRIDAL TROUSSEAU
                    </Link>
                  </li>

                  <li className="list-none relative">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      Jewellery
                    </Link>
                  </li>

                </ul>
                  }

                
              </li>
              <li className="list-none relative">
                <Link to="/" className="w-full">
                  <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                    PARTY WEAR
                  </Button>
                </Link>
                {innerSubmenuIndex === 2 ? (
              <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>openInnerSubmenu(2)}/>
            ):(

              <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>openInnerSubmenu(2)}/>

            )}

                  {
                    innerSubmenuIndex=== 2 && 
                    <ul className="inner_submenu w-full pl-3">
                  <li className="list-none relative">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      KURTA SETS
                    </Link>
                  </li>

                  <li className="list-none relative">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      LEHENGAS
                    </Link>
                  </li>

                  <li className="list-none relative">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      Gowns
                    </Link>
                  </li>

                  <li className="list-none relative">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      SAREES
                    </Link>
                  </li>

                  <li className="list-none relative">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      TOPS
                    </Link>
                  </li>

                </ul>
                  }

                
              </li>
            </ul>
              }
          </li>
        </ul>
        
      </div>
    </>
  )
}

export default CategoryCollapse
