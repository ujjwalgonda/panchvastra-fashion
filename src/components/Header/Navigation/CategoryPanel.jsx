import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import CategoryCollapse from "../../CategoryCollapse";

const CategoryPanel = (props) => {

  const togglerDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="py-3 pl-5 text-[16px] font-[500] flex items-center justify-between">
        Shop By Categories
        <IoCloseSharp
          onClick={togglerDrawer(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>

      <CategoryCollapse/>
    </Box>
  );

  return (
    <>
      <Drawer open={props.isOpenCatPanel} onClose={togglerDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CategoryPanel;
