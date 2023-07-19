import { ImageFile, Prediction, PredictionValue } from "@/types";
import { formatBytes, sendRequest } from "@/utils";

import Button from "@/ui/button";
import HomeView from "./home.view";
import Modal from "@/ui/modal";
import toast from "react-hot-toast";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const HomeContainer: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [images, setImages] = useState<ImageFile[]>([]);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [selectedImage, setSelectedImage] = useState<ImageFile>();
  const [form, setForm] = useState<{ title: string; description: string }>({
    title: "",
    description: "",
  });

  const handleImageAdd = (file: File) => {
    const image: ImageFile = {
      id: uuidv4(),
      name: file.name,
      size: formatBytes(file.size),
      timestamp: new Date(),
      file
    };

    setImages((prevValues) => [...prevValues, image]);
  };

  const handlePredict = (image: ImageFile) => {
    setSelectedImage(image);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleSubmit = async () => {
    if (!form.title || form.title.length === 0) {
      return toast.error("Please enter a title");
    }

    if (!form.description || form.description.length === 0) {
      return toast.error("Please enter a description");
    }

    if (!selectedImage) {
      return toast.error("Image not selected");
    }

    try {
      // Since we're using the prediction request only in one place
      // I'd prefer using this custom request instead of writing a custom hook.
      const data = await sendRequest<PredictionValue>("predict", "GET");

      setPredictions((prevValues) => [
        ...prevValues,
        {
          id: uuidv4(),
          title: form.title,
          description: form.description,
          value: data,
          image: selectedImage,
          timestamp: new Date(),
        },
      ]);

      setForm({ title: "", description: "" });
      setOpen(false);

      toast.success("Successfully addedd to Predictions");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <HomeView
        images={images}
        predictions={predictions}
        onAddImage={handleImageAdd}
        onPredict={handlePredict}
      />
      <Modal isOpen={open} onClose={handleClose}>
        <div className="p-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter title here"
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter description here"
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </div>

          <div className="space-x-2">
            <Button onClick={handleSubmit}>Submit</Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HomeContainer;
