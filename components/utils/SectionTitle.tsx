import React from "react";

type SectionTitleProps = {
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
};

const SectionTitle = ({
  title,
  highlight,
  description,
  align = "center",
}: SectionTitleProps) => {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      <div
        className={`flex gap-2 ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">
          {title}
        </h2>

        {highlight && (
          <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
            {highlight}
          </h2>
        )}
      </div>

      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
