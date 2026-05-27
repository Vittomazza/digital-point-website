import { toast as sonnerToast } from "sonner"

export function useToast() {
  return {
    toast: ({ title, description, ...props }) => {
      sonnerToast(title, {
        description,
        ...props
      });
    }
  };
}

export { sonnerToast as toast }