import React from "react";

const Header = () => {
  return (
    <div className="w-3/5 mx-auto flex justify-between items-center py-4">
      <h1 className="uppercase">Trinh tien phat</h1>

      <ul className="nav flex gap-4 cursor-pointer">
        <li>github</li>
        <li>linkedin</li>
        <li>facebook</li>
      </ul>
    </div>
  );
};

export default Header;
