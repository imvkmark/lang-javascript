#!/usr/bin/env node
let axios = require("../node_modules/axios/index.js");

let url = "http://p.zhongche.duoli.com/api_v1/site/material/prepreg";
params = {
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcC56aG9uZ2NoZS5kdW9saS5jb20vYXBpX3YxL3N5c3RlbS9hdXRoL2xvZ2luIiwiaWF0IjoxNTc0NTY0NjQxLCJleHAiOjE1NzQ2MDA2NDEsIm5iZiI6MTU3NDU2NDY0MSwianRpIjoiamFNOGJUZW1pc0VrSVA3NSIsInN1YiI6OCwicHJ2IjoiNjdkMzEwNjAzOTdkZWJkNDIyMzYzMWMxMTc1NGNlMTRjNjYzNDJjMSIsInVzZXIiOnsiaWQiOjh9fQ.uoky6t-fx4PZjIT-ylgRCpIeRIHm_nOUSvJpCw64ykg",
  category_id: 5,
  title: "材料 - " + new Date(),
  axis1_str_test: [
    {
      a: 1
    },
    {
      a: 2
    }
  ]
};
let resp = axios.post(url, params).then(res => {
  console.log(res.data);
});
console.log(resp);
