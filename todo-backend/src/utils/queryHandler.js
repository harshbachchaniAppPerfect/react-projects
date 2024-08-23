import { pool } from "../db/config.js";
import { handleDatabaseError } from "./handleDBError.js";
export const queryHandler = (query, values) => {
  return new Promise((resolve, reject) => {
    pool
      .query(query, values)
      .then((res) => {
        return resolve(res.rows);
      })
      .catch((error) => {
        reject(handleDatabaseError(error));
      });
  });
};
