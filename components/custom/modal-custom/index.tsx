"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
type ModalCustomProps = {
  onOpenChange: (open: boolean) => void;
  open: boolean;
  title?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  children: React.ReactNode;
  showCancelButton?: boolean;
  showConfirmButton?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  showFooter?: boolean;
  showHeader?: boolean;
};
const ModalCustom = ({
  onOpenChange,
  open,
  title = "Modal title",
  children,
  onConfirm,
  onCancel,
  showCancelButton = true,
  showConfirmButton = true,
  confirmButtonText = "Confirm",
  cancelButtonText = "Cancel",
  showFooter = true,
  showHeader = true,
}: ModalCustomProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[calc(100vh-100px)] pb-4">
        <DialogHeader>
          <DialogTitle>
            {showHeader && (
              <div className="px-4 py-3 border-b-2 border-b-slate-700">
                {title}
              </div>
            )}
          </DialogTitle>
        </DialogHeader>
        <div className="max-h-[calc(100vh-250px)] overflow-y-auto [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-thumb]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-track]:bg-transparent p-2">
          {children}
        </div>
        {showFooter && (
          <DialogFooter>
            <div className="px-2 flex justify-end gap-2 items-center">
              {showCancelButton && (
                <Button
                  variant={"secondary"}
                  type="submit"
                  onClick={() => {
                    if (onCancel) {
                      onCancel();
                    }
                  }}
                >
                  {cancelButtonText}
                </Button>
              )}
              {showConfirmButton && (
                <Button
                  type="submit"
                  variant="default"
                  onClick={() => {
                    if (onConfirm) {
                      onConfirm();
                    }
                  }}
                >
                  {confirmButtonText}
                </Button>
              )}
            </div>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};
export default ModalCustom;
