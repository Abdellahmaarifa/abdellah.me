import clsx from "clsx";
import {
  FlaskConical,
  HomeIcon,
  InfoIcon,
  LinkIcon,
  MessageCircleIcon,
} from "lucide-react";
export const Icons = {
  about: ({ className }: { className?: string }) => (
    <InfoIcon className={clsx("size-2 text-white bg-white", className)} />
  ),
  jobzyn: ({ className }: { className?: string }) => (
    <LinkIcon className={clsx("w-4", className)} />
  ),
  _1337: ({ className }: { className?: string }) => (
    <LinkIcon className={clsx("w-4", className)} />
  ),
  overping: ({ className }: { className?: string }) => (
    <LinkIcon className={clsx("size-6", className)} />
  ),
  nav: {
    home: ({ className }: { className?: string }) => (
      <HomeIcon className={clsx("size-6", className)} />
    ),
    about: ({ className }: { className?: string }) => (
      <InfoIcon className={clsx("size-6", className)} />
    ),
    projects: ({ className }: { className?: string }) => (
      <FlaskConical className={clsx("size-6", className)} />
    ),
    contact: ({ className }: { className?: string }) => (
      <MessageCircleIcon className={clsx("size-6", className)} />
    ),
  },
  harvard: ({ className }: { className?: string }) => (
    <LinkIcon className={clsx("w-4", className)} />
  ),
};
