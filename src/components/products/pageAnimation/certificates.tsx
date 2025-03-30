const Certificates = () => {
  return (
    <div className="flex flex-col  gap-10 justify-center py-20 items-center">
      <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white  uppercase leading-tight">
        our <span className="text-secondary">certificates</span>
      </p>
      <div className="flex lg:flex-row gap-4 flex-col">
        <div className="bg-white flex flex-col p-5 rounded-xl">
          <span className="flex  items-center justify-center gap-2">
            <span className="text-2xl  font-primary tracking-widest flex flex-col">
              <span>SOUTH </span>
              <span>INDIA'S</span>
            </span>
            <span className="text-5xl font-primary  text-secondary ">NO.1</span>
          </span>
          <span className="font-bold   tracking-wide">
            SPORTS INFRA DEVELOPERS
          </span>
        </div>
        <div className="bg-white flex items-center justify-center p-2 rounded-xl">
          <img src="/ProductCertificates/BWF.webp" alt="Certificate 1" />
        </div>
        <div className="bg-white flex items-center justify-center p-2 rounded-xl">
          <img
            src="/ProductCertificates/FIBA.webp"
            alt="Certificate 2"
          />
        </div>
        <div className="bg-white flex items-center justify-center p-2 rounded-xl">
          <img
            src="/ProductCertificates/FIFA.webp"
            alt="Certificate 3"
          />
        </div>
        <div className="bg-white flex items-center justify-center p-2 rounded-xl">
          <img
            src="/ProductCertificates/GLOBAL.webp"
            alt="Certificate 3"
          />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
