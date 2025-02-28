import { Loader } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const spinnerVariant = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      default: "h-4 w-4",
      sm: "h-2 w-2",
<<<<<<< HEAD
      lg: "h-6 2-6",
=======
      lg: "h-6 w-6",
>>>>>>> 3b64a6940de12b829bdb830d94fd912f6696e1c8
      icons: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

<<<<<<< HEAD
interface SpinnerProps
  extends Omit<React.ComponentProps<typeof Loader>, "size">,
    VariantProps<typeof spinnerVariant> {}

export const Spinner = ({ size }: SpinnerProps) => {
=======
interface spinnerProps extends VariantProps<typeof spinnerVariant> {}

export const Spinner = ({ size }: spinnerProps) => {
>>>>>>> 3b64a6940de12b829bdb830d94fd912f6696e1c8
  return <Loader className={cn(spinnerVariant({ size }))} />;
};
