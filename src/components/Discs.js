import React, { useState, useEffect } from "react";
import DiscCards from "./DiscCards";
import axios from "axios";

// component for the main disc grid
const Discs = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [discs, setDiscs] = useState([]);
  const [filterdiscs, setFilterDiscs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  // get the API calls and save to state
  //   fetch discs from API
  async function fetchDiscs() {
    setLoading(true);
    const getdiscs = await axios
      .get(`https://jess-mydiscs.azurewebsites.net/api/disc`)
      .then(function (response) {
        if (response.status !== 200) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        // set response to setDiscs to keep a copy of all discs and to setFilterDiscs to reset the filterd discs
        setDiscs(response.data);
        setFilterDiscs(response.data);
        setError(null);
        setLoading(false);
      })
      .catch(function (error) {
        setDiscs([]);
        setError(error.message);
      });
  }
  //   fetch categories from API
  async function fetchCategories() {
    setLoading(true);
    const getcategories = await axios
      .get(`https://jess-mydiscs.azurewebsites.net/api/category`)
      .then(function (response) {
        if (response.status !== 200) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        setCategories(response.data);
        setError(null);
        setLoading(false);
      })
      .catch(function (error) {
        setCategories([]);
        setError(error.message);
      });
  }
  //   // get brands from API

  async function fetchBrands() {
    setLoading(true);
    const getbrands = await axios
      .get(`https://jess-mydiscs.azurewebsites.net/api/brand`)
      .then(function (response) {
        if (response.status !== 200) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        setBrands(response.data);
        setError(null);
        setLoading(false);
      })
      .catch(function (error) {
        setBrands([]);
        setError(error.message);
      });
  }
  useEffect(() => {
    fetchBrands();
    fetchCategories();
    fetchDiscs();
  }, []);

  // filter discs by brand
  const filterBrand = (brandId) => {
    setFilterDiscs(
      discs.filter((disc) => {
        return disc.brandId === brandId;
      })
    );
  };

  // filter discs by category
  const filterCategory = (categoryId) => {
    setFilterDiscs(
      discs.filter((disc) => {
        return disc.categoryId === categoryId;
      })
    );
  };
  // filter discs by bagged
  const filterBagged = (bagged) => {
    setFilterDiscs(
      discs.filter((disc) => {
        return disc.bagged === bagged;
      })
    );
  };
  // reset filter to all discs to full list of discs
  const filterAll = () => {
    setFilterDiscs(discs);
  };

  return (
    <main className="flex flex-col min-h-screen">
      <div className="grid md:grid-cols-3 m-4 font-bold">
        {/* navigations with filter options */}
        <nav>
          <h2 className="text-md font-bold text-center py-3">Brand</h2>
          <div className="flex justify-evenly flex-wrap">
            <button
              onClick={() => filterAll()}
              className="border-black border-2 shadow-md m-1 text-xs hover:bg-black hover:text-white"
            >
              All
            </button>
            {brands.map((brand) => (
              <button
                onClick={() => filterBrand(brand.brandId)}
                key={brand.brandId}
                className="border-black border-2 shadow-md m-1 text-xs hover:bg-black hover:text-white"
              >
                {brand.brandName}
              </button>
            ))}
          </div>
        </nav>
        <nav>
          <h2 className="text-md font-bold text-center py-3">In bag</h2>
          <div className="flex justify-center flex-wrap">
            <button
              onClick={() => filterAll()}
              className="border-black border-2 shadow-md m-1 text-xs hover:bg-black hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterBagged(true)}
              className="border-black border-2 shadow-md m-1 text-xs hover:bg-black hover:text-white"
            >
              Yes
            </button>
            <button
              onClick={() => filterBagged(false)}
              className="border-black border-2 shadow-md m-1 text-xs hover:bg-black hover:text-white"
            >
              No
            </button>
          </div>
        </nav>
        <nav>
          <h2 className="text-md font-bold text-center py-3">Disctype</h2>
          <div className="flex justify-evenly flex-wrap">
            <button
              onClick={() => filterAll()}
              className="border-black border-2 shadow-md m-1 text-xs hover:bg-black hover:text-white"
            >
              All
            </button>
            {categories.map((category) => (
              <button
                onClick={() => filterCategory(category.categoryId)}
                key={category.categoryId}
                className="border-black border-2 shadow-md m-1 text-xs hover:bg-black hover:text-white"
              >
                {category.categoryName}
              </button>
            ))}
          </div>
        </nav>
      </div>
      <section className="flex flex-row flex-wrap justify-evenly ">
        {/* show error or loading when needed */}
        {loading && <div>Loading...</div>}
        {error && (
          <p className="text-red-600">{`There is a problem fetching the discs - ${error}`}</p>
        )}
        {/* show error if filtering does not cointain any discs */}
        {filterdiscs.length === 0 ? (
          <p className="text-red-600">No discs found.</p>
        ) : (
          filterdiscs.map((disc) => <DiscCards key={disc.discId} disc={disc} />)
        )}
      </section>
    </main>
  );
};

export default Discs;
