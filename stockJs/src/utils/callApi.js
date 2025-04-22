import conf from "./cont";

const callApijs = ({ baseUrl, params, headers, callback }) => {
  const { domain } = conf();
  const requestUrl = `${domain}${baseUrl}`;

  fetch(requestUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(params),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (typeof callback === "function") {
        callback(data);
      }
      return data;
    });
  return "";
};

export default callApijs;
