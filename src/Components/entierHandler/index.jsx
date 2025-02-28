import { useRef, useEffect } from "react";
import UseInfiniteTodos from "../../ReactQuery/ProductListHandler";
import { CircularProgress } from "@mui/material";




const EntierHandler = () => {

    const { fetchNextPage, hasNextPage, isFetchingNextPage } = UseInfiniteTodos();

    const loadingTarget = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            },
            {
                threshold: 0.0000000001
            }
        );
        const currentTarget = loadingTarget.current;
        if (currentTarget) {
            observer.observe(currentTarget);
        }
        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget);
            }
        };
    }, [fetchNextPage, hasNextPage]);

    return (
        <>
            <div style={{ height: 'fitContent', width: 'fitContent',margin:'auto'}} ref={loadingTarget}>
                {isFetchingNextPage && <CircularProgress style={{display:"block" , margin:'auto'}}/>}
            </div>

        </>
    )
}


export default EntierHandler