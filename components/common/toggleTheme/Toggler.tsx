import React from "react";
import styled from "styled-components";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";

interface Props {
  toggleTheme: any;
}

const Toggle: React.FunctionComponent<Props> = (props: Props) => {
  const themeMode = window.localStorage.getItem("theme");

  return (
    <Button
      aria-label="Toggle Dark Mode"
      onClick={props.toggleTheme}
      className="link"
    >
      {themeMode && themeMode === "dark" ? (
        <SunIcon style={{ height: "30px", width: "30px", color: "#fbd38d" }} />
      ) : (
        <MoonIcon style={{ height: "30px", width: "30px", color: "#0f3b56" }} />
      )}
    </Button>
  );
};

export default Toggle;

const Button = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colorPrimary};
  cursor: pointer;
  padding: 0.6rem;
  zindex: 1;
  border: none;
`;
