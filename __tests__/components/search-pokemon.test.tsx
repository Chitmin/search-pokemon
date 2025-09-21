import React from "react";
import { render, fireEvent } from "@testing-library/react";

jest.mock("@/components/ui/input", () => ({
  Input: (props: any) => <input {...props} />,
}));
jest.mock("@/components/ui/button", () => ({
  Button: (props: any) => <button {...props} />,
}));
jest.mock("lucide-react", () => ({
  Search: () => null,
}));

import SearchPokemon from "@/components/search-pokemon";

describe("SearchPokemon component", () => {
  it("calls onChange when typing into input", () => {
    const onChange = jest.fn();
    const onSubmit = jest.fn();

    const { getByPlaceholderText } = render(
      <SearchPokemon query="" onChange={onChange} onSubmit={onSubmit} />
    );

    const input = getByPlaceholderText("pikachu ...") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "char" } });

    expect(onChange).toHaveBeenCalledWith("char");
  });

  it("calls onSubmit with current input value when form is submitted", () => {
    const onChange = jest.fn();
    const onSubmit = jest.fn();

    // include surrounding whitespace to verify the component passes the raw value
    const query = "  raichu  ";

    const { getByRole } = render(
      <SearchPokemon query={query} onChange={onChange} onSubmit={onSubmit} />
    );

    const button = getByRole("button");
    fireEvent.click(button);

    expect(onSubmit).toHaveBeenCalledWith(query);
  });

  it("does not call onSubmit when input is empty or only whitespace", () => {
    const onChange = jest.fn();
    const onSubmit = jest.fn();

    const query = "   "; // whitespace-only

    const { getByRole } = render(
      <SearchPokemon query={query} onChange={onChange} onSubmit={onSubmit} />
    );

    const button = getByRole("button");
    fireEvent.click(button);

    expect(onSubmit).not.toHaveBeenCalled();
  });
});
