import { ImageFile } from "@/types";
import ImagesView from "./images.view";

type Props = {
  images: ImageFile[];
  onAddImage: (file: File) => void;
  onPredict: (image: ImageFile) => void;
};

const ImagesContainer: React.FC<Props> = ({
  images,
  onAddImage,
  onPredict,
}: Props) => {
  return (
    // Business logic of ImagesContainer will be here
    <ImagesView images={images} onAddImage={onAddImage} onPredict={onPredict} />
  );
};

export default ImagesContainer;
