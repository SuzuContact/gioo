import React from "react";
import { BiCheck } from "react-icons/bi";

interface Props {
  label: string;
}

export default function CheckedLi({ label }: Props) {
  return (
    <li>
      <span>
        <BiCheck className="icon" />
      </span>
      {label}
    </li>
  );
}
