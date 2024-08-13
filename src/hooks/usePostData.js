import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function usePostData(deps = [], url = "") {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);
  const [message, setMessage] = useState(null);
  const [sendData, setSendData] = useState(null);

  const at = Cookies.get("at");
  const preUrl = "http://localhost:5000";

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = axios.post(`${preUrl}${url}`, {
          headers: { Authorization: `Bearer ${at}` },
          data: sendData,
        });
        const response = await res;
        setData(response?.data?.payload);

        if (
          response?.data?.statusCode === 200 ||
          response?.data?.statusCode === 201
        )
          setErr(false);
        else setErr(true);

        setMessage(response?.data?.message);
      } catch (err) {
        setErr(true);
        setMessage("Some error occured. Try again!!!");
        console.log(err);
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [...deps, sendData, url, at]);

  return { data, err, message, setSendData };
}
