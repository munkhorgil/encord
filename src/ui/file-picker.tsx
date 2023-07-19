type InputProps = React.ComponentProps<"input">;
type Props = {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & InputProps;

const FilePicker = ({ label, onChange, ...props }: Props) => {
  return (
    <div className="mb-6">
      <span className="mr-2">{label}: </span>
      <label
        htmlFor="file-input"
        className="rounded bg-primary px-4 py-2 cursor-pointer text-white text-sm"
      >
        Choose a file
      </label>
      <input
        className="hidden"
        id="file-input"
        type="file"
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default FilePicker;
