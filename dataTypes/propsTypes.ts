import { Dispatch, SetStateAction } from "react";

//props type for auth modal open and clone
//used in : components/layuout/navbar
//used in : components/layout/AuthModal

export type AuthModalPropsType = {
  authModalOpen:    boolean;
  setAuthModalOpen: Dispatch<SetStateAction<boolean>>;
};


export type LoginPagePropsType = {
    setAuthModalOpen: Dispatch<SetStateAction<boolean>>
}