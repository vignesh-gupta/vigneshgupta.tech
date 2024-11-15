import { cn } from "@/lib/utils";
import { MailCheckIcon, MailWarningIcon } from "lucide-react";
import { useRef } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Confetti, { ConfettiRef } from "../ui/confetti";

type PostContactCardProps = {
  success?: boolean;
};

const PostContactCard = ({ success }: PostContactCardProps) => {
  const confettiRef = useRef<ConfettiRef>(null);

  const message = success
    ? {
        Icon: MailCheckIcon,
        title: "Message Sent!",
        description:
          "Thanks for taking the time to write me, I’ll reply to you as soon as possible.",
        footer: "In the meantime, follow me on these platforms below",
      }
    : {
        Icon: MailWarningIcon,
        title: "Couldn't send message :(",
        description:
          "There was an error sending your message, please try again later.",
        footer:
          "Or, try reaching out using one of the following platforms instead",
      };

  return (
    <Card className="min-h-[565px] flex items-center justify-center bg-muted/20 dark:bg-card relative overflow-visible">
      <CardHeader className="flex items-center gap-2">
        <message.Icon
          className={cn("size-12 text-primary", {
            "text-destructive": !success,
          })}
        />
        <CardTitle className="text-base">{message.title}</CardTitle>
        <CardDescription className="text-sm">
          {message.description}
        </CardDescription>
      </CardHeader>

      {success && (
        <Confetti
          ref={confettiRef}
          className="absolute left-0 top-0 z-0 size-full"
          onMouseEnter={() => {
            confettiRef.current?.fire({
              spread: 70,
            });
          }}
        />
      )}

      <CardFooter className="absolute bottom-0 left-0 right-0 p-4 flex justify-center flex-col gap-2 text-muted">
        <p className="text-xs">{message.footer}</p>
        <svg
          width="60"
          height="60"
          viewBox="0 0 70 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.0324 39.0168C25.5576 41.2194 24.6673 43.799 24.5124 46.3209C24.2211 51.6092 24.1749 56.8783 24.1287 62.1474C24.0936 72.1397 24.115 82.226 24.0974 93.1028C29.0838 87.2979 30.5484 79.2601 38.6411 76.0653C38.6575 77.5895 39.0329 78.6427 38.6739 79.1137C33.1194 86.538 29.4108 94.8997 26.3617 103.505C23.7864 110.547 20.5621 110.948 16.2353 105.236C11.7393 99.2408 6.58294 93.6423 1.80392 87.8174C0.994764 86.8968 0.695309 85.5424 0 84.17C5.18524 83.615 5.18523 83.615 16.9862 95.5807C17.0077 93.9059 17.1042 92.5696 17.1062 91.29C16.8634 78.2685 16.5261 65.3036 16.5284 52.2629C16.5541 48.0288 17.07 43.7562 18.0946 39.6897C19.9161 32.4604 25.0296 29.6474 32.1521 31.8927C35.7887 33.034 39.1976 35.0791 42.4178 37.2373C46.0524 39.6583 49.29 42.701 52.7923 45.3292C55.2967 47.15 58.0277 48.707 60.7772 50.5085C63.0253 47.6254 62.8602 44.7842 62.9966 42.0177C63.5434 30.312 62.3365 18.8918 59.6969 7.43646C59.3974 6.08211 58.8529 4.74702 58.8929 3.31679C58.9319 2.52637 59.6877 1.43358 60.4426 0.980591C60.82 0.754099 62.1952 1.33498 62.628 1.84229C63.6812 3.38346 64.6586 5.22585 65.1836 6.95615C69.0283 19.3502 70.629 32.0682 69.7786 44.9787C69.6801 47.5946 69.0914 50.249 68.2391 52.678C66.6484 57.0842 63.4784 58.8588 59.0695 57.286C55.4709 55.9941 52.1563 53.8924 49.0304 51.6775C44.398 48.4492 40.2189 44.6931 35.5865 41.4648C33.0442 39.7946 30.2567 38.1436 26.0324 39.0168Z"
            fill="#808080"
          />
        </svg>
      </CardFooter>
    </Card>
  );
};

export default PostContactCard;
