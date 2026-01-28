import PocketBase from "pocketbase";

const url = import.meta.env?.VITE_SERVER_URL;

// check if the url is defined
if (!url) {
  throw new Error("VITE_SERVER_URL is not defined");
}
/*
configures the pocketbase client
and exports it for use in the application
*/
const pb = new PocketBase(url);

export default pb;
