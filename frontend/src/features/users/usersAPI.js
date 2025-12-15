import api from "../../services/api";

export const fetchUsersAPI = async () => {
    const response = await api.get("/users");
    return response.data;
};
