import { t } from "@lingui/core/macro";
import { Download } from "@phosphor-icons/react";
import {
  Button,
  RichInput,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@reactive-resume/ui";
import { useState } from "react";

import { toast } from "../../../hooks/use-toast";
import { createResume, type CreateResumeResponse } from "../../../services/application/resume";

export const ResumeGeneratorPage = () => {
  const [message, setMessage] = useState("");
  const [selectedExpression, setSelectedExpression] = useState<string>("");
  const [jobDescription, setJobDescription] = useState("");
  const [selectedResumeType, setSelectedResumeType] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const [resumeData, setResumeData] = useState<CreateResumeResponse | null>(null);

  const expressions = [
    { value: "formal", label: t`Formal` },
    { value: "informal", label: t`Informal` },
    { value: "professional", label: t`Profissional` },
    { value: "casual", label: t`Casual` },
  ];

  const resumeTypes = [
    { value: "targeted", label: t`Direcionado` },
    { value: "comprehensive", label: t`Abrangente` },
    { value: "executive", label: t`Executivo` },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message?.trim()) {
      toast({ variant: "error", title: t`Instruções obrigatórias` });
      return;
    }
    if (!selectedExpression) {
      toast({ variant: "error", title: t`Selecione a expressão` });
      return;
    }
    if (!selectedResumeType) {
      toast({ variant: "error", title: t`Selecione o tipo de currículo` });
      return;
    }

    try {
      setSubmitting(true);

      const result = await createResume({
        message,
        expression: selectedExpression as "formal" | "informal" | "professional" | "casual",
        jobDescription: jobDescription || undefined,
        resumeType: selectedResumeType as "comprehensive" | "targeted" | "executive",
      });

      setResumeData(result);
      toast({ variant: "success", title: t`Currículo gerado com sucesso!` });
    } catch (error) {
      toast({ variant: "error", title: t`Erro ao gerar currículo`, description: String(error) });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDownloadPDF = () => {
    if (!resumeData?.pdfBuffer || !resumeData?.profile) return;

    const byteCharacters = atob(resumeData.pdfBuffer);
    const byteNumbers = Array.from(
      { length: byteCharacters.length },
      (_, i) => byteCharacters.codePointAt(i) ?? 0,
    );
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "application/pdf" });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `curriculo-${resumeData.profile?.basics?.name ?? "profissional"}.pdf`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex h-screen flex-col p-4">
      <form className="flex h-full flex-col gap-4" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">{t`Descrição da Vaga`}</label>
            <RichInput
              content={jobDescription}
              placeholder={t`Cole aqui a descrição da vaga para personalizar o currículo...`}
              onChange={(value) => {
                setJobDescription(value);
              }}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">{t`Instruções adicionais`}</label>
            <RichInput
              content={message}
              placeholder={t`Instruções adicionais para personalizar o currículo...`}
              onChange={(value) => {
                setMessage(value);
              }}
            />
          </div>
        </div>

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
            <label className="mb-1 block text-sm font-medium text-gray-700">{t`Tipo de Currículo`}</label>
            <Select value={selectedResumeType} onValueChange={setSelectedResumeType}>
              <SelectTrigger>
                <SelectValue placeholder={t`Selecione o tipo`} />
              </SelectTrigger>
              <SelectContent>
                {resumeTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button className="h-[36px]" disabled={submitting} type="submit">
            {submitting ? t`Gerando...` : t`Gerar Currículo`}
          </Button>
        </div>
      </form>

      {resumeData?.resume && (
        <div className="mt-4 rounded-md border p-4">
          <div className="mb-4 flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700">{t`Currículo Gerado`}</label>
            {resumeData.pdfBuffer && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  handleDownloadPDF();
                }}
              >
                <Download className="mr-2 size-4" />
                {t`Baixar PDF`}
              </Button>
            )}
          </div>
          <div className="whitespace-pre-wrap text-sm leading-relaxed">{resumeData.resume}</div>
        </div>
      )}
    </div>
  );
};
