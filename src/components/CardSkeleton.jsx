import Skeleton from "react-loading-skeleton";

const CardSkeleton = ({ cardCount, lineCount }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array(cardCount)
        .fill(0)
        .map((arr, i) => {
          return (
            <div
              key={i}
              className="card card-side border rounded-lg border-gray-400 w-full"
            >
              <div className="w-1/3 -mt-1 overflow-hidden">
                <Skeleton height="100%" width="full" />
              </div>
              <div className="card-body justify-center rounded-r-2xl p-5 ">
                <Skeleton count={lineCount} className="mb-3" />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CardSkeleton;
