import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { MemoryRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store/store";
import Theme from "../../theme";
import Cart from ".";
import userEvent from "@testing-library/user-event";

const mockDispatch = jest.fn();

jest.mock("../../redux/store/store", () => ({
    useAppSelector: jest.fn(),
    useAppDispatch: () => mockDispatch,
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
const mockedUseNavigate = useNavigate as jest.Mock;
const mockNavigate = jest.fn();

describe("Cart component",()=>{
    const renderWithProviders = (id:string) => {
        return render(
            <ThemeProvider theme={Theme}>
                <MemoryRouter initialEntries={[id]}>
                    <Routes>
                        <Route
                            path="/cart/:id"
                            element={<Cart/>}
                        />
                    </Routes>
                    
                </MemoryRouter>
            </ThemeProvider>
        );
    }
    it("should not render the cart view if the user is not logged",()=>{
        mockedSelector.mockImplementation((selectorFn: any) =>
        selectorFn({
            user:{
                actualUser:null,
            },
            data: {
                categories: [
                    {id:1,category:"Consolas"},
                    {id:2,category:"Juegos"},
                ],
                companies: [
                    {
                        id:1,
                        name:"company",
                        image:"url"
                    }
                ]
            },
            cart:{
                carts:[
                    {
                        user_id: 1,
                        product_ids: [],
                        total: 0,
                        payment_id: null,
                        address_id: null,
                    },
                ],
            },
            product: {
                products: [
                    {id: 1,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 2,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                ]
            }
        }));
        renderWithProviders("/cart/1");
        const message = screen.getByText("No se puede acceder al carrito, se necesita iniciar sesión");
        expect(message).toBeInTheDocument();
    });
    it("should not render the cart view if the user is logged and the cart empty",()=>{
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
                categories: [
                    {id:1,category:"Consolas"},
                    {id:2,category:"Juegos"},
                ],
                companies: [
                    {
                        id:1,
                        name:"company",
                        image:"url"
                    }
                ]
            },
            cart:{
                carts:[
                    {
                        user_id: 1,
                        product_ids: [],
                        total: 0,
                        payment_id: null,
                        address_id: null,
                    },
                ],
            },
            product: {
                products: [
                    {id: 1,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 2,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                ]
            }
        }));
        renderWithProviders("/cart/1");
        const message = screen.getByText("Tu carrito está vacio, date una vuelta por la página");
        expect(message).toBeInTheDocument();
    });
    it("should render the cart view with products",()=>{
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
                categories: [
                    {id:1,category:"Consolas"},
                    {id:2,category:"Juegos"},
                ],
                companies: [
                    {
                        id:1,
                        name:"company",
                        image:"url"
                    }
                ]
            },
            cart:{
                carts:[
                    {
                        user_id: 1,
                        product_ids: [
                            {
                                product:{id: 2,image: "url",name: "Example 2",release_date: "2026-02-01",description: "prueba",price: 599.50,promotion: 5,company_id:9,category_id:2,},
                                count:2,
                            },
                        ],
                        total: 1139.05,
                        payment_id: null,
                        address_id: null,
                    },
                ],
            },
            product: {
                products: [
                    {id: 1,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 0,company_id:9,category_id:2,},
                    {id: 2,image: "url",name: "Example 2",release_date: "2026-02-01",description: "prueba",price: 599.50,promotion: 5,company_id:9,category_id:2,},
                ]
            }
        }));
        renderWithProviders("/cart/1");
        //Producto con promocion
        expect(screen.getByText("$599.5")).toBeInTheDocument();
        expect(screen.getByTestId("product_total_price").textContent).toBe("$1139.05");
    });
    it("should render the cart view with products without promotion",()=>{
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
                categories: [
                    {id:1,category:"Consolas"},
                    {id:2,category:"Juegos"},
                ],
                companies: [
                    {
                        id:1,
                        name:"company",
                        image:"url"
                    }
                ]
            },
            cart:{
                carts:[
                    {
                        user_id: 1,
                        product_ids: [
                            {
                                product:{id: 1,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 0,company_id:9,category_id:2,},
                                count:1,
                            },
                        ],
                        total: 1139.05,
                        payment_id: null,
                        address_id: null,
                    },
                ],
            },
            product: {
                products: [
                    {id: 1,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 0,company_id:9,category_id:2,},
                    {id: 2,image: "url",name: "Example 2",release_date: "2026-02-01",description: "prueba",price: 599.50,promotion: 5,company_id:9,category_id:2,},
                ]
            }
        }));
        renderWithProviders("/cart/1");
        //Producto sin promoción
        expect(screen.getByTestId("product_promotion").textContent).toBe("");
    });
    it("should change the count product to a higher number",()=>{
        mockedUseNavigate.mockReturnValue(mockNavigate);
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
                categories: [
                    {id:1,category:"Consolas"},
                    {id:2,category:"Juegos"},
                ],
                companies: [
                    {
                        id:1,
                        name:"company",
                        image:"url"
                    }
                ]
            },
            cart:{
                carts:[
                    {
                        user_id: 1,
                        product_ids: [
                            {
                                product:{id: 2,image: "url",name: "Example 2",release_date: "2026-02-01",description: "prueba",price: 599.50,promotion: 5,company_id:9,category_id:2,},
                                count:2,
                            },
                        ],
                        total: 1139.05,
                        payment_id: null,
                        address_id: null,
                    },
                ],
            },
            product: {
                products: [
                    {id: 1,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 2,image: "url",name: "Example 2",release_date: "2026-02-01",description: "prueba",price: 599.50,promotion: 5,company_id:9,category_id:2,},
                ]
            }
        }));
        renderWithProviders("/cart/1");
        //Cambiar número de productos
        const number = screen.getByTestId("product_count");
        fireEvent.change(number, { target: { value: "5" } });
        expect(mockDispatch).toHaveBeenCalledWith({
            type: "cart/updateCart",
            payload: {
                user: expect.any(Object),
                id: 2,
                countItem: 5,
            },
        });
    });
    it("should change the count product to 0",()=>{
        mockedUseNavigate.mockReturnValue(mockNavigate);
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
                categories: [
                    {id:1,category:"Consolas"},
                    {id:2,category:"Juegos"},
                ],
                companies: [
                    {
                        id:1,
                        name:"company",
                        image:"url"
                    }
                ]
            },
            cart:{
                carts:[
                    {
                        user_id: 1,
                        product_ids: [
                            {
                                product:{id: 2,image: "url",name: "Example 2",release_date: "2026-02-01",description: "prueba",price: 599.50,promotion: 5,company_id:9,category_id:2,},
                                count:2,
                            },
                        ],
                        total: 1139.05,
                        payment_id: null,
                        address_id: null,
                    },
                ],
            },
            product: {
                products: [
                    {id: 1,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 2,image: "url",name: "Example 2",release_date: "2026-02-01",description: "prueba",price: 599.50,promotion: 5,company_id:9,category_id:2,},
                ]
            }
        }));
        renderWithProviders("/cart/1");
        //Eliminar producto por la cantidad de 0
        const number = screen.getByTestId("product_count");
        fireEvent.change(number, { target: { value: "0" } });
        expect(mockDispatch).toHaveBeenCalledWith({
            type: "cart/deleteItemCart",
            payload: {
                user: {
                id: 1,
                name: "Usuario",
                paternal_surname: "Apellido",
                maternal_surname: null,
                rfc: "XAAA010120004KT",
                datebirth: "01/01/2026",
                email: "mail@mail.com",
                password: "password",
                },
                id: 2,
            },
        });


    });
    it("should use the product actions",()=>{
        mockedUseNavigate.mockReturnValue(mockNavigate);
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
                categories: [
                    {id:1,category:"Consolas"},
                    {id:2,category:"Juegos"},
                ],
                companies: [
                    {
                        id:1,
                        name:"company",
                        image:"url"
                    }
                ]
            },
            cart:{
                carts:[
                    {
                        user_id: 1,
                        product_ids: [
                            {
                                product:{id: 2,image: "url",name: "Example 2",release_date: "2026-02-01",description: "prueba",price: 599.50,promotion: 5,company_id:9,category_id:2,},
                                count:2,
                            },
                        ],
                        total: 1139.05,
                        payment_id: null,
                        address_id: null,
                    },
                ],
            },
            product: {
                products: [
                    {id: 1,image: "url",name: "Nioh 3",release_date: "2026-02-01",description: "prueba",price: 2169.99,promotion: 15,company_id:9,category_id:2,},
                    {id: 2,image: "url",name: "Example 2",release_date: "2026-02-01",description: "prueba",price: 599.50,promotion: 5,company_id:9,category_id:2,},
                ]
            }
        }));
        renderWithProviders("/cart/1");
        //Botón de eliminar
        const delete_button = screen.getByTestId("product_delete");
        fireEvent.click(delete_button);
        expect(mockDispatch).toHaveBeenCalledTimes(1);
        //Botón de pagar
        const pay_button = screen.getByTestId("go_to_pay_button");
        fireEvent.click(pay_button);
        expect(mockNavigate).toHaveBeenCalledWith("/payment/");
    });
});
