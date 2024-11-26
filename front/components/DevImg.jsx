import Image from 'next/image';

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} 
      fill priority alt=""
      className="w-[80%] h-[80%] object-cover transform translate-y-[7px]" />
    </div>
  );
};

export default DevImg;
