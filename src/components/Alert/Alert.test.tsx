import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "../../theme";
import { MemoryRouter } from "react-router-dom";
import Alert from ".";

const onAction = jest.fn();

describe("Alert Component",()=>{
    const renderWithProviders = (visible:boolean) => {
        return render(
            <ThemeProvider theme={Theme}>
                <MemoryRouter>
                    <Alert
                        id="1"
                        title="Mensaje de error"
                        message="Esta es una prueba"
                        action={()=>onAction()}
                        visible={visible}
                    />
                </MemoryRouter>
            </ThemeProvider>
        );
    }

    it("should not render a format",()=>{
        renderWithProviders(false);
        const alert = screen.queryByText("Entendido");
        expect(alert).toBe(null);
    });

    it("should render the alert",()=>{
        renderWithProviders(true);
        const alert = screen.getByText("Entendido");
        expect(alert).toBeInTheDocument();
    });

    it("should use the action for quit the emergency view",()=>{
        renderWithProviders(true);
        const alert = screen.getByText("Entendido");
        fireEvent.click(alert);
        expect(onAction).toHaveBeenCalledTimes(1);
    });
})