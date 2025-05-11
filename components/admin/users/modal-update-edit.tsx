import ModalCustom from "@/components/custom/modal-custom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { createNewUserAsync } from "@/services/users.action";
import { QUERY_KEYS } from "@/tanstack/query/queryKeys";
import { useQueryGetRoles } from "@/tanstack/query/useRoles";
import { CreateAndUpdateUserRequest } from "@/types/user.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
type ModalUpdateAndEditUserProps = {
  onOpenChange: (open: boolean) => void;
  open: boolean;
};
const ModalUpdateAndEditUser = ({
  onOpenChange,
  open,
}: ModalUpdateAndEditUserProps) => {
  const queryClient = useQueryClient();
  const createUserMutation = useMutation({
    mutationFn: (data: CreateAndUpdateUserRequest) => createNewUserAsync(data),
    onSuccess: (data) => {
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_USERS] });
        onOpenChange(false);
      }
    },
    onError: (error) => {
      // Handle error
      console.error("Error creating user:", error);
    },
  });

  const handleCancel = () => {
    onOpenChange(false);
  };
  const handleConfirm = () => {
    // Handle confirm action
    createUserMutation.mutate(userData);
  };

  const {
    data: roles,
    isLoading: isLoadingRoles,
    error: errorRoles,
  } = useQueryGetRoles();

  const [userData, setUserData] = useState<CreateAndUpdateUserRequest>({
    name: "",
    email: "",
    image: "",
    roleId: "",
  });
  const handleChange = (
    value: string,
    field: keyof CreateAndUpdateUserRequest
  ) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  useEffect(() => {
    if (
      roles &&
      roles?.length > 0 &&
      (!userData.roleId || userData.roleId === "")
    ) {
      setUserData((prev) => ({
        ...prev,
        roleId: roles?.[0]?.id || "",
      }));
    }
  }, [roles, userData.roleId]);

  return (
    <ModalCustom
      open={open}
      onOpenChange={onOpenChange}
      title="Thêm mới người dùng"
      onCancel={handleCancel}
      onConfirm={handleConfirm}
      confirmButtonText="Xác nhận"
      cancelButtonText="Hủy bỏ"
    >
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="">
            Tên người dùng
          </Label>
          <Input
            value={userData.name}
            onChange={(e) => handleChange(e.target.value, "name")}
            id="name"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="">
            Email
          </Label>
          <Input
            value={userData.email}
            onChange={(e) => handleChange(e.target.value, "email")}
            id="email"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="roleId" className="">
            Phân quyền
          </Label>
          <div className="col-span-3">
            <Select
              name="roleId"
              defaultValue={userData.roleId}
              value={userData.roleId}
              onValueChange={(value) => handleChange(value, "roleId")}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Chọn một phân quyền người dùng" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {roles?.map((role) => (
                    <SelectItem key={role.id} value={role.id}>
                      {role.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </ModalCustom>
  );
};
export default ModalUpdateAndEditUser;
