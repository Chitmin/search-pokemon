import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("lucide-react", () => ({
  Layers2: () => <span data-testid="icon-layers2" />,
  MoveRight: () => <span data-testid="icon-move-right" />,
  Ruler: () => <span data-testid="icon-ruler" />,
  Shapes: () => <span data-testid="icon-shapes" />,
  Shield: () => <span data-testid="icon-shield" />,
  ShieldX: () => <span data-testid="icon-shieldx" />,
  Swords: () => <span data-testid="icon-swords" />,
  Weight: () => <span data-testid="icon-weight" />,
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children }: any) => <a href={href}>{children}</a>,
}));

jest.mock("@/components/ui/badge", () => ({
  Badge: ({ children }: any) => <span className="mock-badge">{children}</span>,
}));

jest.mock("@/components/ui/separator", () => ({
  Separator: () => <hr data-testid="separator" />,
}));

jest.mock("@/components/ui/skeleton", () => ({
  Skeleton: (props: any) => (
    <div data-testid="skeleton" className={props.className} />
  ),
}));

import PokemonDetails, {
  PokemonDetailsSkeleton,
} from "@/components/pokemon-details";
import Bulbasaur from "../../fixtures/bulbasaur";
import { Pokemon } from "@/types/pokemon";

describe("PokemonDetails", () => {
  const pokemon: Pokemon = Bulbasaur;

  it("renders main details, badges, attacks and evolutions links", () => {
    render(<PokemonDetails pokemon={pokemon} />);

    expect(
      screen.getByRole("heading", { name: "Bulbasaur", level: 1 })
    ).toBeInTheDocument();
    expect(screen.getByText("Seed Pokémon")).toBeInTheDocument();

    expect(screen.getByAltText("Bulbasaur")).toBeInTheDocument();

    // height & weight
    expect(
      screen.getByText(
        (content, node) =>
          node?.textContent?.replace(/\s+/g, "") === "0.61m-0.79m"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        (content, node) =>
          node?.textContent?.replace(/\s+/g, "") === "6.04kg-7.76kg"
      )
    ).toBeInTheDocument();

    const ivysaurLink = screen.getByRole("link", { name: "Ivysaur" });
    expect(ivysaurLink).toBeInTheDocument();
    expect(ivysaurLink).toHaveAttribute(
      "href",
      `/search?name=${encodeURIComponent("Ivysaur")}`
    );

    const venusaurLink = screen.getByRole("link", { name: "Venusaur" });
    expect(venusaurLink).toBeInTheDocument();
    expect(venusaurLink).toHaveAttribute(
      "href",
      `/search?name=${encodeURIComponent("Venusaur")}`
    );
  });
});

describe("PokemonDetailsSkeleton", () => {
  it("renders skeleton placeholders", () => {
    render(<PokemonDetailsSkeleton />);

    const skeletons = screen.getAllByTestId("skeleton");
    expect(skeletons.length).toBeGreaterThan(0);

    // separators should be present
    expect(screen.getAllByTestId("separator").length).toBeGreaterThan(0);
  });
});
