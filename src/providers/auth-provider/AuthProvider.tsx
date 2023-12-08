"use client";
import Cookies from "js-cookie";
import { FC, PropsWithChildren, useEffect } from "react";

import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";

import { REFRESH_TOKEN } from "@/constants/token.constants";
import { getAccessToken } from "@/services/auth/auth.helper";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "./protected-routes.data";

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { user } = useAuth();
  const { checkAuth, logout } = useActions();

  const pathname = usePathname();

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) checkAuth();
  }, []);

  useEffect(() => {
    const refreshToken = Cookies.get(REFRESH_TOKEN);
    if (!refreshToken && user) logout();
  }, [pathname]);

  const router = useRouter();

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname?.startsWith(route)
  );

  if (user?.isAdmin) return <>{children}</>;
  if (user && isProtectedRoute) return <>{children}</>;

  pathname != "./login" && router.replace("./login");
  return null;
};

export default AuthProvider;
