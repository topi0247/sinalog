"use client";

import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

export default function AppProvider({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <RecoilRoot>
      <MantineProvider>{children}</MantineProvider>
    </RecoilRoot>
  );
}
