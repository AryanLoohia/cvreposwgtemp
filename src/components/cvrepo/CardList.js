import Interncv from "./interncv";
import "./CardList.css";
import { useState,useEffect } from "react";
import { useCallback } from "react";
import { internCVList } from "./data_interncv";
import { placementCVList } from "./data_placementcv";
let PRODUCTS = internCVList;


function ProductFilters(props) {
  const { categories, onFilterChange } = props;

  return (
    <section className="filters" aria-labelledby="filters-header">
      <ul className="Menu">
        {categories.map((category) => (
          <li key={category}>
            <label class="profilename">
              <input
                onChange={onFilterChange}
                type="checkbox"
                value={category}
              />
              {category}
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}

const ITEMS_PER_PAGE = 20;

const CardList = () => {


  const [toggleState, setToggleState] = useState(1);
  const [state, setState] = useState({
    products: PRODUCTS,
    filters: new Set(),
  });
  const [currentPage, setCurrentPage] = useState(1);

  const toggleTab = useCallback((index) => {
    setToggleState(index);
    setCurrentPage(1);
    if (index === 1) {
      PRODUCTS = internCVList;
    } else {
      PRODUCTS = placementCVList;
    }
    setState((previousState) => {
      let filters = new Set(previousState.filters);
      let products = PRODUCTS;
      return {
        filters,
        products,
      };
    });
  }, [setState]);


  const CATEGORIES = ["software", "consultancy", "data", "product", "core", "quant", "finance"];

  const handleFilterChange = useCallback(
    (event) => {
      setCurrentPage(1);
      setState((previousState) => {
        let filters = new Set(previousState.filters);
        let products = PRODUCTS;

        if (event.target.checked) {
          filters.add(event.target.value);
        } else {
          filters.delete(event.target.value);
        }

        if (filters.size) {
          products = products.filter((product) => {
            return filters.has(product.category);
          });
        }

        return {
          filters,
          products,
        };
      });
    },
    [setState]
  );

  const totalItems = state.products.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const paginatedProducts = state.products.slice(startIdx, endIdx);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isMobileView, setMobileView] = useState(false);
  const [isExpanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleFilterToggle = () => {
    setFilterOpen(!isFilterOpen);
    setExpanded(!isExpanded);
    var element = document.getElementsByClassName("sidepanel")[0];
    element.classList.toggle("expand");
  };
  
  return (
    <>
      
      <div className={`sidepanel ${isExpanded ? "expand" : ""}`}>
      <div className="exp">
      <div className="sidepanel_title">
        {!isMobileView&&<h2>Select Profile(s)</h2>}
        {isMobileView && (
        <span className="filter-icon" onClick={handleFilterToggle}>
          <h3>Select Profile(s)</h3>
        </span>
      )}
      </div>

      {/* Render filter icon for mobile view */}
      

      {/* Render filters */}
      {isMobileView && isFilterOpen && (
        <ProductFilters
          categories={CATEGORIES}
          onFilterChange={handleFilterChange}
        />
      )}

      {/* Render full panel for desktop view */}
      {!isMobileView && (
        <ProductFilters
          categories={CATEGORIES}
          onFilterChange={handleFilterChange}
        />
      )}
      </div>
    </div>
      <div className="Tcontainer">
        <div></div>
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Internships
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Placement
          </button>
        </div>
        {/* Pagination Controls - move above cards */}
        {totalPages > 1 && (
          <div className="pagination-controls" style={{ margin: '24px 0', display: 'flex', justifyContent: 'center', gap: '8px' }}>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>&laquo; Prev</button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={currentPage === i + 1 ? 'active' : ''}
                style={{ fontWeight: currentPage === i + 1 ? 'bold' : 'normal' }}
              >
                {i + 1}
              </button>
            ))}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next &raquo;</button>
          </div>
        )}
        <div className="content-tabs">
          <div className={toggleState === 2 ? "contentcv  active-contentcv" : "contentcv"}>
            <Interncv blogs={paginatedProducts} />
          </div>
          <div className={toggleState === 1 ? "contentcv  active-contentcv" : "contentcv"}>
            <Interncv blogs={paginatedProducts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardList;