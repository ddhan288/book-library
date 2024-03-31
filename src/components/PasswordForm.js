const PasswordForm = ({ password }) => {
  return (
    <div className="w-[422px] flex flex-col items-start justify-start gap-[8px] text-left text-base text-dimgray-600 font-inter">
      <div className="self-stretch relative leading-[100%] font-semibold">
        {password}
      </div>
      <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-start p-4 gap-[8px] border-[1px] border-solid border-gainsboro-400">
        <div className="flex-1 h-3 flex flex-row items-center justify-start gap-[4px]">
          <div className="w-2 relative rounded-[50%] bg-dimgray-600 h-2" />
          <div className="w-2 relative rounded-[50%] bg-dimgray-600 h-2" />
          <div className="w-2 relative rounded-[50%] bg-dimgray-600 h-2" />
          <div className="w-2 relative rounded-[50%] bg-dimgray-600 h-2" />
          <div className="w-2 relative rounded-[50%] bg-dimgray-600 h-2" />
          <div className="w-2 relative rounded-[50%] bg-dimgray-600 h-2" />
          <div className="w-2 relative rounded-[50%] bg-dimgray-600 h-2" />
          <div className="w-2 relative rounded-[50%] bg-dimgray-600 h-2" />
        </div>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/eye--off.svg"
        />
      </div>
    </div>
  );
};

export default PasswordForm;
