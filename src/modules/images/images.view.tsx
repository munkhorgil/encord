import Button from "@/ui/button";
import Card from "@/ui/card";
import Empty from "@/ui/empty";
import FilePicker from "@/ui/file-picker";
import { ImageFile } from "@/types";
import Table from "@/ui/table";
import dayjs from "dayjs";

type Props = {
  images: ImageFile[];
  onAddImage: (file: File) => void;
  onPredict: (image: ImageFile) => void;
};

const ImagesView: React.FC<Props> = ({
  images = [],
  onAddImage,
  onPredict,
}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    onAddImage(event.target.files[0]);
  };

  return (
    <Card>
      <FilePicker
        label="Upload an image"
        accept="image/png, image/gif, image/jpeg"
        onChange={handleChange}
      />
      {images.length > 0 ? (
        <Table>
          <Table.THead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Size</Table.Th>
              <Table.Th>Uploaded date</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.THead>
          <Table.TBody>
            {images.map((image) => (
              <Table.Tr key={image.id}>
                <Table.Td>{image.name}</Table.Td>
                <Table.Td>{image.size}</Table.Td>
                <Table.Td>{dayjs(image.timestamp).format("lll")}</Table.Td>
                <Table.Td>
                  <Button onClick={() => onPredict(image)}>Predict</Button>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.TBody>
        </Table>
      ) : (
        <Empty text="No images to show" />
      )}
    </Card>
  );
};

export default ImagesView;
