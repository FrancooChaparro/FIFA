// import { useEffect } from "react";

// export function handleScroll(topOffset, setShowBackground) {
//   const handleScroll = () => {
//     if (window.scrollY >= topOffset) {
//       setShowBackground(true);
//     } else {
//       setShowBackground(false);
//     }
//   };

//   window.addEventListener("scroll", handleScroll);

//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }

// export function handleClick(top) {
//   window.scrollTo({
//     top,
//     left: 0,
//     behavior: "smooth",
//   });
// }

// export function handleShow(router, param) {
//   setShowCor(false);
//   router.push(param);
// }

// export function handleShow2(setShowMenu, setShowBrowse, showBrowse) {
//   setShowMenu(false);
//   setShowBrowse(!showBrowse);
// }
