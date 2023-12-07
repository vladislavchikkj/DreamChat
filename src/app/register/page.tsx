import Auth from "@/components/layout/screens/auth/Auth";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  ...NO_INDEX_PAGE,
};

export default function RegisterPage() {
  return <Auth type="register" />;
}
