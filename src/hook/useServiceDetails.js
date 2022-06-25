import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useServiceDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    const url = `https://tranquil-cliffs-63024.herokuapp.com/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, [serviceId]);

  return [service, setService];
};

export default useServiceDetails;
