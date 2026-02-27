import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "../../theme";
import Header from ".";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store/store";
import { User } from "../../redux/slices/userSlice";

const mockDispatch = jest.fn();

jest.mock("../../redux/store/store", () => ({
    useAppSelector: jest.fn(),
}));

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockDispatch,
    useSelector: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
}));


const mockedSelector = useAppSelector as jest.Mock;



describe("Header Component",()=>{
    const renderWithProviders = () => {
        return render(
            <ThemeProvider theme={Theme}>
                <MemoryRouter>
                    <Header/>
                </MemoryRouter>
            </ThemeProvider>
        );
    }

    it("should render the Header",()=>{
        renderWithProviders();
        const header = screen.getByText("GAME DEX");
        expect(header).toBeInTheDocument();
    });

    it("should sent to another view in navigate",()=>{
        renderWithProviders();
        const link = screen.getByRole("link", { name: "Pases" });
        expect(link).toHaveAttribute("href", "/products?type=4");
    });

    it("should not show the card button",()=>{    
        mockedSelector.mockImplementation((selectorFn: any) =>
            selectorFn({
                user: {
                    actualUser: null,
                }
                
            })
        );
        renderWithProviders();
        const bag = screen.queryByRole('bag');
        expect(bag).toBeNull();
    });
    it("should show the card button",()=>{    
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
        const bag = screen.queryByTestId('bag');
        expect(bag).toBeInTheDocument();
    });

    it("should show that a user is not logged",()=>{
        mockedSelector.mockImplementation((selectorFn: any) =>
            selectorFn({
                user: {
                    actualUser: null,
                }
                
            })
        );
        renderWithProviders();
        const user = screen.queryByTestId("user_login");
        expect(user).toBeNull();
    });
    it("should show that a user is logged",()=>{
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
        const user = screen.queryByTestId("user_login");
        expect(user).toBeInTheDocument();
    });

    it("should navigate to the cart",()=>{
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
        const mockedUseNavigate = useNavigate as jest.Mock;
        const mockNavigate = jest.fn();
        mockedUseNavigate.mockReturnValue(mockNavigate);
        renderWithProviders();
        const user = screen.getByTestId("bag");
        fireEvent.click(user);

        expect(mockNavigate).toHaveBeenCalledWith("/cart/1");
    });
    it("should show the login menu",()=>{
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
        const mockedUseNavigate = useNavigate as jest.Mock;
        const mockNavigate = jest.fn();
        mockedUseNavigate.mockReturnValue(mockNavigate);
        renderWithProviders();
        const user = screen.getByTestId("icon_user");
        fireEvent.click(user);

        const userContainer = screen.getByTestId("user_container");
        expect(userContainer).toHaveClass("user--show");
    });

});