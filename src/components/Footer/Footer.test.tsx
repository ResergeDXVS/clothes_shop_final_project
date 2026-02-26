import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "../../theme";
import Footer from ".";

const onAction = jest.fn();

describe("Footer Component",()=>{
    const renderWithProviders = () => {
        return render(
            <ThemeProvider theme={Theme}>
                <Footer/>
            </ThemeProvider>
        );
    }

    it("should render the footer",()=>{
        renderWithProviders();
        const alert = screen.getByText("Adicional");
        expect(alert).toBeInTheDocument();
    });

});