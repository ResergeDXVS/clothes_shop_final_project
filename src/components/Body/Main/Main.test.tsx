import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "../../../theme";
import Main from ".";
import { useAppSelector } from "../../../redux/store/store";
import { MemoryRouter } from "react-router-dom";


const mockDispatch = jest.fn();

jest.mock("../../../redux/store/store", () => ({
    useAppSelector: jest.fn(),
}));

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockDispatch,
}));

const mockedSelector = useAppSelector as jest.Mock;

describe("Main Component",()=>{
    const renderWithProviders = () => {
        return render(
            <ThemeProvider theme={Theme}>
                <MemoryRouter>
                    <Main/>
                </MemoryRouter>
            </ThemeProvider>
        );
    }

    it("should render the main view",()=>{
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
        renderWithProviders();
        const product = screen.getByText("Nioh 1");
        expect(product).toBeInTheDocument();
    });

});