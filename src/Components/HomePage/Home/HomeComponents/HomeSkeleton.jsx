import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
const HomeSkeleton = () => {
  return (
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="rectangular" width={"100%"} height={60} />
      <Skeleton
        style={{ margin: "3% 5%" }}
        variant="rounded"
        width={"90%"}
        height={60}
      />
      <div className=" d-flex justify-content-between" style={{width:'90%', margin:'1rem 5%'}}>
        <Skeleton variant="rectangular" width={100} height={50} />

        <div className="d-flex gap-2">
          <Skeleton
            style={{ }}
            variant="rounded"
            width={80}
            height={50}
          />
           <Skeleton
            style={{ }}
            variant="rounded"
            width={80}
            height={50}
          />
        </div>
      </div>
      {/* For other variants, adjust the size with `width` and `height` */}
      <div className="d-flex w-100  justify-content-around px-5 mb-4">
        <Skeleton variant="circular" width={90} height={90} />
        <Skeleton variant="circular" width={90} height={90} />
        <Skeleton variant="circular" width={90} height={90} />
        <Skeleton variant="circular" width={90} height={90} />
      </div>
      <div className="px-5 w-100 d-flex flex-column gap-5">
        <Skeleton variant="rounded" width={"100%"} height={250} />
        <Skeleton variant="rounded" width={"100%"} height={70} />
      </div>
      <div className="d-flex justify-content-between align-items-center" style={{width:'90%', margin:'1rem 5%'}}>
      <Skeleton variant="circular" width={70} height={70} />
      <Skeleton variant="rounded" width={"25%"} height={250} />

      <Skeleton variant="rounded" width={"25%"} height={250} />

      <Skeleton variant="rounded" width={"25%"} height={250} />
      <Skeleton variant="circular" width={70} height={70} />


      </div>
    </Stack>
  );
};

export default HomeSkeleton;
