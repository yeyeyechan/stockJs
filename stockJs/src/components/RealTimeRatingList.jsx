import getAccessToken from "../utils/auth";

const RealTimeRatingList = () => {
  const baseUrl = "/uapi/domestic-stock/v1/ranking/fluctuation";
  const params = {
    fid_rsfl_rate2: "",
    fid_cond_mrkt_div_code: "J",
    fid_cond_scr_div_code: "20170",
    fid_input_iscd: "0000",
    fid_rank_sort_cls_code: "0",
    fid_input_cnt_1: "0",
    fid_prc_cls_code: "0",
    fid_input_price_1: "",
    fid_input_price_2: "",
    fid_vol_cnt: "",
    fid_trgt_cls_code: "0",
    fid_trgt_exls_cls_code: "0",
    fid_div_cls_code: "0",
    fid_rsfl_rate1: "",
  };

  const headers = {
    "Content-Type": "application/json",
    authorization: "",

    personalseckey: "",
    tr_id: "FHPST01700000",
    tr_cont: "",
    custtype: "P",
    seq_no: "",
    mac_address: "",
    phone_number: "",
    ip_addr: "",
    hashkey: "",
    gt_uid: "",
  };
  const method = "GET";
  const callback = () => {};
  const handleClick = () => {
    const accessToken = getAccessToken();
    console.log(accessToken);
  };

  //callApijs(domain, baseUrl, method, params, headers, callback);
  return (
    <div>
      RealTime
      <button onClick={handleClick}> TEST</button>
    </div>
  );
};

export default RealTimeRatingList;
