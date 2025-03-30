import { useState } from "react";
import { Blurhash } from "react-blurhash";
import {
  
  LazyLoadImage,
} from "react-lazy-load-image-component";
import styled from "styled-components";


const StyledBlurhash = styled(Blurhash)`
  z-index: 20;
  position: absolute !important;
  top: 0;
  left: 0;
  height:100vh
  width:100vw
  transition: opacity 1s ease-in-out;
`;
// const StyledBlurhash = styled(Blurhash)<{ isVisible: boolean }>`
//   z-index: 20;
//   position: absolute !important;
//   top: 0;
//   left: 0;
//   height:100vh
//   width:100vw
//   opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
//   transition: opacity 1s ease-in-out;
// `;

interface IOptimizedImageProps {
 imageUrl: string; blurhash: string 
 height:number,
 width:number
 classNames?:string
}

function OptimizedImage(props: IOptimizedImageProps) {
  const { blurhash,imageUrl,classNames,height,width } = props;

  const [isLoaded, setLoaded] = useState(false);
  const [isLoadStarted, setLoadStarted] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleLoadStarted = () => {
    setLoadStarted(true);
  };


  return (
    <div>
     <LazyLoadImage
        src={imageUrl}
        className={`${classNames}  object-cover transition-transform duration-[2000ms] ease-in-out`} 
        onLoad={handleLoad}
        beforeLoad={handleLoadStarted}

      />
      {!isLoaded && isLoadStarted && (
        <StyledBlurhash
        className='transition-transform duration-[2000ms] rounded-xl ease-in-out'
          hash={blurhash}
          width={width}
          height={height}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          // isVisible={!isLoaded}
        />
      )}
    </div>
  );
}

export { OptimizedImage };
