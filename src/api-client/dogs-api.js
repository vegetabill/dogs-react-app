import fetch from "node-fetch";
import merge from "lodash/merge";

const DEFAULT_OPTIONS = {
  method: "GET",
  headers: {
    Accept: "application/json"
  }
};

function doFetch(path, options = {}) {
  const mergedOpts = merge({}, DEFAULT_OPTIONS, options);
  return fetch(`${path}?pretty`, mergedOpts).then(resp => {
    if (resp.ok) {
      return resp.text().then(txt => {
        const contentType = resp.headers.get("content-type");
        if (contentType && contentType.includes("json")) {
          return JSON.parse(txt);
        }
        return txt;
      });
    } else {
      throw new Error(`API request failed: ${path} - ${resp.status}`);
    }
  });
}

function get(path) {
  return doFetch(path);
}

function put(path, body, options = {}) {
  const opts = merge(
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    },
    options
  );
  return doFetch(path, opts);
}

export function getOwners() {
  return get("/owners");
}

export function createOwner(attrs) {
  return put(`/owners/${attrs.login}`, attrs);
}
