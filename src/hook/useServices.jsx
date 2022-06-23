import { useEffect } from "react";
import { useState } from "react";

const useServices = () => {
  const [service, setServices] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/service`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return [service, setServices];
};

export default useServices;
