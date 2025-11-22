const Certificatesaqua = () => {
  return (
    <div className="flex flex-col gap-10 justify-center py-20 items-center">
      <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight text-center">
        our <span className="text-cyan-400">certificates</span>
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        {/* South India's No.1 Box */}
        {/* <div
          className="bg-white flex flex-col p-5 rounded-xl w-[160px] h-[140px] items-center justify-center text-center
                        text-slate-900 dark:text-slate-900"
        >
          {" "}
          <span className="flex items-center justify-center gap-2">
            <span className="text-lg font-primary tracking-widest flex flex-col">
              <span className="text-slate-900">SOUTH</span>
              <span className="text-slate-900">INDIA'S</span>
            </span>
            <span className="text-3xl font-primary text-secondary">NO.1</span>
          </span>
          <span className="font-bold tracking-wide text-xs text-slate-900">
            SPORTS INFRA DEVELOPERS
          </span>
        </div> */}

        {/* Certificate Images */}
        {[
          "SISID.png",
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
            className="bg-white flex items-center justify-center p-2 rounded-xl w-[100px] h-[140px]"
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

export default Certificatesaqua;
