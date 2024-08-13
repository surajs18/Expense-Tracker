import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function useGetData(deps = [], url) {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);
  const [message, setMessage] = useState();

  const at = Cookies.get("at");
  const preUrl = "http://localhost:5000";

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = () => {
      const res = axios.get(`${preUrl}${url}`, {
        headers: { Authorization: `Bearer ${at}` },
      });
      console.log(res);
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [...deps, url]);

  return { data, err, message };
}
