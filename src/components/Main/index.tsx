interface IMainProps {
  title?: string;
}

export const Main = ({ title = "React - NextJS" }: IMainProps) => (
  <main>
    <h1 className="text-3xl font-bold underline">{title}</h1>
  </main>
);
