import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
            <div className="footer">
                <p>&copy; {new Date().getFullYear()} The Introvert's Space. All rights reserved.</p>

                <p>Designed by: <Link to="https://nduryamuhammad.vercel.app/" className="text-green-600">Ndurya Muhammad</Link></p>
            </div>
    );
}
