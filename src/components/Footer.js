import React, { useEffect, useState } from "react";
const Footer = () => {
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year
    };
    return(
        <div className="main-footer">
            <p className="copyright">
            Copyright &copy; Con-Con <span>{thisYear()}</span>
            </p>
        </div>
    )
}
export default Footer;