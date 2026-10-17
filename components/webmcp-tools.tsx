"use client";

import { useEffect } from "react";

declare global { interface Document { modelContext?: { registerTool:(tool:{name:string;title:string;description:string;inputSchema:object;annotations:{readOnlyHint:boolean;untrustedContentHint:boolean};execute:(input:unknown)=>unknown},options?:{signal:AbortSignal})=>void|Promise<void> } } }

export function WebMcpTools() {
  useEffect(() => {
    const context = document.modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    try {
      void Promise.resolve(context.registerTool({
        name: "start_consultation_request",
        title: "Start a consultation request",
        description: "Open the free consultation request page. This starts the request flow but does not submit or confirm an appointment.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: false, untrustedContentHint: false },
        execute(input) {
          if (!input || typeof input !== "object" || Array.isArray(input) || Object.keys(input).length > 0) throw new Error("This action does not accept input fields.");
          window.location.assign(new URL("/consultation", window.location.href).toString());
          return { status: "opened", appointmentConfirmed: false };
        },
      }, { signal: lifecycle.signal })).catch(() => {});
    } catch {}
    return () => lifecycle.abort();
  }, []);
  return null;
}
