import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

function UseInfiniteTodos() {
    const hhbh= useInfiniteQuery({
        queryKey: ['todos'],
        initialPageParam: 1,
        queryFn: async function ({ pageParam }) {
            const response = await axios.get(`https://sit-karyabi.saminray.com/apiapp/JobOpportunity/GetFilteredJobOpportunity?page=${pageParam}&_limit=10`);
            return response.data;
        },
        getNextPageParam: function (lastPage, allPages) {
            if (lastPage.length === 0) return undefined;
            return allPages.length + 1;
        },
    });

    return hhbh;
}

export default UseInfiniteTodos;
