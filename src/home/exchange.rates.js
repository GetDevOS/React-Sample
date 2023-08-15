import React from "react";

export function ExchangeRate({ isLoading, data }) {
  return <>{isLoading ? <p>Loading...</p> : <p></p>}</>;
}
