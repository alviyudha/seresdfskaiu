/* eslint-disable no-unused-vars */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { infoDealer } from "../assets/js/modelData";
import CustomToast from "./CustomToast";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";




export default function Footer() {

   const [showToast,setShowToast] = useState(false)
   const [selectedDealer, setSelectedDealer]=useState("");
   const handleShowToast = (dealerData) =>{
    setSelectedDealer(dealerData);
    setShowToast(true);
   }
  return (
    <footer id="footer" className="footer bg-dark">
    <div className="footer-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-info">
              <h3>Office</h3>
              <p>
              Jl. Arteri Pd. Indah No.81, RT.6/RW.4,<br />
              Kby. Lama Utara, Kec. Kby. Lama,<br />
              Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12240<br />
              <strong>Phone:</strong>0812-9000-8267<br />
              <strong>Email:</strong> info@dfskseres-aiu.co.id<br />
              </p>
            </div>
          </div>

          <div className="col-lg-5 col-md-7 footer-links">
            <h4>Dealer</h4>
            <div className="row">
              {Object.keys(infoDealer).map((dealer, index) => (
                <div key={index} className="col-4">
                  <FontAwesomeIcon icon={faChevronRight} />
                  <a onClick={() => handleShowToast(dealer)}>{infoDealer[dealer].namaDelaer}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>About</h4>
            <p className="fs-6 text-secondary"><strong className="text-color-orange">PT Auto Indo Utama</strong> (PT AIU) adalah Authorized Dealer mobil DFSK. Merk DFSK telah menjadi sebuah Perusahaan Global dengan Standard yang diakui dunia. DFSK hadir di Indonesia dengan produk dan teknologi terkini yang mampu bersaing dalam persaingan pasar otomotif di Indonesia</p>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-legal text-center">
      <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
        <div className="d-flex flex-column align-items-center align-items-lg-start">
          <div className="copyright">
            &copy; Copyright <strong><span>PT.AIU</span></strong>. All Rights Reserved
          </div>
        </div>

        <div className="social-links order-first order-lg-last mb-3 mb-lg-0 ">
          {/* <a href="#" className="twitter"><FontAwesomeIcon icon={faSquareTwitter} /></a>
          <a href="#" className="facebook"><FontAwesomeIcon icon={faSquareFacebook} /></a> */}
          <a href="https://www.instagram.com/dfsk.seres_aiu/" target="_blank" className="instagram fs-3" rel="noreferrer"><FontAwesomeIcon icon={faSquareInstagram} /></a>
        </div>
      </div>
    </div>
    {showToast && (
      <CustomToast 
      show={showToast} setShow={setShowToast}
      DetailDealer={infoDealer[selectedDealer].infoService}
      />
    )
    
    }
  </footer>
    
  )
}
