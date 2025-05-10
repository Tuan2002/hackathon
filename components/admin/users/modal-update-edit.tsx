import ModalCustom from "@/components/custom/modal-custom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
type ModalUpdateAndEditUserProps = {
  onOpenChange: (open: boolean) => void;
  open: boolean;
};
const ModalUpdateAndEditUser = ({
  onOpenChange,
  open,
}: ModalUpdateAndEditUserProps) => {
  const handleCancel = () => {
    onOpenChange(false);
  };
  const handleConfirm = () => {
    // Handle confirm action
    onOpenChange(false);
  };
  return (
    <ModalCustom
      open={open}
      onOpenChange={onOpenChange}
      title="Thêm mới người dùng"
      onCancel={handleCancel}
      onConfirm={handleConfirm}
    >
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input id="username" className="col-span-3" />
        </div>
      </div>
    </ModalCustom>
  );
};
export default ModalUpdateAndEditUser;
