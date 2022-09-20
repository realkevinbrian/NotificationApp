import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetch() {
  let [feeds, setFeeds] = useState([]);
  let [loading, isLoading] = useState(false);

  useEffect(() => {
    isLoading(true);
    let umount = true;
    axios
      .get("db.json")
      .then((resp) => {
        if (umount) {
          isLoading(false);
          setFeeds(resp.data);
        }
      })
      .catch((error) => {
        isLoading(false);
        console.log(error);
      });

    return () => {
      umount = false;
    };
  }, []);

  return { feeds, loading };
}

export default useFetch;
