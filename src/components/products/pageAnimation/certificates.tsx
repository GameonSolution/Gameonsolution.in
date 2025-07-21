// const Certificates = () => {
//   return (
//     <div className="flex flex-col  gap-10 justify-center py-20 items-center">
//       <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white  uppercase leading-tight">
//         our <span className="text-secondary">certificates</span>
//       </p>
//       <div className="flex lg:flex-row gap-4 flex-col">
//         <div className="bg-white flex flex-col p-5 rounded-xl">
//           <span className="flex  items-center justify-center gap-2">
//             <span className="text-2xl  font-primary tracking-widest flex flex-col">
//               <span>SOUTH </span>
//               <span>INDIA'S</span>
//             </span>
//             <span className="text-5xl font-primary  text-secondary ">NO.1</span>
//           </span>
//           <span className="font-bold   tracking-wide">
//             SPORTS INFRA DEVELOPERS
//           </span>
//         </div>
//         <div className="bg-white flex items-center justify-center p-2 rounded-xl">
//           <img src="/ProductCertificates/BWF.webp" alt="Certificate 1" />
//         </div>
//         <div className="bg-white flex items-center justify-center p-2 rounded-xl">
//           <img src="/ProductCertificates/FIBA.webp" alt="Certificate 2" />
//         </div>
//         <div className="bg-white flex items-center justify-center p-2 rounded-xl">
//           <img src="/ProductCertificates/FIFA.webp" alt="Certificate 3" />
//         </div>
//         <div className="bg-white flex items-center justify-center p-2 rounded-xl">
//           <img src="/ProductCertificates/GLOBAL.webp" alt="Certificate 4" />
//         </div>
//         {/* <div className="bg-white flex items-center justify-center p-2 rounded-xl">
//           <img src="/ProductCertificates/AIPA.webp" alt="Certificate 5" />
//         </div>
//         <div className="bg-white flex items-center justify-center p-2 rounded-xl">
//           <img src="/ProductCertificates/FIFAPRO.webp" alt="Certificate 6" />
//         </div>
//         <div className="bg-white flex items-center justify-center p-2 rounded-xl">
//           <img src="/ProductCertificates/IFP.webp" alt="Certificate 7" />
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Certificates;

const Certificates = () => {
  return (
    <div className="flex flex-col gap-10 justify-center py-20 items-center">
      <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight text-center">
        our <span className="text-secondary">certificates</span>
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        {/* South India's No.1 Box */}
        <div className="bg-white flex flex-col p-5 rounded-xl w-[160px] h-[140px] items-center justify-center text-center">
          <span className="flex items-center justify-center gap-2">
            <span className="text-lg font-primary tracking-widest flex flex-col">
              <span>SOUTH</span>
              <span>INDIA'S</span>
            </span>
            <span className="text-3xl font-primary text-secondary">NO.1</span>
          </span>
          <span className="font-bold tracking-wide text-xs">
            SPORTS INFRA DEVELOPERS
          </span>
        </div>

        {/* Certificate Images */}
        {[
          "BWF.webp",
          "FIBA.webp",
          "FIFA.webp",
          "GLOBAL.webp",
          "AIPA.webp",
          "FIFAPRO.webp",
          "IFP.webp",
          "ITFLOGO.webp",
        ].map((cert, index) => (
          <div
            key={index}
            className="bg-white flex items-center justify-center p-2 rounded-xl w-[160px] h-[140px]"
          >
            <img
              src={`/ProductCertificates/${cert}`}
              alt={`Certificate ${index + 1}`}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
