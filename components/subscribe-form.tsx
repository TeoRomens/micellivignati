"use client";

import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {ArrowRight, LoaderCircle} from "lucide-react";
import {useId, useState} from "react";
import {subscribe} from "./subscribe-action";

// Add type for form state
type FormStatus = "idle" | "loading" | "success" | "error";

function Form({position = "bottom"}: { position?: "top" | "bottom" }) {
  const id = useId();
  const [formState, setFormState] = useState({
    email: "",
    status: "idle" as FormStatus,
    message: "",
  });

  const isLoading = formState.status === "loading";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState((prev) => ({...prev, status: "loading", message: ""}));

    try {
      const result = await subscribe(formState.email);
      if (!result.success) {
        setFormState((prev) => ({...prev, status: "error", message: result.error}));
      } else {
        setFormState({email: "", status: "success", message: "Thanks for subscribing!"});
      }
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        status: "error",
        message: error instanceof Error ? error.message : "Failed to subscribe",
      }));
    }
  };

  return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <div className="inline-flex gap-2">
            <Input
                id={id}
                className={cn(
                    "flex-1 md:min-w-64 [&:-webkit-autofill]:bg-background [&:-webkit-autofill]:[transition:background-color_5000000s_ease-in-out_0s]",
                    position === "bottom" &&
                    "border-zinc-700/65 bg-white text-primary placeholder:text-zinc-500 [&:-webkit-autofill]:bg-zinc-700/30 [&:-webkit-autofill]:[-webkit-text-fill-color:#fff]",
                    position === "top" && "h-10",
                )}
                placeholder={"Inserisci la tua email"}
                type="email"
                value={formState.email}
                onChange={(e) => setFormState((prev) => ({...prev, email: e.target.value}))}
                disabled={isLoading}
                aria-label="Subscribe to the newsletter"
                required
            />
            <Button
                type="submit"
                className={cn("group h-9 px-4", position === "top" && "h-10")}
                disabled={isLoading}
                data-loading={isLoading}
            >
            <span className="group-data-[loading=true]:text-transparent">
              Iscriviti
            </span>
              <ArrowRight
                  className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
              />
              {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <LoaderCircle
                        className="animate-spin"
                        size={16}
                        strokeWidth={2}
                        aria-hidden="true"
                    />
                  </div>
              )}
            </Button>
          </div>
          {formState.message && (
              <p
                  className={cn(
                      "mt-2 text-xs",
                      formState.status === "error" ? "text-destructive" : "text-muted-foreground",
                  )}
                  role="alert"
                  aria-live="polite"
              >
                {formState.message}
              </p>
          )}
        </div>
      </form>
  );
}

export function SubscribeTop() {
  return <Form position="top"/>;
}

export function SubscribeBottom() {
  return (
      <div className="relative overflow-hidden rounded-xl bg-white px-4 py-10 sm:px-8">
        <h2 className="mb-6 text-xl/[1.1] font-extrabold tracking-tight text-foreground md:text-2xl/[1.1]">
          Iscriviti alla nostra newsletter!
        </h2>
        <Form/>
      </div>
  );
}
