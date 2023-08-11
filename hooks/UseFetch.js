import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UseFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://ecommerce-ytsn.onrender.com/products"
      );
      setData(response.data);
    } catch (error) {
      setErr(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    setLoading(true);
    fetchData();
  };

  return { data, loading, err, reFetch };
}
