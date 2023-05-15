"use client";
import React from "react";
import { Provider } from "react-redux";

import { store } from "@/app/services/store";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export default ThemeProvider;
