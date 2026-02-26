import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "../../../theme";
import Carousel from ".";


describe("Carousel Component",()=>{
    const renderWithProviders = () => {
        return render(
            <ThemeProvider theme={Theme}>
                <Carousel/>
            </ThemeProvider>
        );
    }

    it("should render the carousel",()=>{
        renderWithProviders();
        const alert = screen.getByText("Bienvenido a Game Dex");
        expect(alert).toBeInTheDocument();
    });

});