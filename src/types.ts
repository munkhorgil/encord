export type ImageFile = {
  id: string;
  name: string;
  size: string;
  timestamp: Date;
  file: Blob;
};

export type Prediction = {
  id: string;
  title: string;
  description: string;
  timestamp: Date;
  image: ImageFile;
  value: PredictionValue;
};

export type PredictionValue = {
  description: string;
  predictions: Array<Record<string, any>>;
};
