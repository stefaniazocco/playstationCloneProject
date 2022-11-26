import { useState } from "react";
import "./productLeft.scss";
import ReactImageMagnify from "@vorld/react-image-magnify";

export function ProductLeft({ product }) {
  const [number, setNumber] = useState(product.img.big1);

  return (
    <div className="product-left">
      <div className="image-little">
        {product.img.small1 && (
          <img
            onClick={() => setNumber(product.img.big1)}
            src={product.img.small1}
            alt=""
          />
        )}
        {product.img.small2 && (
          <img
            onClick={() => setNumber(product.img.big2)}
            src={product.img.small2}
            alt=""
          />
        )}
        {product.img.small3 && (
          <img
            onClick={() => setNumber(product.img.big3)}
            src={product.img.small3}
            alt=""
          />
        )}
      </div>
      <div className="img-zoom-container">
        {/* <img className="image-big mySlides2" id="myimage" src={number} alt="" /> */}
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: false,
              src: number,
              width: 500,
              height: 500,
            },
            largeImage: {
              src: number,
              width: 1600,
              height: 1600,
            },
            shouldUsePositiveSpaceLens: true,
            lensStyle: {
              background: 'hsla(0, 0%, 100%, .5)',
              border: '1px solid black',
              zIndex: 6
            },
            enlargedImagePortalId: "img-zoom-result"
          }}
        />
        <div id="img-zoom-result"></div>
      </div>
    </div>
  );
}
