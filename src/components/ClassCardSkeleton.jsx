import Skeleton from "react-loading-skeleton";

const ClassCardSkeleton = ({ cardCount }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array(cardCount)
        .fill(0)
        .map((_arr, i) => {
          return (
            <div key={i} className="border">
              <div className="-mt-1 overflow-hidden">
                <Skeleton height="250px" width="full" />
              </div>
              <div className="mt-5 justify-center rounded-r-2xl px-2 ">
                <Skeleton width="250px" className="mb-3" />
                <Skeleton width="170px" className="mb-3" />

                <div className="flex justify-between items-center">
                  <Skeleton width="140px" className="mb-3" />
                  <Skeleton width="140px" className="mb-3" />
                </div>
                <div className="flex justify-between items-center">
                  <Skeleton width="140px" className="mb-3" />
                  <Skeleton width="140px" className="mb-3" />
                </div>

                <div className="mt-2 ">
                  <Skeleton width="100%" height="40px" />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ClassCardSkeleton;
