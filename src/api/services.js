import { $api } from "./api";

export const getBooks = async () => {
   return  $api.get(
        `books`,
      );
}