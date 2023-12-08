import Auth from "@/components/layout/screens/auth/Auth";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  ...NO_INDEX_PAGE,
};

export default function LoginPage() {
  return <Auth type="Login" />;
}
