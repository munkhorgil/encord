import { ImageFile, Prediction } from "@/types";

import ImagesContainer from "../images/images.container";
import PredictionsContainer from "../predictions/predictions.container";
import { TABS } from "@/constants";
import Tabs from "@/ui/tabs";
import { useState } from "react";

type Props = {
  images: ImageFile[];
  predictions: Prediction[];
  onAddImage: (file: File) => void;
  onPredict: (image: ImageFile) => void;
};

const HomeView: React.FC<Props> = ({
  images,
  predictions,
  onAddImage,
  onPredict,
}: Props) => {
  const [tab, setTab] = useState<string>(TABS.IMAGES);

  const isCurrentTabIamges = tab === TABS.IMAGES;

  return (
    <>
      <Tabs>
        <Tabs.Item
          isActive={isCurrentTabIamges}
          onClick={() => setTab(TABS.IMAGES)}
        >
          {TABS.IMAGES}
        </Tabs.Item>
        <Tabs.Item
          isActive={!isCurrentTabIamges}
          onClick={() => setTab(TABS.PREDICTIONS)}
        >
          {TABS.PREDICTIONS}
        </Tabs.Item>
      </Tabs>
      <div className="p-12">
        {tab === TABS.IMAGES && (
          <ImagesContainer
            images={images}
            onAddImage={onAddImage}
            onPredict={onPredict}
          />
        )}
        {tab === TABS.PREDICTIONS && (
          <PredictionsContainer data={predictions} />
        )}
      </div>
    </>
  );
};

export default HomeView;
