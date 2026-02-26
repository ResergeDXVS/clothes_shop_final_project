import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../../../theme";
import { MemoryRouter, useNavigate } from "react-router-dom";
import HeaderLogin from ".";
import { useAppSelector } from "../../../redux/store/store";

const mockDispatch = jest.fn();

jest.mock("../../../redux/store/store", () => ({
    useAppSelector: jest.fn(),
}));

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
}));

const mockedSelector = useAppSelector as jest.Mock;

describe("HeaderLogin Component",()=>{
    const renderWithProviders = () => {
        return render(
            <ThemeProvider theme={Theme}>
                <MemoryRouter>
                    <HeaderLogin/>
                </MemoryRouter>
            </ThemeProvider>
        );
    }
    it("should render the access buttons",()=>{
        renderWithProviders();
        const enter = screen.getByText("Ingresar a cuenta");
        expect(enter).toBeInTheDocument(); 
    });
    it("should use the navigate buttons",()=>{
        const mockedUseNavigate = useNavigate as jest.Mock;
        const mockNavigate = jest.fn();

        mockedUseNavigate.mockReturnValue(mockNavigate);
        renderWithProviders();
        const enter = screen.getByText("Ingresar a cuenta");
        fireEvent.click(enter);

        expect(mockNavigate).toHaveBeenCalledWith("/user/login");

        const create = screen.getByText("Crear Usuario");
        fireEvent.click(create);

        expect(mockNavigate).toHaveBeenCalledWith("/user/create");
    });
    it("should render the close view menu",()=>{
        mockedSelector.mockImplementation((selectorFn: any) =>
        selectorFn({
            user: {
                    actualUser: {
                    id: 1,
                    name: "Usuario",
                    paternal_surname: "Apellido",
                    maternal_surname:  null,
                    rfc: "XAAA010120004KT",
                    datebirth: "01/01/2026",
                    email: "mail@mail.com",
                    password: "password",
                }
            }
        }));
        renderWithProviders();
        const closeView = screen.getByText("Hola Usuario");
        expect(closeView).toBeInTheDocument();
    });

    it("should close the account",()=>{
        mockedSelector.mockImplementation((selectorFn: any) =>
        selectorFn({
            user: {
                actualUser: {
                    id: 1,
                    name: "Usuario",
                    paternal_surname: "Apellido",
                    maternal_surname:  null,
                    rfc: "XAAA010120004KT",
                    datebirth: "01/01/2026",
                    email: "mail@mail.com",
                    password: "password",
                }
            }
        }));
        renderWithProviders();
        const closeView = screen.getByText("Cerrar Sesión");
        fireEvent.click(closeView);
        expect(mockDispatch).toHaveBeenCalledTimes(1);
    });
});