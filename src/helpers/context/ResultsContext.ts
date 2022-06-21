import { createContext } from "react";
import { ResultsContextI } from "helpers/context/resultsContext.types";

export const ResultsContext = createContext<ResultsContextI | null>(null);
