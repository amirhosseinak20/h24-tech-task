import React from "react";
import { Link as LinkBase } from "react-router-dom";

export function Link({ href, children }) {
  return <LinkBase to={href}>{children}</LinkBase>;
}
