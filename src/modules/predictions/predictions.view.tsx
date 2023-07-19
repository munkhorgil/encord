import Annotation from "@/ui/annotation";
import Button from "@/ui/button";
import Card from "@/ui/card";
import Empty from "@/ui/empty";
import Modal from "@/ui/modal";
import { Prediction } from "@/types";
import Table from "@/ui/table";
import dayjs from "dayjs";
import { useState } from "react";

type Props = {
  data: Prediction[];
};

const PredictionsView: React.FC<Props> = ({ data }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Prediction>();

  const handleView = (item: Prediction) => {
    setSelectedItem(item);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Card>
      {data.length > 0 ? (
        <Table>
          <Table.THead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Description</Table.Th>
              <Table.Th>Submitted date</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.THead>
          <Table.TBody>
            {data.map((item) => (
              <Table.Tr key={item.id}>
                <Table.Td>{item.title}</Table.Td>
                <Table.Td>{item.description}</Table.Td>
                <Table.Td>{dayjs(item.timestamp).format("lll")}</Table.Td>
                <Table.Td>
                  <Button onClick={() => handleView(item)}>View</Button>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.TBody>
        </Table>
      ) : (
        <Empty text="No predictions to show" />
      )}
      <Modal isOpen={open} onClose={handleClose}>
        <div className="relative w-[1000px] h-[800px]">
          <Annotation data={selectedItem?.value} />
          {selectedItem?.image.file && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={URL.createObjectURL(selectedItem?.image?.file)}
              alt={selectedItem?.description || ""}
              className="h-full w-full"
            />
          )}
        </div>
      </Modal>
    </Card>
  );
};

export default PredictionsView;
