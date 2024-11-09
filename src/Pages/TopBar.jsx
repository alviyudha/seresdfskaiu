import { Logo, LogoAiu } from "../assets/Image/ImportImage"
export default function TopBar() {
    return (
      <>
      <div className="top-bar">
      <div className="container">
          <div className="row">
              <div className="col-6">
                  <img src={Logo} alt="Logo" width="100" height="30" className="d-inline-block align-text-top"/>
              </div>
              <div className="col-6 text-end">
              <img src={LogoAiu} alt="Logo" width="70" height="40" className="d-inline-block align-text-top"/>
              
              </div>
          </div>
      </div>
  </div>
  
      
      </>
    )
  }
  