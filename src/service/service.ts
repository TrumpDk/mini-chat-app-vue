import { getData } from "./http";

export default {
    login: () => getData('/login'),
}