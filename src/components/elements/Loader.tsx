// import styled from "styled-components";

const Loader = () => {
  return (
    <div className="sun drop-shadow-2xl">
      <div className="center"></div>
      <div className="ray r-1"></div>
      <div className="ray r-2"></div>
      <div className="ray r-3"></div>
      <div className="ray r-4"></div>
      <div className="ray r-5"></div>
      <div className="ray r-6"></div>
      <div className="ray r-7"></div>
      <div className="ray r-8"></div>
    </div>
  );
};

// const StyledWrapper = styled.div`
//   .sun {
//     position: relative;
//     animation: rotate 4s linear infinite;
//     --color: yellow;
//     --scale: 0.4;
//   }

//   .center {
//     height: calc(var(--scale) * 10em);
//     width: calc(var(--scale) * 10em);
//     background-color: var(--color);
//     border-radius: 50%;
//     box-shadow: 0 0 calc(var(--scale) * 3em) var(--color);
//   }

//   .ray {
//     position: absolute;
//     height: calc(var(--scale) * 3em);
//     width: calc(var(--scale) * 0.5em);
//     box-shadow: 0 0 calc(var(--scale) * 1em) var(--color);
//     background-color: var(--color);
//   }

//   .r-1 {
//     margin-left: calc(var(--scale) * 4.75em);
//     margin-top: calc(var(--scale) * 1em);
//   }

//   .r-2 {
//     margin-left: calc(var(--scale) * 12.25em);
//     margin-top: calc(var(--scale) * -6.25em);
//     transform: rotate(90deg);
//   }

//   .r-3 {
//     margin-left: calc(var(--scale) * 4.75em);
//     margin-top: calc(var(--scale) * -14em);
//   }

//   .r-4 {
//     margin-left: calc(var(--scale) * -2.75em);
//     margin-top: calc(var(--scale) * -6.25em);
//     transform: rotate(90deg);
//   }

//   .r-5 {
//     margin-left: calc(var(--scale) * -0.5em);
//     margin-top: calc(var(--scale) * -1em);
//     transform: rotate(45deg);
//   }

//   .r-6 {
//     margin-left: calc(var(--scale) * 9.75em);
//     margin-top: calc(var(--scale) * -1em);
//     transform: rotate(-45deg);
//   }

//   .r-7 {
//     margin-left: calc(var(--scale) * 10.25em);
//     margin-top: calc(var(--scale) * -11.75em);
//     transform: rotate(45deg);
//   }

//   .r-8 {
//     margin-left: calc(var(--scale) * -0.5em);
//     margin-top: calc(var(--scale) * -11.75em);
//     transform: rotate(-45deg);
//   }

//   @keyframes rotate {
//     0% {
//       transform: rotate(0deg);
//     }

//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `;

export default Loader;
