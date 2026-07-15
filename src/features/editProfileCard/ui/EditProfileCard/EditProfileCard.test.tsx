import { screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import { componentRender } from "shared/lib/tests/componentRender/componentRender.js";
import { EditProfileCard } from "./EditProfileCard";
import { Profile } from "entities/Profile";
import { Country } from "entities/Country";
import { ProfileReducer } from "../../model/slices/profileSlice";
import userEvent from "@testing-library/user-event";
import { $api } from "shared/api/api";

const dataUser : Profile = {
    id: "1",
    firstname: "nik",
    lastname: "romanov",
    age: 33,
    country: Country.Austria,
    city: "Sarov",
    username: "111"
}


describe("features/EditProfileCard", () => {
    test("добавляется кнопка отмены", async () => {
        componentRender(<EditProfileCard />, {
            initialState: {
                profile: {
                    readonly: true,
                    data: dataUser,
                    dataForm: dataUser,
                    
                },
                user: {
                    authData: {
                        id: "1"
                    }
                }
            },
            asyncReducers: {
                profile: ProfileReducer
            }
        });
        await userEvent.click(screen.getByTestId("EditProfileCardHeader.EditBtn"))
        expect(screen.getByTestId("EditProfileCardHeader.CancelBtn")).toBeInTheDocument()
    });


    test("при отмене значения возвращаются к исходным", async () => {
        componentRender(<EditProfileCard />, {
            initialState: {
                profile: {
                    readonly: true,
                    data: dataUser,
                    dataForm: dataUser,
                    
                },
                user: {
                    authData: {
                        id: "1"
                    }
                }
            },
            asyncReducers: {
                profile: ProfileReducer
            }
        });
        await userEvent.click(screen.getByTestId("EditProfileCardHeader.EditBtn"))

        await userEvent.clear(screen.getByTestId("ProfileCard.firstname"))
        await userEvent.clear(screen.getByTestId("ProfileCard.lastname"))

        await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "user")
        await userEvent.type(screen.getByTestId("ProfileCard.lastname"), "user")

        expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("user")
        expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("user")

        await userEvent.click(screen.getByTestId("EditProfileCardHeader.CancelBtn"))

        expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("nik")
        expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("romanov")
   
    });


    test("появляется ошибка", async () => {
        componentRender(<EditProfileCard />, {
            initialState: {
                profile: {
                    readonly: true,
                    data: dataUser,
                    dataForm: dataUser,
                    
                },
                user: {
                    authData: {
                        id: "1"
                    }
                }
            },
            asyncReducers: {
                profile: ProfileReducer
            }
        });
        await userEvent.click(screen.getByTestId("EditProfileCardHeader.EditBtn"))

        await userEvent.clear(screen.getByTestId("ProfileCard.firstname"))
        await userEvent.clear(screen.getByTestId("ProfileCard.lastname"))

           
        await userEvent.click(screen.getByTestId("EditProfileCardHeader.SaveBtn"))

        expect(screen.getByTestId("EditProfileCard.Error.Paragraph")).toBeInTheDocument()

        
   
    });

    test("валидные данные и отправка на сервер", async () => {

        const mockReq = vi.spyOn($api, "put")

        componentRender(<EditProfileCard />, {
            initialState: {
                profile: {
                    readonly: true,
                    data: dataUser,
                    dataForm: dataUser,
                    
                },
                user: {
                    authData: {
                        id: "1"
                    }
                }
            },
            asyncReducers: {
                profile: ProfileReducer
            }
        });
        await userEvent.click(screen.getByTestId("EditProfileCardHeader.EditBtn"))

        await userEvent.clear(screen.getByTestId("ProfileCard.firstname"))
        await userEvent.clear(screen.getByTestId("ProfileCard.lastname"))

        await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "user")
        await userEvent.type(screen.getByTestId("ProfileCard.lastname"), "user")

           
        await userEvent.click(screen.getByTestId("EditProfileCardHeader.SaveBtn"))

        expect(mockReq).toHaveBeenCalled()

    });
});


