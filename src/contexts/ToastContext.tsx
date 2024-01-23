import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

import classNames from "classnames";

import { Toast } from "../components";
import { WithChildren } from "../types";

export interface IToastContext {
  toast: (children: ReactNode, type?: "error" | "warning" | "success") => void;
}

export const ToastContext = createContext<IToastContext>({ toast: () => null });
export const ToastContextProvider = ToastContext.Provider;

type ToastState =
  | {
      isVisible: false;
    }
  | {
      isVisible: true;
      children?: ReactNode;
      type?: "error" | "warning" | "success";
    };

interface ToastProviderProps extends WithChildren {
  disappearIn?: number;
  position?:
    | "topLeft"
    | "topCenter"
    | "topRight"
    | "bottomLeft"
    | "bottomCenter"
    | "bottomRight";
}

export function ToastProvider({
  disappearIn = 5000,
  position = "bottomCenter",
  children
}: ToastProviderProps) {
  const [state, setState] = useState<ToastState>({ isVisible: false });

  const toast = useCallback(
    (children: ReactNode, type?: "error" | "warning" | "success") => {
      setState({ isVisible: true, children, type });
    },
    []
  );

  useEffect(() => {
    if (state.isVisible) {
      setTimeout(() => {
        setState({ isVisible: false });
      }, disappearIn);
    }
  }, [state]);

  const value = useMemo(() => ({ toast }), []);

  return (
    <ToastContextProvider value={value}>
      <div className="relative">
        {children}
        <Toast
          className={classNames(
            "absolute transition ease-in-out duration-500",
            {
              "top-2 left-4 md:top-4 md:left-6 lg:top-6 lg:left-8 -translate-y-[100vh]":
                position === "topLeft",
              "top-2 left-1/2 md:top-4 lg:top-6 -translate-y-[100vh] -translate-x-1/2":
                position === "topCenter",
              "top-2 right-4 md:top-4 md:right-6 lg:top-6 lg:right-8 -translate-y-[100vh]":
                position === "topRight",
              "bottom-2 left-4 md:bottom-4 md:left-6 lg:bottom-6 lg:left-8 translate-y-[100vh]":
                position === "bottomLeft",
              "bottom-2 left-1/2 md:bottom-4 lg:bottom-6 translate-y-[100vh] -translate-x-1/2":
                position === "bottomCenter",
              "bottom-2 right-4 md:bottom-4 md:right-6 lg:bottom-6 lg:right-8 translate-y-[100vh]":
                position === "bottomRight"
            },
            {
              "!translate-y-0": state.isVisible
            }
          )}
          children={"children" in state && state.children}
          onClose={() => setState({ isVisible: false })}
          error={"type" in state && state.type === "error"}
          warning={"type" in state && state.type === "warning"}
          success={"type" in state && state.type === "success"}
        />
      </div>
    </ToastContextProvider>
  );
}

export function useToast() {
  return useContext(ToastContext).toast;
}
