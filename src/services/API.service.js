import ky from "ky";
import config from "@app/utils/config";

// TODO: Adjust this as needed for maximum flexibility
const BASE_URL = "https://api.themoviedb.org/4/discover";

export default {
  // TODO: Add more methods as needed, or specify more parameters. Pages, etc.? 🤷🏾‍♂️
  // If you do more parameters, consider using destructuring.
  // https://github.com/ryanmcdermott/clean-code-javascript#function-arguments-2-or-fewer-ideally
  index(params, type = "movie") {
    return ky
      .get(`${BASE_URL}/${type}`, {
        headers: { Authorization: `Bearer ${config.tmdbToken}` },
      })
      .json();
  },
};
