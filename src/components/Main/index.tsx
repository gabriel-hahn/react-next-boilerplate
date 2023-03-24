interface IMainProps {
  title?: string;
}

export const Main = ({ title = "React - NextJS" }: IMainProps) => (
  <main className="w-full h-full bg-slate-900 flex items-center justify-center">
    <h1 className="text-5xl font-bold text-gray-300">{title}</h1>
  </main>
);
