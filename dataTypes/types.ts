
//Data type for pages/api/v1/auth/register response
export type ResponseData = {
  success:  boolean;
  data:     any;
};

//Data type for api/authApiHelper
export type AuthPayloadType = {
  name?:    string;
  email:    string;
  address?: string;
  phone?:   string;
  password: string;
};

//Query type for lib/db.js
export type QuerType = {
  query: string;
  values: string[];
}

//token data type
export type TokenType = {
  id:         string;
  name:       string;
  email:      string;
  phone:      string;
  gender:     string;
  points:     number;
  firstLogin: number;
}