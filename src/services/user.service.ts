import { instance } from "@/api/api.interceptor";
import { IUser } from "@/types/user.types";

const USERS = "users";

type TypeData = {
  email: string;
  password?: string;
  name?: string;
  avatarPath?: string;
  phone?: string;
};

export const UserService = {
  async getProfile() {
    return instance<IUser>({
      url: `${USERS}/profile`,
      method: "GET",
    });
  },
  async updateProfile(data: TypeData) {
    return instance<IUser>({
      url: `${USERS}/profile`,
      method: "PUT",
      data,
    });
  },
  async toggleFavorite(productId: string | number) {
    return instance<IUser>({
      url: `${USERS}/profile/favorites/${productId}`,
      method: "PATCH",
    });
  },

  // only admin !!!
  async getAllUsers() {
    return instance<Array<IUser>>({
      url: `${USERS}`,
      method: "GET",
    });
  },
  async deleteUser(id: number) {
    return instance({
      url: `${USERS}/${id}`,
      method: "DELETE",
    });
  },
};
