// api.js
import { useMutation } from "react-query";
import axios from "axios";

export const useSendChatMutation = () => {
    const mutation = useMutation(async (data: {}) => {
        const response = await axios.post(
            "http://127.0.0.1:5000/api/v1/chat",
            data
        );
        
        return response.data;
    });

    return mutation;
};
