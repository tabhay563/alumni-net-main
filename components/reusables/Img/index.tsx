import React, { useState } from "react";
import styles from "./Img.module.scss";

export default function Chat({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: any;
}) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <div className={`${styles.container} ${className}`}>
      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setIsLoaded(true)}
        style={isLoaded ? {} : { display: "none" }}
      />
    </div>
  );
}
