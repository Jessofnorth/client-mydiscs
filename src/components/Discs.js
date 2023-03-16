import React, { useState, useEffect } from "react";
import DiscCards from "./DiscCards";

// component for the main disc grid
const Discs = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [discs, setDiscs] = useState([]);

  useEffect(() => {
    fetch(`https://jess-mydiscs.azurewebsites.net/api/disc`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setDiscs(data);
        setError(null);
      })
      .catch((e) => {
        setDiscs([]);
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
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
