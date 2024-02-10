import * as Dialog from "@radix-ui/react-dialog";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { X } from "lucide-react";

export function NewNoteCard() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="text-left rounded-md bg-slate-700 p-5 flex flex-col gap-3 overflow-hidden 
      relative 
      hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none"
      >
        <span className="text-sm font-medium text-slate-200">
          Adicionar nota
        </span>
        <p className="text-sm leading-6 text-slate-400">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="flex flex-col overflow-hidden fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] max-w-[640px] w-full bg-slate-700 rounded outline-none">
          <Dialog.Close className="absolute right-0 top-0 p-1.5 bg-slate-800 text-slate-400 hover:text-slate-200">
            <X className="size-5" />
          </Dialog.Close>

          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className="text-sm font-medium text-slate-200">
              Adicionar nota
            </span>
            <p className="text-sm leading-6 text-slate-300">
              Comece{" "}
              <button className="text-lime-400 hover:underline font-medium">
                gravando uma nota
              </button>{" "}
              em áudio ou se preferir{" "}
              <button className="text-lime-400 hover:underline font-medium">
                utilize apenas texto
              </button>
              .
            </p>
          </div>

          <button
            type="button"
            className="w-full bg-lime-400 text-center py-4 text-sm text-lime-950 outline-none font-medium hover:bg-lime-500"
          >
            Salvar nota
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
