import databaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";
import type { ProjetType } from "../../../lib/definition";

class ProjetRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from projet");

    return rows as ProjetType[];
  }
}

export default new ProjetRepository();
