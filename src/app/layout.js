import "./globals.css";

export const metadata = {
  title: "Giovane Miqueloti - Portfolio",
  description: "Portfolio pessoal de Giovane Miqueloti da Silva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
