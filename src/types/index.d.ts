import type { ReactNode, Dispatch, SetStateAction } from "react";

type ChildContainerProps = {
  children: ReactNode;
};

interface TNavigateLink extends ChildContainerProps {
  navTo: string;
}

type Visible = { visible: boolean };

type SetVisible = {
  setVisible: Dispatch<SetStateAction<boolean>>;
};

interface ManageOverlays {
  visible: Visible;
  setVisible: SetVisible;
}

export type {
  ChildContainerProps,
  TNavigateLink,
  Visible,
  SetVisible,
  ManageOverlays,
};
