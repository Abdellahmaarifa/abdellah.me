import useCanvasCursor from "@/lib/canvasCursor";
import { Card, CardContent, CardFooter } from "@/ui/card";
import Link from "next/link";

interface BlockProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
  className?: string;
  active?: boolean;
  canvasCursor?: string;
}

export const BlockWrapper = ({
  children,
  link,
  className,
}: {
  children: React.ReactNode;
  link?: string;
  className?: string;
}) => {
  if (link) {
    return (
      <Link className={className} href={link || ""}>
        {children}
      </Link>
    );
  }
  return <div className={className}>{children}</div>;
};

export const Block = ({
  title,
  description,
  children,
  icon,
  link,
  className,
  active = false,
  canvasCursor,
}: BlockProps) => {
  if (canvasCursor) {
    useCanvasCursor(canvasCursor);
  }
  return (
    <BlockWrapper link={link} className={active ? "z-[510]" : ""}>
      <Card
        className={`min-h-[200px] min-w-[300px] h-fit p-2 overflow-hidden relative rounded-2xl border-white/[0.15] border-[0.5px] border-solid ${className} flex flex-col gap-0`}
      >
        {canvasCursor && (
          <canvas
            className="pointer-events-none inset-0 w-full h-full z-500 absolute top-0 left-0"
            id={canvasCursor}
          />
        )}
        <CardContent className="relative top-0 left-0 w-full h-full p-0">
          {children}
        </CardContent>
        {(title || description || icon) && (
          <CardFooter className="p-3 relative bottom-0 right-0 w-full flex justify-between items-center z-20">
            <div className="flex flex-col items-start justify-center gap-1 p-1 w-full">
              <p className="text-md font-semibold">{title}</p>
              <p className="text-sm text-white/70 max-w-[90%]">{description}</p>
            </div>
            <div className="flex items-center gap-2 self-end">{icon}</div>
          </CardFooter>
        )}
      </Card>
    </BlockWrapper>
  );
};
