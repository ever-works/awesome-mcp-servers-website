"use client";

import { useConfig } from "@/app/[locale]/config";
import { ThemeToggler } from "../theme-toggler";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const config = useConfig();

  return (
    <footer className="border-t border-slate-200 py-4 w-full">
      <div className="max-w-[1536px] px-4 mx-auto flex items-center justify-between">
        <p className="text-slate-500 dark:text-slate-200 text-sm">
          &copy; {config.copyright_year} {config.company_name}.{" "}
          {t("ALL_RIGHTS_RESERVED")}.
        </p>
        <ThemeToggler />
      </div>
    </footer>
  );
}
