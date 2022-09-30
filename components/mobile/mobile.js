import { useRouter } from "next/router";
import { Fragment } from "react";
import MainHeader from "./main-header";

const Mobile = ({ children }) => {
  const router = useRouter();
  console.log(router.pathname);
  return (

        <Fragment>
          <MainHeader />
          <main>{children}</main>
        </Fragment>
  );
};
export default Mobile;



// import { useRouter } from "next/router";
// import { Fragment } from "react";
// import MainHeader from "./main-header";

// const Mobile = ({ children }) => {
//   const router = useRouter();
//   console.log(router.pathname);
//   return (
//     <>
//       {router.pathname === "/" ? (
//         <main>{children}</main>
//       ) : (
//         <Fragment>
//           <MainHeader />
//           <main>{children}</main>
//         </Fragment>
//       )}
//     </>
//   );
// };
// export default Mobile;
