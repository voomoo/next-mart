import { Dispatch, SetStateAction } from "react";

//props type for auth modal open and clone
//used in : components/layuout/navbar
//used in : components/layout/AuthModal

export type AuthModalPropsType = {
  authModalOpen: boolean;
  setAuthModalOpen: Dispatch<SetStateAction<boolean>>;
};

export type NavbarPropsType = {
  authModalOpen: boolean;
  setAuthModalOpen: Dispatch<SetStateAction<boolean>>;
  setDrawerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  drawerVisible: boolean;
  setRole: Dispatch<SetStateAction<string | null>>
};

export type LoginPagePropsType = {
  setAuthModalOpen: Dispatch<SetStateAction<boolean>>;
};

//used in components/layout/sidedrawer
export type SideDrawerPropType = {
  drawerVisible: boolean;
  authModalOpen: boolean;
  setRole: Dispatch<SetStateAction<string | null>>
  role: string | null
};

//used in components/banner
export type BannerPropsType = {
  img: string;
  link: string;
};

//used in components/productcard
export type ProductCardPropsType = {
  productName: string;
  productQty: string;
  productPrice: number;
  productImage: string;
  inStock: number;
  productDescription: string;
};
