import React, { useState, useEffect } from "react";
import DiscCards from "./DiscCards";
import axios from "axios";

// component for the main disc grid
const Discs = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [discs, setDiscs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  // get the API calls and save to state
  useEffect(() => {
    //   fetch discs from API
    const fetchDiscs = async () => {
      setLoading(true);
      const getdiscs = await axios
        .get(`https://jess-mydiscs.azurewebsites.net/api/disc`)
        .then(function (response) {
          if (response.status !== 200) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          setDiscs(response.data);
          setError(null);
          setLoading(false);
        })
        .catch(function (error) {
          setDiscs([]);
          setError(error.message);
        });
    };
    //   fetch categories from API
    const fetchCategories = async () => {
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
    };
    //   // get brands from API

    const fetchBrands = async () => {
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
    };
    fetchBrands();
    fetchCategories();
    fetchDiscs();
  }, []);

  return (
    <main className="flex flex-col min-h-screen">
      <div className="grid md:grid-cols-3 m-4 font-bold">
        {/* navigations with filter options */}
        <nav>
          <h2 className="text-md font-bold text-center py-3">Brand</h2>
          <div className="flex justify-evenly flex-wrap">
            {brands.map((brand) => (
              <button
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
            <button className="border-black border-2 shadow-md m-1 text-xs hover:bg-black hover:text-white">
              Yes
            </button>
            <button className="border-black border-2 shadow-md m-1 text-xs hover:bg-black hover:text-white">
              No
            </button>
          </div>
        </nav>
        <nav>
          <h2 className="text-md font-bold text-center py-3">Disctype</h2>
          <div className="flex justify-evenly flex-wrap">
            {categories.map((category) => (
                <button
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
          <div className="text-red-600">{`There is a problem fetching the discs - ${error}`}</div>
        )}
  {discs.map((disc) => (
          <DiscCards key={disc.discId} disc={disc} />   
        ))}
      </section>
    </main>
  );
};

export default Discs;
