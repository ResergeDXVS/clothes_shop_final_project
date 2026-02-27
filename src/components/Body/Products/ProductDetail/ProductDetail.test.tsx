import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Theme from "../../../../theme";
import { useAppSelector } from "../../../../redux/store/store";
import ProductDetail from ".";


const mockDispatch = jest.fn();

jest.mock("../../../../redux/store/store", () => ({
    useAppSelector: jest.fn(),
}));

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockDispatch,
}));

const mockedSelector = useAppSelector as jest.Mock;

describe("ProductDetail Component",()=>{
    const renderWithProviders = (id:string) => {
        return render(
            <ThemeProvider theme={Theme}>
                <MemoryRouter
                    initialEntries={[id]}>
                    <Routes>
                        <Route
                            path="/product/:id"
                            element={<ProductDetail/>}
                        />
                        <Route
                            path="/product/"
                            element={<ProductDetail/>}
                        />
                    </Routes>
                </MemoryRouter>
            </ThemeProvider>
        );
    }

    it("should render the product detail information",()=>{
        mockedSelector.mockImplementation((selectorFn: any) =>
        selectorFn({
            user:{
                actualUser:{
                    id: 1,
                    name: "Usuario",
                    paternal_surname: "Apellido",
                    maternal_surname:  null,
                    rfc: "XAAA010120004KT",
                    datebirth: "01/01/2026",
                    email: "mail@mail.com",
                    password: "password",
                }
            },
            data: {
                companies: [
                    {
                        id:1,
                        name:"company",
                        image:"url"
                    }
                ]
            },
            product: {
                products: [
                    {id: 1,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 2,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 3,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 4,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 5,image: "url",name: "Nioh 1",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 6,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 7,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 8,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                ]
            }
        }));
        renderWithProviders("/product/5");
        const title = screen.getByText("Información del Producto");
        expect(title).toBeInTheDocument();
        const image = screen.getByAltText("Nioh 1");
        expect(image).toBeInTheDocument();
        const price = screen.getByText("$2169.99");
        expect(price).toBeInTheDocument();

    });
    it("should add the product to the cart",()=>{
        mockedSelector.mockImplementation((selectorFn: any) =>
        selectorFn({
            user:{
                actualUser:{
                    id: 1,
                    name: "Usuario",
                    paternal_surname: "Apellido",
                    maternal_surname:  null,
                    rfc: "XAAA010120004KT",
                    datebirth: "01/01/2026",
                    email: "mail@mail.com",
                    password: "password",
                }
            },
            data: {
                companies: [
                    {
                        id:1,
                        name:"company",
                        image:"url"
                    }
                ]
            },
            product: {
                products: [
                    {id: 1,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 2,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 3,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 4,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 5,image: "url",name: "Nioh 1",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 6,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 7,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 8,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                ]
            }
        }));
        renderWithProviders("/product/5");
        const button = screen.getByTestId("buttonCart");
        fireEvent.click(button);
        expect(mockDispatch).toHaveBeenCalledTimes(1);

    });

    it("should show an alert view if the user is not logged",()=>{
        mockedSelector.mockImplementation((selectorFn: any) =>
        selectorFn({
            user:{
                actualUser:null
            },
            data: {
                companies: [
                    {
                        id:1,
                        name:"company",
                        image:"url"
                    }
                ]
            },
            product: {
                products: [
                    {id: 1,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 2,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 3,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 4,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 5,image: "url",name: "Nioh 1",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 6,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 7,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 8,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                ]
            }
        }));
        renderWithProviders("/product/5");
        const button = screen.getByTestId("buttonCart");
        fireEvent.click(button);
        const alert = screen.getByText("Acceder a cuenta");
        expect(alert).toBeInTheDocument();
        const alertbutton = screen.getByTestId("alert_button");
        fireEvent.click(alertbutton);
        const message = screen.queryByText(
            "Se necesita ingresar a la cuenta o crear una para agregar productos al carrito."
        );
        expect(message).not.toBeInTheDocument();


    });
    it("should an error message if the url dont have an id",()=>{
        mockedSelector.mockImplementation((selectorFn: any) =>
        selectorFn({
            user:{
                actualUser:null
            },
            data: {
                companies: [
                    {
                        id:1,
                        name:"company",
                        image:"url"
                    }
                ]
            },
            product: {
                products: [
                    {id: 1,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 2,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 3,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 4,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 5,image: "url",name: "Nioh 1",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 6,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 7,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 8,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                ]
            }
        }));
        renderWithProviders("/product/");
        const error = screen.getByText("Error en la búsqueda");
        expect(error).toBeInTheDocument();
    });

});