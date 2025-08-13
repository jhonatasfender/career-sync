import { t } from "@lingui/core/macro";
import {
  Button,
  Checkbox,
  Label,
  RichInput,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@reactive-resume/ui";
import { useState } from "react";

import { toast } from "../../../hooks/use-toast";
import { createApplication } from "../../../services/application/application";

export const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [selectedExpression, setSelectedExpression] = useState<string>("");
  const [selectedNetworks, setSelectedNetworks] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [coverLetter, setCoverLetter] = useState<string | null>(null);

  const expressions = [
    { value: "formal", label: t`Formal` },
    { value: "informal", label: t`Informal` },
    { value: "professional", label: t`Profissional` },
    { value: "casual", label: t`Casual` },
  ];

  const networks = [
    { value: "email", label: t`Email` },
    { value: "whatsapp", label: t`WhatsApp` },
    { value: "linkedin", label: t`LinkedIn` },
  ];

  const handleNetworkChange = (value: string) => {
    setSelectedNetworks((prev) => {
      if (prev.includes(value)) return prev.filter((v) => v !== value);
      return [...prev, value];
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message?.trim()) {
      toast({ variant: "error", title: t`Mensagem obrigatória` });
      return;
    }
    if (!selectedExpression) {
      toast({ variant: "error", title: t`Selecione a expressão` });
      return;
    }
    if (selectedNetworks.length === 0) {
      toast({ variant: "error", title: t`Selecione pelo menos um canal` });
      return;
    }

    try {
      setSubmitting(true);
      const resp = await createApplication({
        message,
        expression: selectedExpression as "formal" | "informal" | "professional" | "casual",
        channels: selectedNetworks as ("email" | "whatsapp" | "linkedin")[],
      });
      setCoverLetter(resp.coverLetter ?? null);
      toast({ variant: "success", title: t`Enviado com sucesso` });
    } catch (error: unknown) {
      let errorMessage = t`Falha ao enviar`;

      if (error && typeof error === "object" && "response" in error) {
        const responseError = error as { response?: { data?: { message?: string } } };
        if (responseError.response?.data?.message) {
          errorMessage = responseError.response.data.message;
        }
      } else if (error && typeof error === "object" && "message" in error) {
        const messageError = error as { message: string };
        errorMessage = messageError.message;
      }

      toast({ variant: "error", title: errorMessage });
      setCoverLetter(null);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen flex-col p-4">
      <form className="flex h-full flex-col gap-4" onSubmit={handleSubmit}>
        <RichInput
          content={message}
          onChange={(value) => {
            setMessage(value);
          }}
        />

        <div className="flex items-end gap-4">
          <div className="flex-1">
            <label className="mb-1 block text-sm font-medium text-gray-700">{t`Expressão`}</label>
            <Select value={selectedExpression} onValueChange={setSelectedExpression}>
              <SelectTrigger>
                <SelectValue placeholder={t`Selecione a expressão`} />
              </SelectTrigger>
              <SelectContent>
                {expressions.map((expression) => (
                  <SelectItem key={expression.value} value={expression.value}>
                    {expression.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <label className="mb-1 block text-sm font-medium text-gray-700">{t`Redes Sociais`}</label>
            <div className="flex flex-wrap gap-4 rounded-md border border-gray-200 bg-background p-2">
              {networks.map((network) => (
                <div key={network.value} className="flex items-center space-x-2">
                  <Checkbox
                    checked={selectedNetworks.includes(network.value)}
                    id={network.value}
                    onCheckedChange={() => {
                      handleNetworkChange(network.value);
                    }}
                  />
                  <Label htmlFor={network.value}>{network.label}</Label>
                </div>
              ))}
            </div>
          </div>

          <Button className="h-[36px]" disabled={submitting} type="submit">
            {submitting ? t`Enviando...` : t`Enviar`}
          </Button>
        </div>
        {coverLetter && (
          <div className="mt-4 rounded-md border p-4">
            <label className="mb-2 block text-sm font-medium text-gray-700">{t`Carta de apresentação`}</label>
            <div className="whitespace-pre-wrap text-sm leading-relaxed">{coverLetter}</div>
          </div>
        )}
      </form>
    </div>
  );
};
