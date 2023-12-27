/* eslint-disable */
import axios from 'axios';
import { useQueryClient } from '@tanstack/react-query'


const useAxiosClient = () => {
  const queryClient = useQueryClient()
  const client = axios.create({
    timeout: 8000,
    headers: {
      Accept: 'application/json',
    },
  });
  
  client.interceptors.response.use(
    (response) => {
      if (response.data.shouldInvalidate) {
        queryClient.invalidateQueries(response.data.invalidateQuery)
      }
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return client;
};

export default useAxiosClient;