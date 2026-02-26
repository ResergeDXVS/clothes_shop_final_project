import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "../../../theme";
import { useAppSelector } from "../../../redux/store/store";
import Companies from ".";
jest.mock("../../../redux/store/store", () => ({
    useAppSelector: jest.fn(),
}));


const mockedSelector = useAppSelector as jest.Mock;

describe("Carousel Component",()=>{
    const renderWithProviders = () => {
        return render(
            <ThemeProvider theme={Theme}>
                <Companies/>
            </ThemeProvider>
        );
    }

    it("should render the carousel",()=>{
        mockedSelector.mockImplementation((selectorFn: any) =>
        selectorFn({
            data: {
                companies: [
                    {
                        id:1,
                        name:"company",
                        image:"url"
                    }
                ]
            }
        }));
        renderWithProviders();
        const company = screen.getByAltText("company");
        expect(company).toBeInTheDocument();
    });

});