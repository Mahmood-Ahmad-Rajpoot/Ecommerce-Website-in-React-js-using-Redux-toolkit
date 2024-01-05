import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
const SuggestionSkeleton = () => {
  return (
    <Stack alignItems={"center"} className="col-12" spacing={5}>
      {/* For variant="text", adjust the height via font-size */}
      <div className="w-100 mt-5 mb-5 px-5 d-flex justify-content-between">
        <Skeleton className="rounded-3" variant="rectangular" width={35} height={30} />
        <Skeleton className="rounded-3" variant="rectangular" width={35} height={30} />
      </div>
      <div className="w-100 mt-4   d-flex flex-column align-items-center">
        <Skeleton  className="mb-3 rounded-3" variant="rectangular" width={"50%"} height={'40vh'} />
        <Skeleton className="mb-3 rounded-3" variant="rounded" width={'20%'} height={50} />
        <Skeleton className="mb-3 rounded-3" variant="rounded" width={'55%'} height={30} />

      </div>
      {/* For other variants, adjust the size with `width` and `height` */}

     <div className="w-100 px-5 d-flex justify-content-between">
        <div></div>
        <div className="d-flex gap-2">
        <Skeleton className="rounded-3"   variant="rectangular" width={50} height={15} />
        <Skeleton   variant="circular" width={15} height={15} />
        <Skeleton   variant="circular" width={15} height={15} />

        </div>
        <Skeleton className="rounded-3" variant="rectangular" width={35} height={30} />

     </div>
    </Stack>
  );
};

export default SuggestionSkeleton;
