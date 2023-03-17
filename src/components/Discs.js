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
      <nav className="grid md:grid-cols-3 m-4">
        <p>Test 1</p>
        <p>Test 2</p>
        <p>Test 3</p>
      </nav>
      <section className="flex flex-row flex-wrap justify-evenly ">
        {/* show error or loading when needed */}
        {loading && <div>Loading discs...</div>}
        {error && (
          <div className="text-red-600">{`There is a problem fetching the discs - ${error}`}</div>
        )}
        <DiscCards />
        <DiscCards />
        <DiscCards />
        <DiscCards />
      </section>
    </main>
  );
};

export default Discs;
