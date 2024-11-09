import { Link } from "react-router-dom";
import { modelData } from "../assets/js/modelData";

export default function Models() {
  return (
    <>
      <section
        className="section-custom"
        style={{ marginTop: "30px" }}
        id="section-secvehicles"
      >
        <div className="container">
          {modelData.map((tab) => (
            <div key={tab.id}>
              <nav>
                <div
                  className="nav nav-tabs box-tab-secvehicles"
                  id={`nav-tab-${tab.id}`}
                  role="tablist"
                >
                  <button
                    className="nav-link nav-link-sec"
                    id={`${tab.id}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#nav-${tab.id}`}
                    type="button"
                    role="tab"
                    aria-controls={`nav-${tab.id}`}
                    aria-selected="true"
                  >
                    {tab.label}
                  </button>
                </div>
              </nav>
              <div
                className="tab-content mt-5 mb-5"
                id={`nav-tabContent-${tab.id}`}
              >
                <div
                  className="tab-pane fade show active"
                  id={`nav-${tab.id}`}
                  role="tabpanel"
                  aria-labelledby={`${tab.id}-tab`}
                >
                  <div className="row">
                    {tab.items.map((item) => (
                      <div key={item.to} className="col-md-4 card-vehicles">
                        <Link to={item.to} className="vehicle-link">
                          <img
                            src={item.imgSrc}
                            className="card-img-top"
                            alt={item.alt}
                          />
                        </Link>
                        <div className="card-footer">
                          <p className="card-text text-center vehicles-card-caption align-self-end">
                            {item.caption}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
