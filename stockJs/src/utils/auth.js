import callApijs from "./callApi";
const getAccessToken = () => {
  const baseUrl = "/oauth2/tokenP";
  const params = {
    method: "POST",
    params: { grant_type: "client_credentials" },
    headers: { "Content-Type": "application/json" },
    paramKeyFlag: true,
    headerKeyFlag: false,
  };

  return callApijs({
    baseUrl: baseUrl,
    params: params,
  });
};

export default getAccessToken;
