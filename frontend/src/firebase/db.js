// Krijimi i databazes duke perdore firebase / firestore
import { getFirestore } from "firebase/firestore";
import app from "./index";

const db = getFirestore(app);

export default db;
