import { TrashIcon } from "@heroicons/react/24/outline";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const DeleteBtn = ({ className, children }: Props) => {
  return (
    <button className={className}>
      {children ? children : <TrashIcon className=" w-5 h-5" />}
    </button>
  );
};

export default DeleteBtn;
