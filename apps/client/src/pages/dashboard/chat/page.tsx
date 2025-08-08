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

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // TODO: Implement submit logic
};

export const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [selectedExpression, setSelectedExpression] = useState<string>("");
  const [selectedNetworks, setSelectedNetworks] = useState<string[]>([]);

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
      if (prev.includes(value)) {
        return prev.filter((v) => v !== value);
      }
      return [...prev, value];
    });
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
                    id={network.value}
                    checked={selectedNetworks.includes(network.value)}
                    onCheckedChange={() => {
                      handleNetworkChange(network.value);
                    }}
                  />
                  <Label htmlFor={network.value}>{network.label}</Label>
                </div>
              ))}
            </div>
          </div>

          <Button type="submit" className="h-[36px]">
            {t`Enviar`}
          </Button>
        </div>
      </form>
    </div>
  );
};
