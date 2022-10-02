import React from "react";

export default function Section({
  children,
  className,
  baseClass,
  id,
  decorations,
  ...props
}) {
  return (
    <section className={"relative " + baseClass} id={id} name={id}>
      {decorations}
      <div
        className={"mx-auto max-w-screen-2xl px-24 relative py-12 " + className}
        {...props}
      >
        {children}
      </div>
    </section>
  );
}
