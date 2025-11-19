import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
            <div className="footer">
                <p>&copy; {new Date().getFullYear()} Travel & Tech Blog. All rights reserved.</p>

                <p>Designed by: <Link to="https://ndurya.vercel.app/">Ndurya Muhammad</Link></p>
            </div>
    );
}
