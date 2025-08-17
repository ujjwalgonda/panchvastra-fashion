import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../Sidebar/style.css";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { Button } from "@mui/material";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from '@mui/material/Rating';

const Sidebar = () => {
  const [isOpenCategoryFilte, setIsOpenCategoryFilter] = useState(true);
  const [isOpenAvailabilityFilte, setIsOpenAvailabilityFilter] = useState(true);
  const [isOpenSizeFilte, setIsOpenSizeFilter] = useState(true);

  return (
    <aside className="sidebar py-5">
      <div className="box">
        <h3 className="w-full mb-3 text-[14px] font-[600] flex items-center pr-5">
          Refine
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilte)}
          >
            {isOpenCategoryFilte === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenCategoryFilte}>
          <div className="scroll px-4 relative -left-[13PX]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Kids Wear"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Lehenga"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Sarees"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Wedding"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Mens Kurta"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Womens Wear"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Footwear"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box">
        <h3 className="w-full mb-3 text-[14px] font-[600] flex items-center pr-5">
          Availability
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() =>
              setIsOpenAvailabilityFilter(!isOpenAvailabilityFilte)
            }
          >
            {isOpenAvailabilityFilte === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenAvailabilityFilte}>
          <div className="scroll px-4 relative -left-[13PX]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Available (17)"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="In Stock (10)"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Out Of Stcok (1)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-3">
        <h3 className="w-full mb-3 text-[14px] font-[600] flex items-center pr-5">
          Size
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsOpenSizeFilter(!isOpenSizeFilte)}
          >
            {isOpenSizeFilte === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenSizeFilte}>
          <div className="scroll px-4 relative -left-[13PX]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Small (10)"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Medium (10)"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Large (17)"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XL (17)"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XXL (17)"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="3XL (17)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-4">
        <h3 className="w-full mb-3 text-[14px] font-[600] flex items-center pr-5">
        Refine by Price
        </h3>


        <RangeSlider />
        <div className="flex pt-4 pb-2 priceRange">
          <span className="text-[12px]">
            From: <strong className="text-dark">₹ {100}</strong>
          </span>
          <span className="ml-auto text-[12px]">
            From: <strong className="text-dark">₹ {5000}</strong>
          </span>
        </div>

        </div>

        <div className="box mt-4">
        <h3 className="w-full mb-3 text-[14px] font-[600] flex items-center pr-5">
        Refine by Rating
        </h3>


        <div className="w-full">
        <Rating name="size-small" defaultValue={5} size="small" readOnly />
        </div>
        <div className="w-full">
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        </div>
        <div className="w-full">
        <Rating name="size-small" defaultValue={3} size="small" readOnly />
        </div>
        <div className="w-full">
        <Rating name="size-small" defaultValue={2} size="small" readOnly />
        </div>
        <div className="w-full">
        <Rating name="size-small" defaultValue={1} size="small" readOnly />
        </div>
        

        </div>
    </aside>
  );
};

export default Sidebar;
