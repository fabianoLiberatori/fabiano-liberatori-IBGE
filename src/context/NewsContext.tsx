import { createContext } from "react";
import { NewsContextType } from "../types";

const NewsContext = createContext({} as NewsContextType);

export default NewsContext;