import { describe, it } from "vitest";
import ShineSquadLogo from "../../../components/shineSquadLogo/shineSquadLogo";
import { render, screen } from "@testing-library/react";

describe("ShineSquadLogo", () => {
  let component;
  const whenTheComponentIsRendered = () => {
    render(<ShineSquadLogo />);
  };

  const thenTheComponentIsWellFormed = () => {};

  it("When the component is rendered, then the logo shows in the browser", () => {
    whenTheComponentIsRendered();
    thenTheComponentIsWellFormed();
  });
});
