import React from "react";

type Props = { message?: string };

function Overlay({ message }: Props) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <p className="bg-white/80 px-10 py-6">
        {message ? message : "Please wait..."}
      </p>
    </div>
  );
}

export default Overlay;
