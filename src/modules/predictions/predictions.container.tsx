import { Prediction } from "@/types";
import PredictionsView from "./predictions.view";

type Props = {
  data: Prediction[];
};

const PredictionsContainer: React.FC<Props> = ({ data }: Props) => {
  // Business logic of PredictionsContainer will be here
  return <PredictionsView data={data} />;
};

export default PredictionsContainer;
