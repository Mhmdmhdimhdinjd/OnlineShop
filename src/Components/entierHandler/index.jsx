import { useRef, useEffect } from "react";
import UseInfiniteTodos from "../../ReactQuery/ProductListHandler";




const EntierHandler = () => {

    const { fetchNextPage, hasNextPage, isFetchingNextPage } = UseInfiniteTodos();

    const loadingTarget = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && hasNextPage) {
                    const intervalId = setInterval(() => {
                        if (entries[0].isIntersecting && hasNextPage) {
                            fetchNextPage();
                        } else {
                            clearInterval(intervalId);
                        }
                    }, 1000); // عملیات را هر ثانیه یک بار تکرار می‌کند
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
            <div style={{ height: '10px', width: '1rem', backgroundColor: 'red' }} ref={loadingTarget}>
                {isFetchingNextPage && <p>Loading more...</p>}
            </div>

        </>
    )
}


export default EntierHandler